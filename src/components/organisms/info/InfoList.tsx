import React, { useMemo } from "react";
import Div from "../../atoms/Div.tsx";
import Img from "../../atoms/Img.tsx";
import Anchor from "../../atoms/Anchor.tsx";
import { InfoListProps } from "../../interfaces/data/InfoListProps.ts";
import StudyModal from "../Modal/StudyModal.tsx";
import { useModal } from "../Modal/hook/useModal.tsx";

//todo css 처리 필요
const InfoList: React.FC<InfoListProps> = ({ infoData }) => {
  const { isModalOpen, openModal, closeModal } = useModal();

  // infoData만 메모이제이션 처리
  const memoizedInfoData = useMemo(() => infoData, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 text-center gap-8 mb-4 w-full">
      {Object.keys(memoizedInfoData).map((key) => {
        const { data, method, paragraph } = memoizedInfoData[key];

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
                      <Div className="text-left">
                        {Object.keys(data).map((subKey) => (
                          <Div key={subKey} className="mb-2">
                            <Div className="font-bold">
                              {subKey.toUpperCase()}
                            </Div>
                            <Div className="list-disc pl-5">
                              {data[subKey].map(
                                (item: string, index: number) => (
                                  <Div key={index}>{item}</Div>
                                )
                              )}
                            </Div>
                          </Div>
                        ))}
                      </Div>
                    );
                  case "modal":
                    return (
                      <Div
                        onClick={openModal}
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

      <StudyModal show={isModalOpen} close={closeModal} />
    </div>
  );
};

export default InfoList;
