import React from "react";
import Div from "../../atoms/Div.tsx";
import Img from "../../atoms/Img.tsx";
import Anchor from "../../atoms/Anchor.tsx";

interface InfoListProps {
  infoData: {
    [key: string]: { data: string; method: string; paragraph: string };
  };
  onStudyClick: () => void;
}
//todo style 분리 필요
const InfoList: React.FC<InfoListProps> = ({ infoData, onStudyClick }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 text-center gap-8 mb-4 w-full">
      {Object.keys(infoData).map((key) => {
        const { data, method, paragraph } = infoData[key];
        return (
          <Div key={key} className="pb-4 mb-4 w-full">
            <Div className="text-2xl font-bold mb-2 border-b-2 border-gray-400 pb-2">
              {key.toUpperCase()}
            </Div>
            <Div>
              {(() => {
                switch (method) {
                  case "img":
                    return (
                      <Img src={data} alt={key} className="h-[15vh] top-12" />
                    );
                  case "a":
                    return (
                      <Anchor
                        href={data}
                        className="text-blue-700 underline text-xl"
                      >
                        {paragraph}
                      </Anchor>
                    );
                  case "text":
                    return (
                      <div className="text-left">
                        {Object.keys(data).map((subKey) => (
                          <div key={subKey} className="mb-2">
                            <p className="font-bold">{subKey.toUpperCase()}</p>
                            <ul className="list-disc pl-5">
                              {data[subKey].map(
                                (item: string, index: number) => (
                                  <li key={index}>{item}</li>
                                )
                              )}
                            </ul>
                          </div>
                        ))}
                      </div>
                    );
                  case "modal":
                    return (
                      <Div
                        onClick={onStudyClick}
                        className="cursor-pointer text-blue-700 underline text-xl"
                      >
                        {paragraph}
                      </Div>
                    );
                  default:
                    return null;
                }
              })()}
            </Div>
          </Div>
        );
      })}
    </div>
  );
};

export default InfoList;
