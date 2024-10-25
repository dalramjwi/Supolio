export interface ProjectData {
    name: string;
    description: string;
    introduce: string;
    detail: string;
    contribute?: string;
    img: Record<string, string>;
    review: string;
    period: [string, string, ...string[]];
    stack: string[];
    link: [string | string[], string];
    thumbnail: string;
}
export interface ProjectJson {
    project: {
        single: ProjectData[];
        team: ProjectData[];
    };
}
