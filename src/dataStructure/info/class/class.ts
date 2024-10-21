import { InfoData, InfoJson } from "../interface/interface";

export class InfoDataStructure {
  public phoneNumber: { data: string; method: string };
  public email: { data: string; method: string };
  public github: { data: string; method: string };
  public stack: {
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
  public study: {
    data: { title: string[]; description: string[]; imgurl: string[] };
    method: string;
  };

  private constructor(data: InfoData) {
    this.phoneNumber = data.phoneNumber;
    this.email = data.email;
    this.github = data.github;
    this.stack = data.stack;
    this.study = data.study;
  }
  public static fromJson(json: InfoJson): InfoDataStructure {
    const data: InfoData = {
      phoneNumber: json.info.phoneNumber,
      email: json.info.email,
      github: json.info.github,
      stack: json.info.stack,
      study: json.info.study,
    };
    return new InfoDataStructure(data);
  }
}
