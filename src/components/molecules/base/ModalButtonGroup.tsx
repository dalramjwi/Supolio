import React from "react";
import ModalButton from "./ModalButton.tsx";
import { ModalButtonGroupProps } from "../interfaces/organisms/ModalButtonGroup.interface.ts";
//todo css 처리 필요

const ModalButtonGroup: React.FC<ModalButtonGroupProps> = ({
  onPrev,
  onNext,
  disablePrev = false,
  disableNext = false,
}) => {
  return (
    <div className="flex items-center w-full">
      <ModalButton direction="prev" onClick={onPrev} disabled={disablePrev} />
      <ModalButton direction="next" onClick={onNext} disabled={disableNext} />
    </div>
  );
};

export default ModalButtonGroup;
