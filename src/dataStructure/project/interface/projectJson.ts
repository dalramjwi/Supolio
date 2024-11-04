import { ProjectData } from "./projectData";

export interface ProjectJson {
    project: {
        single: ProjectData[];
        team: ProjectData[];
    };
}
