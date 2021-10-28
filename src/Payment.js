"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Payment = void 0;
var payment_systems_1 = require("./payment_systems");
var Payment = /** @class */ (function () {
    function Payment() {
    }
    Payment.prototype.build = function () {
        this.pse = new payment_systems_1.PaymentSystemExecutor(this.collectInfo, this.validateInfo);
    };
    Payment.prototype.getExecutor = function () { return this.pse; };
    return Payment;
}());
exports.Payment = Payment;
