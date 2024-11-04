import { ProjectData, TeamProjectData } from "./projectData.ts";

export interface ProjectJson {
  project: {
    single: ProjectData[];
    team: TeamProjectData[];
  };
}
