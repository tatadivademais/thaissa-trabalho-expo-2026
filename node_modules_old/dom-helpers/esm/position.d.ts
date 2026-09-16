/**
 * Returns the relative position of a given element.
 *
 * @param node the element
 * @param offsetParent the offset parent
 */
export default function position(node: HTMLElement, offsetParent?: HTMLElement): {
    top: number;
    left: number;
    height: number;
    width: number;
} | {
    top: number;
    left: number;
    height: number;
    width: number;
    x: number;
    y: number;
    bottom: number;
    right: number;
    toJSON(): any;
};
