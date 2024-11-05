import dataJson from "../../../data/data.json";
import { ProjectDataStructure } from "../class/projectDataStructure.ts";
import { TeamProjectDataStructure } from "../class/teamProjectDataStructure.ts";
import { ProjectContentJson } from "../interface/projectContentJson.ts";

// JSON 데이터에서 `single` 및 `team` 데이터 추출 후 각각의 인스턴스 생성
const projectData = dataJson.project as ProjectContentJson;

const singleProjects = projectData.single.map(
  (data) => new ProjectDataStructure(data)
);
const teamProjects = projectData.team.map(
  (data) => new TeamProjectDataStructure(data)
);

export const ProjectInstance = [...singleProjects, ...teamProjects];
