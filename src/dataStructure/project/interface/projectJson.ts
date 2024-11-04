import { ProjectData } from "./projectData.ts";

export interface ProjectJson {
    project: {
        single: ProjectData[];
        team: ProjectData[];
    };
}
