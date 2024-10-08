import { HTMLAttributes } from "react";
import { CssProps } from "../atoms/CssProps.interface";
// HTML ul 요소의 기본 속성을 확장한 인터페이스
export interface UlProps extends HTMLAttributes<HTMLUListElement>, CssProps {}
