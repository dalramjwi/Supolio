import React from "react";

interface DivProps {
  className?: string;
  children?: string;
}

const Div: React.FC<DivProps> = ({ className, children }) => {
  return <div className={className}>{children}</div>;
};

export default Div;
