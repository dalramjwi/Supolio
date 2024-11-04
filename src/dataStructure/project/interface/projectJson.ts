import { ProjectData } from "./projectData.ts";
import { TeamProjectData } from "./teamProjectData.ts";

export interface ProjectJson {
  project: {
    single: ProjectData[];
    team: TeamProjectData[];
  };
}
