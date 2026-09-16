import { CamelProperty, Property } from './types.d.ts';
export default function camelizeStyleName<T extends string = Property>(string: T): CamelProperty;
