import { MainJson } from "../interface/interface";

export class MainDataStructure {
  // public 필드들은 외부에서 접근 가능
  public name: string;
  public paragraph: string;
  public description: string;

  // private 생성자, 외부에서 직접 인스턴스를 만들 수 없도록 함
  private constructor(name: string, paragraph: string, description: string) {
    this.name = name;
    this.paragraph = paragraph;
    this.description = description;
  }

  // JSON 데이터를 받아 인스턴스를 생성하는 정적 메서드
  public static fromJson(json: MainJson): MainDataStructure {
    const { name, paragraph, description } = json.main;
    return new MainDataStructure(name, paragraph, description);
  }
}
