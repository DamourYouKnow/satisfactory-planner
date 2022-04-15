import { dom } from './dom';

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

        this.element.addEventListener('click', (event: MouseEvent) => { 
            const target = event.target as HTMLElement;
            if (!this.element.contains(target)) {
                this.collapse();
            }
        });

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