import { AnchorHTMLAttributes } from "react";
import { CssProps } from "../atoms/CssProps.interface";

// HTML a 요소의 기본 속성을 확장한 인터페이스
export interface AnchorProps
  extends AnchorHTMLAttributes<HTMLAnchorElement>,
    CssProps {}
