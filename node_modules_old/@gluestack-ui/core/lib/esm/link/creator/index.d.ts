import { useLink } from './UseLink';
import type { InterfaceLinkProps, IUseLinkProp, ILinkComponentType } from './types';
declare const createLink: <Root, TextProps>({ Root, Text, }: {
    Root: React.ComponentType<Root>;
    Text: React.ComponentType<TextProps>;
}) => ILinkComponentType<Root, TextProps>;
export type { InterfaceLinkProps, IUseLinkProp };
export { createLink, useLink };
//# sourceMappingURL=index.d.ts.map