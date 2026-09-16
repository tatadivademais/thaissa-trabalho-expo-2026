import { EventHandler } from './addEventListener.d.ts';
export default function filterEvents<K extends keyof HTMLElementEventMap>(selector: string, handler: EventHandler<K>): EventHandler<K>;
