export interface ModalButtonProps {
  direction: "prev" | "next";
  onClick: () => void;
  disabled?: boolean;
}
