export interface IIndexLG {
  [key: string]: ISubIndexLG;
}

export interface ISubIndexLG {
  title: string;
  subtitle: string;
  document: string;
  subDoc: string;
  learn: string;
  subLearn: string;
  examples: string;
  subExamples: string;
  deploy: string;
  subDeploy: string;
}
