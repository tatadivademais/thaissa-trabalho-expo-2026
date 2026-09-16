import { useMenu as useMenuWeb } from '@react-aria/menu';
import { mapDomPropsToRN } from '@gluestack-ui/utils/aria';
export const useMenu = (props, state, ref) => {
    let params = useMenuWeb(props, state, ref);
    params.menuProps = mapDomPropsToRN(params.menuProps);
    return params;
};
//# sourceMappingURL=useMenu.web.js.map