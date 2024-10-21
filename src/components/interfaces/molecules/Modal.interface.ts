import { CssProps } from "../atoms/CssProps.interface";
// HTML li 요소의 기본 속성을 확장한 인터페이스
export interface ModalProps extends CssProps {
  show: boolean;
  close: () => void;
  content: React.ReactNode;
}
