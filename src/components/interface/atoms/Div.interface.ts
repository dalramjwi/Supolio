import React, { HTMLAttributes } from "react";

// HTML div 요소의 기본 속성을 확장한 interface
export interface DivProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
}
