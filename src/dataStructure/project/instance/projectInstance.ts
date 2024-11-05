import dataJson from "../../../data/data.json";
import { ProjectDataStructure } from "../class/projectDataStructure.ts";
export const ProjectInstance = ProjectDataStructure.fromJson(dataJson);
