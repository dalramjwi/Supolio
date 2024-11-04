import { fromJsonByKey } from "../../json/fromJsonByKey.ts";
import { InfoData } from "../interface/infoData.ts";
import { InfoJson } from "../interface/infoJson.ts";

export class InfoDataStructure {
  public phoneNumber: { data: string; method: string };
  public email: { data: string; method: string };
  public github: { data: string; method: string; paragraph: string };
  public stack: {
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
  public study: {
    data: { title: string[]; description: string[]; imgurl: string[] };
    method: string;
    paragraph: string;
  };

  public constructor(data: InfoData) {
    this.phoneNumber = data.phoneNumber;
    this.email = data.email;
    this.github = data.github;
    this.stack = data.stack;
    this.study = data.study;
  }
  public static fromJson(json: InfoJson): InfoDataStructure {
    return fromJsonByKey<InfoData>(json, "info", InfoDataStructure);
  }
}
