abstract class Component {
    element: HTMLElement;

    constructor(element: HTMLElement) {
        this.element = element;
    }

    abstract update(): void;
}

interface DropdownItem {
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
        this.selectedElem.classList.add('dropdown-item-selected');
        this.selectedElem.onclick = () => {
            this.switch();
        };
        this.element.appendChild(this.selectedElem);

        this.itemListElem = document.createElement('ul');
        this.element.appendChild(this.itemListElem);

        this.select(this.items[0]);

        for (const item of this.items) {
            const itemElem = document.createElement('li');
            itemElem.classList.add('dropdown-item');
            itemElem.dataset.value = item.value;

            if (item.image) {
                const image = document.createElement('image');
                image.setAttribute('src', item.image);
                image.setAttribute('alt', '');
                itemElem.appendChild(image);
            }
            
            const labelDiv = document.createElement('div');
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
        this.selectedElem.textContent = this.selected.label;
        if (this.onSelect) {
            this.onSelect(this.selected);
        }
        this.collapse();
    }

    private handleClick(elem: HTMLLIElement) {
        const selection = this.items.find((item) => {
            return item.value == elem.dataset.value;
        });
        this.select(selection);
    }
}