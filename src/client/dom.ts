export function isParent(test: HTMLElement, target: HTMLElement): boolean {
    let currElem = target;
    while (currElem.parentElement) {
        currElem = currElem.parentElement;
        if (currElem == test) return true;
    }
    return false;
}