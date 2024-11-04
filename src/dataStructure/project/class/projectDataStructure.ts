import { ProjectData } from "../interface/projectData.ts";
import { ProjectJson } from "../interface/projectJson.ts";
import { TeamProjectDataStructure } from "./teamProjectDataStructure.ts";

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

  constructor(data: ProjectData) {
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

  public static fromJson(json: ProjectJson): ProjectDataStructure[] {
    const projectDataStructures: ProjectDataStructure[] = [];

    // Single Project 데이터 추가
    json.project.single.forEach((singleData) => {
      projectDataStructures.push(new ProjectDataStructure(singleData));
    });

    // Team Project 데이터 추가
    json.project.team.forEach((teamData) => {
      projectDataStructures.push(new TeamProjectDataStructure(teamData));
    });

    return projectDataStructures;
  }
}
