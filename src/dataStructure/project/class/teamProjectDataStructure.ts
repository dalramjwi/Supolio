import { TeamProjectData } from "../interface/projectData.ts";
import { ProjectDataStructure } from "./projectDataStructure.ts";

export class TeamProjectDataStructure extends ProjectDataStructure {
  public contribute: string;

  public constructor(data: TeamProjectData) {
    super(data);
    this.contribute = data.contribute!;
  }
}
