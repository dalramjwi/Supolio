import { ImgHTMLAttributes } from "react";
import { CssProps } from "../atoms/CssProps.interface";

// HTML img 요소의 기본 속성을 확장한 인터페이스
export interface ImgProps
  extends ImgHTMLAttributes<HTMLImageElement>,
    CssProps {
  src: string;
  alt: string;
}
