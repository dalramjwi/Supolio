import { ProjectData } from "../interface/projectData";
import { ProjectDataStructure } from "./projectDataStructure";

export class TeamProjectDataStructure extends ProjectDataStructure {
  public contribute: string;

  constructor(data: ProjectData) {
    super(data);
    this.contribute = data.contribute!;
  }
}
