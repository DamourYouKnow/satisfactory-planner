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
    expanded: boolean;
    onSelect: (item: DropdownItem) => void;

    constructor(element: HTMLDivElement) {
        super(element);
        this.expanded = false;
        this.element.classList.add('dropdown');
    }

    update() {
        this.element.innerHTML = '';
        this.element.classList.add('dropdown');

        this.selectedElem = document.createElement('div');
        this.selectedElem.classList.add('dropdown-selected-item');
        this.selectedElem.onclick = () => {
            this.switch();
        };
        this.element.appendChild(this.selectedElem);

        const selectedItemImage = document.createElement('img');
        selectedItemImage.alt = '';
        this.selectedElem.appendChild(selectedItemImage);

        this.selectedItemLabel = document.createElement('span');
        this.selectedItemLabel.classList.add('dropdown-selected-item-label');
        this.selectedItemLabel.oninput = () => this.handleSearch();
        this.selectedElem.appendChild(this.selectedItemLabel);

        const dropIcon = document.createElement('i');
        dropIcon.classList.add('fa-solid', 'fa-angle-down', 'dropdown-arrow');
        this.selectedElem.appendChild(dropIcon);

        this.itemListElem = document.createElement('ul');
        this.element.appendChild(this.itemListElem);

        window.addEventListener('click', (event: MouseEvent) => { 
            const target = event.target as HTMLElement;
            if (!this.element.contains(target)) {
                this.collapse();
            }
        });

        this.select(this.items[0]);

        for (const item of this.items) {
            const itemElem = document.createElement('li');
            itemElem.classList.add('dropdown-item');
            itemElem.dataset.value = item.value;
            itemElem.dataset.label = item.label;

            const image = document.createElement('img');
            if (item.image) {
                image.src = item.image;
            }
            image.alt = '';
            itemElem.appendChild(image);
            
            const labelDiv = document.createElement('div');
            labelDiv.classList.add('dropdown-item-label');
            labelDiv.textContent = item.label;
            itemElem.appendChild(labelDiv);
            itemElem.onclick = () => {
                this.handleClick(itemElem);
            };

            this.itemListElem.appendChild(itemElem);
        }

        const noResultsItem = document.createElement('li');
        noResultsItem.classList.add(
            'dropdown-no-results', 'dropdown-item', 'hidden'
        );
        noResultsItem.textContent = 'No results...';
        this.itemListElem.appendChild(noResultsItem);
    }

    expand() {
        this.switch(true);
    }

    collapse() {
        this.switch(false);
    }

    switch(expanded?: boolean) {
        if (expanded === undefined) {
            this.expanded = !this.expanded;
        } else {
            this.expanded = expanded;
        }

        if (this.expanded) {
            this.itemListElem.classList.remove('hidden');
            this.selectedItemLabel.setAttribute('contenteditable', 'true');
            this.selectedItemLabel.focus();
        } else {
            this.itemListElem.classList.add('hidden');
            this.selectedItemLabel.removeAttribute('contenteditable');
        }
    }

    select(item: DropdownItem) {
        this.selected = item;
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
        this.collapse();
    }

    private handleClick(elem: HTMLLIElement) {
        const selection = this.items.find((item) => {
            return item.label == elem.dataset.label;
        });
        this.select(selection);
    }

    private handleSearch() {
        if (this.expanded) {
            const search = this.selectedItemLabel.textContent;
            const options = dom(this.itemListElem).tagname<HTMLLIElement>('li');
            options.forEach((option) => option.classList.remove('hidden'));
            const matches = options.filter((option) => {
                const label = option.dataset.label || option.dataset.value;
                if (!label) return false;
                return !label.toLowerCase().includes(search.toLowerCase());
            });
            matches.forEach((option) => option.classList.add('hidden'));
            const noResults = dom(this.itemListElem).classname(
                'dropdown-no-results'
            )[0];
            if (matches.length > 0) {
                noResults.classList.remove('hidden');
            } else {
                noResults.classList.add('hidden');
            }
        } else {
            return;
        }
    }
}