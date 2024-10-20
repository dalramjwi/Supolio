import { HTMLAttributes } from "react";
import { CssProps } from "../atoms/CssProps.interface";

// HTML div 요소의 기본 속성 + 추가 속성을 포함하는 인터페이스
export interface HtmlElementDivProps
  extends HTMLAttributes<HTMLDivElement>,
    CssProps {
  htmlContent: string;
}
