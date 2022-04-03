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

        const selectedItemLabel = document.createElement('span');
        selectedItemLabel.classList.add('dropdown-selected-item-label');
        this.selectedElem.appendChild(selectedItemLabel);

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
        } else {
            this.itemListElem.classList.add('hidden');
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
}