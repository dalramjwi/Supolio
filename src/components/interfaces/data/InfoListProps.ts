export interface InfoListProps {
  infoData: {
    "phone Number": { data: string; method: string };
    "e mail": { data: string; method: string };
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
      data: {
        title: string[];
        description: string[];
        imgurl: string[];
      };
      method: string;
      paragraph: string;
    };
  };
  onStudyClick: () => void;
}
