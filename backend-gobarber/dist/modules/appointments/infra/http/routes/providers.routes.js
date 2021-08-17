"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _celebrate = require("celebrate");

var _enusureAuthenticated = _interopRequireDefault(require("../../../../users/infra/http/middlewares/enusureAuthenticated"));

var _ProvidersController = _interopRequireDefault(require("../controllers/ProvidersController"));

var _ProviderDayAvailabilityControler = _interopRequireDefault(require("../controllers/ProviderDayAvailabilityControler"));

var _ProviderMonthAvailabilityControler = _interopRequireDefault(require("../controllers/ProviderMonthAvailabilityControler"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const providersRouter = (0, _express.Router)();
const providersController = new _ProvidersController.default();
const providerDayAvailabilityController = new _ProviderDayAvailabilityControler.default();
const providerMonthDvailabilityController = new _ProviderMonthAvailabilityControler.default();
providersRouter.use(_enusureAuthenticated.default);
providersRouter.get('/', providersController.index);
providersRouter.get('/:provider_id/day-availability', (0, _celebrate.celebrate)({
  [_celebrate.Segments.PARAMS]: {
    provider_id: _celebrate.Joi.string().uuid().required()
  }
}), providerDayAvailabilityController.index);
providersRouter.get('/:provider_id/month-availability', (0, _celebrate.celebrate)({
  [_celebrate.Segments.PARAMS]: {
    provider_id: _celebrate.Joi.string().uuid().required()
  }
}), providerMonthDvailabilityController.index);
var _default = providersRouter;
exports.default = _default;