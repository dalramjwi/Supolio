import React from "react";
import { AnchorProps } from "../interface/molecules/Anchor.interface";

const Anchor: React.FC<AnchorProps> = ({ href, className, children }) => {
  return (
    <a href={href} className={className}>
      {children}
    </a>
  );
};

export default Anchor;
