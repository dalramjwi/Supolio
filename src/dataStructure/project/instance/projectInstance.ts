import { ProjectDataStructure } from "../class/projectDataStructure.ts";
import dataJson from "../../../data/data.json";
export const ProjectInstance = ProjectDataStructure.fromJson(dataJson);
