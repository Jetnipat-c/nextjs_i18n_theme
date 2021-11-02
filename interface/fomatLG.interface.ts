export interface IFomatLG {
  [key: string]: ISubFomatLG;
}

export interface ISubFomatLG {
  title: string;
  username: string;
  usernamePlaceholder: string;
  password: string;
  passwordPlaceholder: string;
  btnLogin: string;
}
