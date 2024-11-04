import { ProjectData } from "./projectData";
import { TeamProjectData } from "./teamProjectData";

export interface ProjectContentJson {
  single: ProjectData[];
  team: TeamProjectData[];
}
