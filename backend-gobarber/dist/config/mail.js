"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = {
  driver: process.env.MAIL_DRIVER || 'ethereal',
  defaults: {
    from: {
      email: 'email_padrao_configurado_no_dominio@dominio.com',
      name: 'Nome_Padrão'
    }
  }
};
exports.default = _default;