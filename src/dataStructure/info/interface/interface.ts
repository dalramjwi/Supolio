export interface InfoData {
  phoneNumber: string;
  email: string;
  github: string;
  stack: {
    language: string[];
    framework: string[];
    makeup: string[];
    database: string[];
    tool: string[];
    devops: string[];
  };
  study: {
    title: string[];
    description: string[];
    imgurl: string[];
  };
}
export interface InfoJson {
  info: {
    phoneNumber: string;
    email: string;
    github: string;
    stack: {
      language: string[];
      framework: string[];
      makeup: string[];
      database: string[];
      tool: string[];
      devops: string[];
    };
    study: {
      title: string[];
      description: string[];
      imgurl: string[];
    };
  };
}
