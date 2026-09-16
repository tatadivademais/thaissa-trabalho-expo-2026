import { useHover as useHoverWeb } from '@react-aria/interactions';
import { useEffect } from 'react';
import { attachEventHandlersOnRef } from '../utils';
export const useHover = (props = {}, ref) => {
    let params = useHoverWeb(props);
    useEffect(() => {
        ref && ref.current && attachEventHandlersOnRef(params.hoverProps, ref);
    }, []);
    const finalResult = Object.assign(Object.assign({}, params), { hoverProps: Object.assign(Object.assign({}, params.hoverProps), { onHoverIn: params.hoverProps.onPointerEnter, onHoverOut: params.hoverProps.onPointerLeave }) });
    return finalResult;
};
//# sourceMappingURL=useHover.web.js.map