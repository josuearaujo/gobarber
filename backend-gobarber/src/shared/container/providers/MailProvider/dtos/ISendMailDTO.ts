import IParseMailTEmplateDTO from '../../MailTemplateProvider/dtos/IParseMaiLTemplateDTO';

interface IMailContact {
  name: string;
  email: string;
}

export default interface ISendMailDTO {
  to: IMailContact;
  from?: IMailContact;
  subject: string;
  templateData: IParseMailTEmplateDTO;
}
