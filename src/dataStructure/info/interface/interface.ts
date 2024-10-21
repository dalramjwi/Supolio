export interface InfoData {
  phoneNumber: { data: string; method: string };
  email: { data: string; method: string };
  github: { data: string; method: string };
  stack: {
    data: {
      language: string[];
      framework: string[];
      makeup: string[];
      database: string[];
      tool: string[];
      devops: string[];
    };
    method: string;
  };
  study: {
    data: { title: string[]; description: string[]; imgurl: string[] };
    method: string;
  };
}
export interface InfoJson {
  info: {
    phoneNumber: { data: string; method: string };
    email: { data: string; method: string };
    github: { data: string; method: string };
    stack: {
      data: {
        language: string[];
        framework: string[];
        makeup: string[];
        database: string[];
        tool: string[];
        devops: string[];
      };
      method: string;
    };
    study: {
      data: { title: string[]; description: string[]; imgurl: string[] };
      method: string;
    };
  };
}
