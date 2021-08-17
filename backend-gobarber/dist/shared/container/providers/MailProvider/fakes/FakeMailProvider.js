"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

class FakeMailProvider {
  constructor() {
    this.emails = [];
  }

  async sendMail(message) {
    this.emails.push(message);
  }

}

var _default = FakeMailProvider;
exports.default = _default;