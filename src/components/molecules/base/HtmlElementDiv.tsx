import React from "react";
import { HtmlElementDivProps } from "../../interfaces/organisms/HtmlElementDiv.interface";
import Div from "../../atoms/base/Div.tsx";

const HtmlElementDiv: React.FC<HtmlElementDivProps> = ({
  htmlContent,
  className,
}) => {
  return (
    <Div
      className={className}
      dangerouslySetInnerHTML={{ __html: htmlContent }}
    />
  );
};

export default HtmlElementDiv;
