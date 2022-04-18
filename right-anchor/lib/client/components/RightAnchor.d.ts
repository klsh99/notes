import { PageHeader } from '@vuepress/client';
import '../styles/vars.css';
import '../styles/right-anchor.css';
export declare type RightAnchorPageHeaders = Omit<PageHeader, 'children'>[];
export declare const RightAnchor: import("vue").DefineComponent<{}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}> | null, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}>;
export default RightAnchor;
