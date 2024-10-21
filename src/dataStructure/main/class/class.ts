import { MainData, MainJson } from "../interface/interface";

export class MainDataStructure {
  // public 필드들은 외부에서 접근 가능
  public name: string;
  public paragraph: string;
  public description: string;

  // private 생성자, 외부에서 직접 인스턴스를 만들 수 없도록 함
  private constructor(data: MainData) {
    this.name = data.name;
    this.paragraph = data.paragraph;
    this.description = data.description;
  }
  // JSON 데이터를 받아 인스턴스를 생성하는 정적 메서드
  public static fromJson(json: MainJson): MainDataStructure {
    // 이름, 문단, 설명을 추출한 후 객체로 묶어서 생성자에 전달
    const data: MainData = {
      name: json.main.name,
      paragraph: json.main.paragraph,
      description: json.main.description,
    };
    return new MainDataStructure(data);
  }
}
