import React from "react";
import ModalButton from "./ModalButton.tsx";

interface ModalButtonGroupProps {
  onPrev: () => void;
  onNext: () => void;
  disablePrev?: boolean;
  disableNext?: boolean;
}

const ModalButtonGroup: React.FC<ModalButtonGroupProps> = ({
  onPrev,
  onNext,
  disablePrev = false,
  disableNext = false,
}) => {
  return (
    <div className="flex justify-between items-center w-full">
      <ModalButton direction="prev" onClick={onPrev} disabled={disablePrev} />
      <ModalButton direction="next" onClick={onNext} disabled={disableNext} />
    </div>
  );
};

export default ModalButtonGroup;
