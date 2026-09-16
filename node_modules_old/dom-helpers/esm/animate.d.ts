import { EventHandler } from './addEventListener.d.ts';
import { TransformValue } from './isTransform.d.ts';
import { Property } from './types.d.ts';
type AnimateProperties = Record<Property | TransformValue, string>;
interface Options {
    node: HTMLElement;
    properties: AnimateProperties;
    duration?: number;
    easing?: string;
    callback?: EventHandler<'transitionend'>;
}
interface Cancel {
    cancel(): void;
}
declare function animate(options: Options): Cancel;
declare function animate(node: HTMLElement, properties: AnimateProperties, duration: number): Cancel;
declare function animate(node: HTMLElement, properties: AnimateProperties, duration: number, callback: EventHandler<'transitionend'>): Cancel;
declare function animate(node: HTMLElement, properties: AnimateProperties, duration: number, easing: string, callback: EventHandler<'transitionend'>): Cancel;
export default animate;
