export interface TeamProjectData {
  name: string;
  description: string;
  introduce: string;
  detail: string;
  contribute: string;
  img: { description: string; imgurl: string }[];
  review: string;
  period: string[];
  stack: string[];
  link: (string | string[])[];
  thumbnail: string;
}
