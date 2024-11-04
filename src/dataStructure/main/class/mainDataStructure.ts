import { fromJsonByKey } from "../../json/fromJsonByKey.ts";
import { MainData } from "../interface/mainData.ts";
import { MainJson } from "../interface/mainJson.ts";

export class MainDataStructure {
  // public 필드들은 외부에서 접근 가능
  public name: string;
  public paragraph: string;
  public description: string;

  public constructor(data: MainData) {
    this.name = data.name;
    this.paragraph = data.paragraph;
    this.description = data.description;
  }
  // JSON 데이터를 받아 인스턴스를 생성하는 정적 메서드
  public static fromJson(json: MainJson): MainDataStructure {
    return fromJsonByKey<MainData>(json, "main", MainDataStructure);
  }
}
