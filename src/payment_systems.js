"use strict";
exports.__esModule = true;
exports.PaymentSystemContext = exports.PaymentSystemExecutor = void 0;
var PaymentSystemExecutor = /** @class */ (function () {
    function PaymentSystemExecutor() {
    }
    PaymentSystemExecutor.prototype.getPaymentInfo = function (payment) {
        //Get informatino based on payment type
    };
    PaymentSystemExecutor.prototype.validatePaymentInfo = function (payment) {
        //validated payment infor based on type
    };
    PaymentSystemExecutor.prototype.execute = function (payment) {
        //Workflow & print
    };
    return PaymentSystemExecutor;
}());
exports.PaymentSystemExecutor = PaymentSystemExecutor;
var PaymentSystemContext = /** @class */ (function () {
    function PaymentSystemContext() {
    }
    return PaymentSystemContext;
}());
exports.PaymentSystemContext = PaymentSystemContext;
