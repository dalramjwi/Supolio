import { ProjectDataStructure } from "../class/projectDataStructure";
import dataJson from "../../../data/data.json";
export const ProjectInstance = ProjectDataStructure.fromJson(dataJson);
