"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _tsyringe = require("tsyringe");

var _CreateAppointmentService = _interopRequireDefault(require("../../../services/CreateAppointmentService"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class AppoitnmentsController {
  async create(request, response) {
    const {
      provider_id,
      date
    } = request.body;
    const user_id = request.user.id;

    const createAppointmentService = _tsyringe.container.resolve(_CreateAppointmentService.default);

    const appointment = await createAppointmentService.execute({
      date,
      provider_id,
      user_id
    });
    return response.json(appointment);
  }

}

exports.default = AppoitnmentsController;