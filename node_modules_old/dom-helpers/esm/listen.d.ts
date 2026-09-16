import { EventHandler } from './addEventListener.d.ts';
declare function listen<K extends keyof HTMLElementEventMap>(node: HTMLElement, eventName: K, handler: EventHandler<K>, options?: boolean | AddEventListenerOptions): () => void;
export default listen;
