
export function dom(elem?: HTMLElement) {
    return new DOM(elem);
}

class DOM {
    private elem: HTMLElement;

    constructor(elem?: HTMLElement) {
        this.elem = elem || document.body;
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
