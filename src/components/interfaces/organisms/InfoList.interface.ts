import { StudyProps } from "../atoms/Study.interface";

export interface InfoListProps {
  infoData: {
    phoneNumber: { data: string; method: string };
    email: { data: string; method: string };
    github: { data: string; method: string; paragraph: string };
    stack: {
      data: {
        language: string[];
        framework: string[];
        markup: string[];
        database: string[];
        tool: string[];
        devops: string[];
      };
      method: string;
    };
    study: {
      data: StudyProps;
      method: string;
      paragraph: string;
    };
  };
}
