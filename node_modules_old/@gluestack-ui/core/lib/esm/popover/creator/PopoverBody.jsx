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
import React, { forwardRef } from 'react';
import { usePopoverContent } from './PopoverContext';
const PopoverBody = (StyledPopoverBody) => forwardRef((_a, ref) => {
    var { children } = _a, props = __rest(_a, ["children"]);
    const { value } = usePopoverContent('PopoverContext');
    const { setBodyMounted, bodyId } = value;
    React.useEffect(() => {
        if (setBodyMounted) {
            setBodyMounted(true);
            return () => {
                setBodyMounted(false);
            };
        }
        else {
            return () => { };
        }
    }, [setBodyMounted]);
    return (<StyledPopoverBody id={bodyId} ref={ref} {...props}>
        {children}
      </StyledPopoverBody>);
});
export default PopoverBody;
//# sourceMappingURL=PopoverBody.jsx.map