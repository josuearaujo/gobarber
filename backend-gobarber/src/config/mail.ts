interface IMailConfig {
  driver: 'ethereal' | 'ses';
  defaults: {
    from: {
      email: string;
      name: string;
    };
  };
}

export default {
  driver: process.env.MAIL_DRIVER || 'ethereal',

  defaults: {
    from: {
      email: 'email_padrao_configurado_no_dominio@dominio.com',
      name: 'Nome_Padrão',
    },
  },
} as IMailConfig;
