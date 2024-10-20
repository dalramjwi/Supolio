import React from "react";
import { HtmlElementDivProps } from "../interfaces/organisms/HtmlElementDiv.interface";

const HtmlElementDiv: React.FC<HtmlElementDivProps> = ({
  htmlContent,
  className,
}) => {
  return (
    <div
      className={className}
      dangerouslySetInnerHTML={{ __html: htmlContent }}
    />
  );
};

export default HtmlElementDiv;
