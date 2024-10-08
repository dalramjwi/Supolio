import { HTMLAttributes } from "react";
import { CssProps } from "../atoms/CssProps.interface";
import { ChildrenProps } from "../atoms/ChildrenProps.interface";

// HTML div 요소의 기본 속성을 확장한 인터페이스
export interface DivProps
  extends HTMLAttributes<HTMLDivElement>,
    CssProps,
    ChildrenProps {}
