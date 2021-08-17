interface ITemplateVariables {
  [key: string]: string | number;
}

export default interface IParseMailTEmplateDTO {
  file: string;
  variables: ITemplateVariables;
}
