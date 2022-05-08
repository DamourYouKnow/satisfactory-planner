import { dom } from './dom';
import { FactoryBuildingGroup, ItemFlow } from './factory';

abstract class Component {
    element: HTMLElement;

    constructor(element: HTMLElement) {
        this.element = element;
    }

    abstract update(): void;
}

export interface DropdownItem {
    label: string;
    value: string;
    image?: string;
}

export class Dropdown extends Component {
    items: DropdownItem[];
    selected: DropdownItem;
    private selectedElem: HTMLDivElement;
    private itemListElem: HTMLUListElement;
    private selectedItemLabel: HTMLSpanElement;
    private search: string | null;
    expanded: boolean;
    onSelect: (item: DropdownItem) => void;

    static allowedCharacters = new Set<string>([
        ...'abcdefghijklmnopqrstuvwxyz'.split(''),
        ...'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split(''),
        ...[' ', '-', 'Backspace'],
    ]);

    constructor(element: HTMLDivElement) {
        super(element);
        this.expanded = false;
        this.search = null;
        this.element.classList.add('dropdown');

        this.element.setAttribute('tabindex', '-1');
        this.element.addEventListener('keydown', (event) => {
            if (this.expanded && Dropdown.allowedCharacters.has(event.key)) {
                this.handleSearchInput(event);
            }
        });

        const outsideClickHandler = (event: MouseEvent) => { 
            const target = event.target as HTMLElement;
            if (!this.element.contains(target)) {
                this.collapse();
            }
        };
        window.addEventListener('click', outsideClickHandler);

        const observer = new MutationObserver((mutationsList) => {
            const mutation = mutationsList.find((mutation) => {
                if (mutation.type != 'childList') return false;
                const nodes = Array.from(mutation.removedNodes);
                return nodes.some((node) => node == this.element);
            });
            if (mutation) {
                window.removeEventListener('click', outsideClickHandler);
            }
        });

        observer.observe(document.body, { 
            childList: true 
        });
    }

    update() {
        this.element.innerHTML = '';
        this.element.classList.add('dropdown');

        this.selectedElem = dom(this.element).create('div', {
            classList: ['dropdown-selected-item']
        });
        this.selectedElem.onclick = () => {
            this.switch();
        };

        const selectedItemImage = dom(this.selectedElem).create('img');
        selectedItemImage.alt = '';

        this.selectedItemLabel = dom(this.selectedElem).create('span', {
            classList: ['dropdown-selected-item-label']
        });

        dom(this.selectedElem).create('i', {
            classList: ['fa-solid', 'fa-angle-down', 'dropdown-arrow']
        });

        this.itemListElem = document.createElement('ul');
        this.element.appendChild(this.itemListElem);

        this.select(this.items[0]);

        for (const item of this.items) {
            const itemElem = dom().create('li', {
                classList: ['dropdown-item'],
                dataset: {
                    value: item.label,
                    label: item.label
                }
            });
            itemElem.onclick = () => {
                this.handleClick(itemElem);
            };

            const image = dom(itemElem).create('img');
            if (item.image) {
                image.src = item.image;
            }
            image.alt = '';
            
            dom(itemElem).create('div', {
                classList: ['dropdown-item-label'],
                textContent: item.label
            });

            this.itemListElem.appendChild(itemElem);
        }

        dom(this.itemListElem).create('li', {
            classList: ['dropdown-no-results', 'dropdown-item', 'hidden'],
            textContent: 'No results...'
        });
    }

    expand() {
        this.switch(true);
    }

    collapse() {
        this.switch(false);
    }

    switch(expanded?: boolean) {
        this.select(this.selected, false);

        if (expanded === undefined) {
            this.expanded = !this.expanded;
        } else {
            this.expanded = expanded;
        }

        if (this.expanded) {
            this.itemListElem.classList.remove('hidden');
            this.selectedItemLabel.focus();
        } else {
            this.itemListElem.classList.add('hidden');
        }
    }

    select(item: DropdownItem, collapse=true) {
        this.selected = item;
        this.search = null;
        this.showAll();
        const labelElem = dom(this.selectedElem).classname(
            'dropdown-selected-item-label'
        )[0];
        labelElem.textContent = this.selected.label;

        const image = dom(this.selectedElem)
            .tagname<HTMLImageElement>('img')[0];
        image.src = this.selected.image || '';

        if (this.onSelect) {
            this.onSelect(this.selected);
        }
        if (collapse) {
            this.collapse();
        }
    }

    private showAll() {
        const options = dom(this.itemListElem).classname('dropdown-item');
        options.forEach((option) => option.classList.remove('hidden'));
    }

    private handleClick(elem: HTMLLIElement) {
        const selection = this.items.find((item) => {
            return item.label == elem.dataset.label;
        });
        this.select(selection);
    }

    private handleSearchInput(event: KeyboardEvent) {
        const noResults = dom(this.itemListElem).classname(
            'dropdown-no-results'
        )[0];
        noResults.classList.add('hidden');

        if (!this.expanded) return;

        if (event.key == 'Backspace') {
            if (this.search.length > 1) {
                this.search = this.search.slice(0, this.search.length - 1);
            } else {
                this.search = null;
            }
        } else {
            this.search = (this.search || '') + event.key;
        }

        if (this.search == null) {
            this.select(this.selected, false);
            return;
        }

        this.selectedItemLabel.textContent = this.search;
        this.showAll();
        dom(this.selectedElem).tagname<HTMLImageElement>('img')[0].src = '';

        const options = dom(this.itemListElem).classname('dropdown-item');
        const matched = options.filter((option) => {
            const label = option.dataset.label || option.dataset.value;
            if (!label) return false;
            return label.toLowerCase().includes(this.search.toLowerCase());
        });
        const discarded = options.filter((item) => !matched.includes(item));
        discarded.forEach((option) => option.classList.add('hidden'));
        if (matched.length == 0) {
            noResults.classList.remove('hidden');
        }
    }
}

export class BuildingGroupManager {
    element: HTMLElement;
    table: HTMLElement;
    group: FactoryBuildingGroup;
    onchange: () => void;
    ondelete: (index: number) => void;

    static map = new Map<FactoryBuildingGroup, BuildingGroupManager>();

    constructor(element: HTMLElement, group: FactoryBuildingGroup) {
        this.element = element;
        this.group = group;
        if (!element.classList.contains('building-group')) {
            element.classList.add('building-group');
        }

        this.element.appendChild(this.flowTable(this.group.inputs));
        this.element.appendChild(this.buildingGroupInfo());
        this.element.appendChild(this.flowTable(this.group.outputs));

        const deleteStub = dom(this.element).create('div', {
            classList: ['building-group-delete']
        });
        const trashIcon = dom(deleteStub).create('i', {
            classList: ['trash-icon', 'fa-solid', 'fa-trash-can']
        });
        deleteStub.onclick = () => {
            if (this.ondelete) {
                const parent = dom(this.element).classnameParents(
                    'factory-section'
                )[0];
                const index = dom(parent).classname(
                    'building-group'
                ).findIndex((elem) => elem == this.element);
                this.element.remove();
                this.ondelete(index);
            }
        };

        BuildingGroupManager.map.set(group, this);
    }

    update() {
        const tables = dom(this.element).classname('item-flow-table');
        this.element.replaceChild(
            this.flowTable(this.group.inputs),
            tables[0]
        );
        this.element.replaceChild(
            this.flowTable(this.group.outputs),
            tables[1]
        );

        if (this.onchange) {
            this.onchange();
        }
    }

    private flowTable(itemFlows: ItemFlow[]): HTMLTableElement {
        const table = dom().create('table', {
            classList: ['item-flow-table']
        });
        for (const itemFlow of itemFlows) {
            const row = dom().create('tr');
    
            const imageCell = dom().create('td');
            const image = dom(imageCell).create('img');
            image.src = `images/${itemFlow.item}.png`;
            
            const itemCell = dom().create('td', {
                classList: ['item-flow-label']
            });
            dom(itemCell).create('div', {
                textContent: String(itemFlow.item)
            });
    
            const rateCell = dom().create('td', {
                classList: ['item-flow-rate'],
                textContent: String(`${itemFlow.ratePerMinute} / min`) 
            });
    
            row.appendChild(imageCell);
            row.appendChild(itemCell);
            row.appendChild(rateCell);
    
            table.appendChild(row);
        }
    
        return table;
    }

    private buildingGroupInfo(): HTMLDivElement {
        const infoDiv = dom().create('div', {
            classList: ['building-group-info']
        });
    
        const image = dom(infoDiv).create('img');
        image.src = `images/${this.group.building.building}.png`;
    
        dom(infoDiv).create('div', {
            textContent: this.group.building.building
        });
    
        const buildingCountDiv = dom(infoDiv).create('div', {
            textContent: `x`
        });
        const buildingCountInput = dom(buildingCountDiv).create('input', {
            attributes: {
                'type': 'text'
            },
            classList: ['building-count-input']
        });
        buildingCountInput.value = this.group.count.toString();
        buildingCountInput.onchange = (event: Event) => {
            const targetElem = event.target as HTMLInputElement;
            this.group.count = Number(targetElem.value);
            this.update();
        };
    
        return infoDiv;
    }
}
