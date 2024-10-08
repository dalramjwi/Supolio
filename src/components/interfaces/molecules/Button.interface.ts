import { ButtonHTMLAttributes } from "react";
import { CssProps } from "../atoms/CssProps.interface";
// HTML button 요소의 기본 속성을 확장한 인터페이스
export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    CssProps {}
