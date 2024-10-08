import React from "react";

interface AnchorProps {
  href: string;
  className?: string;
  children?: string;
}

const Anchor: React.FC<AnchorProps> = ({ href, className, children }) => {
  return (
    <a href={href} className={className}>
      {children}
    </a>
  );
};

export default Anchor;
