import { ProjectData } from "../interface/projectData.ts";
// import { ProjectContentJson } from "../interface/projectContentJson.ts";
// import { TeamProjectData } from "../interface/teamProjectData.ts";

// project 데이터를 담을 수 있는 ProjectContent 클래스
// class ProjectContent {
//   public single: ProjectData[];
//   public team: TeamProjectData[];

//   constructor(data: ProjectContentJson) {
//     this.single = data.single;
//     this.team = data.team;
//   }
// }

// 기본 ProjectDataStructure 클래스
export class ProjectDataStructure {
  public name: string;
  public description: string;
  public introduce: string;
  public detail: string;
  public img: { description: string; imgurl: string }[];
  public review: string;
  public period: string[];
  public stack: string[];
  public link: (string | string[])[];
  public thumbnail: string;

  public constructor(data: ProjectData) {
    this.name = data.name;
    this.description = data.description;
    this.introduce = data.introduce;
    this.detail = data.detail;
    this.img = data.img;
    this.review = data.review;
    this.period = data.period;
    this.stack = data.stack;
    this.link = data.link;
    this.thumbnail = data.thumbnail;
  }
}
