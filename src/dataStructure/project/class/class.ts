import { ProjectData, ProjectJson } from "../interface/interface";

export class ProjectDataStructure {
    public name: string;
    public description: string;
    public introduce: string;
    public detail: string;
    public contribute?: string;
    public img: Record<string, string>;
    public review: string;
    public period: [string, string, ...string[]];
    public stack: string[];
    public link: [string | string[], string];
    public thumbnail: string;

    private constructor(data: ProjectData) {
        this.name = data.name;
        this.description = data.description;
        this.introduce = data.introduce;
        this.detail = data.detail;
        this.contribute = data.contribute;
        this.img = data.img;
        this.review = data.review;
        this.period = data.period;
        this.stack = data.stack;
        this.link = data.link;
        this.thumbnail = data.thumbnail;
    }

    public static fromJson(json: ProjectJson): ProjectDataStructure[] {
        const projectDataStructures: ProjectDataStructure[] = [];

        json.project.single.forEach((singleData) => {
            projectDataStructures.push(new ProjectDataStructure(singleData));
        });

        json.project.team.forEach((teamData) => {
            projectDataStructures.push(new ProjectDataStructure(teamData));
        });

        return projectDataStructures;
    }
}
