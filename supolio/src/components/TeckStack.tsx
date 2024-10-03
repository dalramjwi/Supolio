import React from "react";

interface StackProps {
  title: string;
  items: string[];
  colorClass: string;
}

//기술 스택 리스트 컴포넌트
const TechStack: React.FC<StackProps> = ({ title, items, colorClass }) => {
  return (
    <div className="text-left mb-4">
      <h4 className="text-lg font-semibold mb-2">{title}</h4>
      <div className="flex flex-wrap gap-2">
        {items.map((item) => (
          <span
            key={item}
            className={`px-2 py-1 rounded-lg border ${colorClass}`}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};

export default TechStack;
