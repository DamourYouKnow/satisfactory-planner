export function dom(elem?: HTMLElement) {
    return new DOM(elem);
}

type StringMap = {[key: string]: string}

interface CreateElementOptions {
    id?: string,
    classList?: string[],
    textContent?: string
    dataset?: StringMap
}

class DOM {
    private elem: HTMLElement;

    static createOptions: {
        [key in keyof CreateElementOptions]: (
            elem: HTMLElement,
            value: any
        ) => void
    } = {
        'id': (elem, value: string) => elem.setAttribute('id', value),
        'classList': (elem, value: string[]) => elem.classList.add(...value),
        'textContent': (elem, value: string) => elem.textContent = value,
        'dataset': (elem, value: StringMap) => {
            for (const key in value) {
                elem.dataset[key] = value[key];
            }
        },
    };

    constructor(elem?: HTMLElement) {
        this.elem = elem || document.body;
    }

    public create<T extends keyof HTMLElementTagNameMap>(
        tag: T, options?: CreateElementOptions
    ): HTMLElementTagNameMap[T] {
        const elem = document.createElement(tag);
        if (options) {
            for (const key in options) {
                DOM.createOptions[key](elem, options[key]);
            }
        }       
        if (this.elem) this.elem.appendChild(elem);
        return elem;
    }

    public id<TElement extends HTMLElement>(id: string): TElement {
        const found = document.getElementById(id) as TElement;
        if (this.elem) {
            if (this.isParentOf(found)) {
                return found;
            } else {
                return undefined;
            }
        } else {
            return found;
        }
    }
    
    public classname<TElement extends HTMLElement>(
        classname: string
    ): TElement[] {
        return Array.from(
            this.elem.getElementsByClassName(classname)
        ) as TElement[];
    }
    
    public tagname<TElement extends HTMLElement>(
        tagname: string
    ): TElement[] {
        return Array.from(
            this.elem.getElementsByTagName(tagname)
        ) as TElement[];
    }
    
    public isParentOf(elem: HTMLElement): boolean {
        let currElem = elem;
        while (currElem.parentElement) {
            currElem = currElem.parentElement;
            if (currElem == this.elem) return true;
        }
        return false;
    }
}
