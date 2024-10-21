export class InfoDataStructure {
  public phoneNumber: string;
  public email: string;
  public github: string;
  public stack: {
    language: string[];
    framework: string[];
    makeup: string[];
    database: string[];
    tool: string[];
    devops: string[];
  };
  public study: {
    title: string[];
    description: string[];
    imgurl: string[];
  };

  private constructor(data: Record<string, any>) {
    this.phoneNumber = data.phoneNumber;
    this.email = data.email;
    this.github = data.github;
    this.stack = data.stack;
    this.study = data.study;
  }
}
