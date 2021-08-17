import IParseMailTEmplateDTO from '../dtos/IParseMaiLTemplateDTO';

export default interface IMailTemplateProvider {
  parse(data: IParseMailTEmplateDTO): Promise<string>;
}
