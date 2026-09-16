var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import { deepMergeObjects } from '../utils/deepMerge';
// @ts-ignore
import { tv } from 'tailwind-variants';
const tvatemp = (options, 
/**
 * The config object allows you to modify the default configuration.
 * @see https://www.tailwind-variants.org/docs/api-reference#config-optional
 */
config) => {
    const parentVariants = options === null || options === void 0 ? void 0 : options.parentVariants;
    const parentCompoundVariants = options === null || options === void 0 ? void 0 : options.parentCompoundVariants;
    delete options.parentVariants;
    delete options.parentCompoundVariants;
    options.variants = deepMergeObjects(parentVariants, options.variants);
    if (Array.isArray(parentCompoundVariants) &&
        parentCompoundVariants.length > 0) {
        if (!options.compoundVariants) {
            options.compoundVariants = [];
        }
        options.compoundVariants = [
            ...parentCompoundVariants,
            ...options.compoundVariants,
        ];
    }
    const callback = tv(options, config);
    return (inlineProps) => {
        const { parentVariants: inlineParentVariants = {} } = inlineProps, variant = __rest(inlineProps, ["parentVariants"]);
        const mergedVariants = deepMergeObjects(inlineParentVariants, variant);
        return callback(Object.assign({}, mergedVariants));
    };
};
export const tva = tvatemp;
//# sourceMappingURL=index.js.map