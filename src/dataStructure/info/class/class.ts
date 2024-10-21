import { InfoData, InfoJSon } from "../interface/interface";

export class InfoDataStructure {
  public phoneNumber: string;
  public email: string;
  public github: string;
  public stack: {
    language: string[];
    framework: string[];
    makeup: string[];
    database: string[];
    tool: string[];
    devops: string[];
  };
  public study: {
    title: string[];
    description: string[];
    imgurl: string[];
  };

  private constructor(data: InfoData) {
    this.phoneNumber = data.phoneNumber;
    this.email = data.email;
    this.github = data.github;
    this.stack = data.stack;
    this.study = data.study;
  }
  public static fromJson(json: InfoJSon): InfoDataStructure {
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
