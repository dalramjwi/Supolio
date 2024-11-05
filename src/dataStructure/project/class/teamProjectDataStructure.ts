import { TeamProjectData } from "../interface/teamProjectData.ts";
import { ProjectDataStructure } from "./projectDataStructure.ts";

// export class TeamProjectDataStructure extends ProjectDataStructure {
//   public contribute: string;

//   public constructor(data: TeamProjectData) {
//     super(data);
//     this.contribute = data.contribute!;
//   }
// }

export class TeamProjectDataStructure {
  public projectData: ProjectDataStructure;
  public contribute: string;

  constructor(data: TeamProjectData) {
    this.projectData = new ProjectDataStructure(data);
    this.contribute = data.contribute;
  }
}
