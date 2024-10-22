import { StudyProps } from "../atoms/Study.interface";

export interface StudyModalProps {
  studyData: StudyProps;
  show: boolean;
  close: () => void;
}
