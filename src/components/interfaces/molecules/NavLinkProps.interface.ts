import { NavLinkProps as ReactNavLinkProps } from "react-router-dom";
import { CssProps } from "../atoms/CssProps.interface";

// NavLink의 기본 속성을 확장한 인터페이스
export interface NavLinkProps extends ReactNavLinkProps, CssProps {}
