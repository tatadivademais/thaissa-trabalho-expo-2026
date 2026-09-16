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
import { combineContextAndProps } from '@gluestack-ui/utils/common';
import { useFormControlContext } from './useFormControl';
import { mergeRefs } from '@gluestack-ui/utils/common';
const FormControlLabel = ({ Label: StyledFormControlLabel, LabelAstrick: StyledFormControlLabelAstrick, }) => forwardRef((_a, ref) => {
    var { children } = _a, props = __rest(_a, ["children"]);
    const formControlContext = useFormControlContext();
    const _b = combineContextAndProps(formControlContext, props), { isRequired } = _b, combinedProps = __rest(_b, ["isRequired"]);
    const _ref = React.useRef(null);
    const mergedRef = mergeRefs([_ref, ref]);
    React.useEffect(() => {
        if (_ref.current) {
            // RN web doesn't support htmlFor for Label element yet
            if (props.htmlFor) {
                _ref.current.htmlFor = props.htmlFor;
            }
            else if (combinedProps === null || combinedProps === void 0 ? void 0 : combinedProps.id) {
                _ref.current.htmlFor = combinedProps.id;
            }
        }
    }, [combinedProps === null || combinedProps === void 0 ? void 0 : combinedProps.id, props.htmlFor]);
    const targetId = props.htmlFor || (combinedProps === null || combinedProps === void 0 ? void 0 : combinedProps.id);
    const handleClick = React.useCallback((e) => {
        var _a;
        (_a = props === null || props === void 0 ? void 0 : props.onClick) === null || _a === void 0 ? void 0 : _a.call(props, e);
        if (!targetId || typeof document === 'undefined')
            return;
        const inputElement = document.getElementById(targetId);
        if (inputElement instanceof HTMLInputElement) {
            inputElement.click();
        }
    }, [targetId, props.onClick]);
    return (<StyledFormControlLabel ref={mergedRef} {...combinedProps} id={combinedProps === null || combinedProps === void 0 ? void 0 : combinedProps.labelId} onClick={handleClick}>
        {children}
        {isRequired && (<StyledFormControlLabelAstrick>*</StyledFormControlLabelAstrick>)}
      </StyledFormControlLabel>);
});
export default FormControlLabel;
//# sourceMappingURL=FormControlLabel.jsx.map