"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentSystemExecutor = void 0;
var PaymentSystemExecutor = /** @class */ (function () {
    function PaymentSystemExecutor(collectInfo, validateInfo) {
        this.collectInfo = collectInfo;
        this.validateInfo = validateInfo;
    }
    PaymentSystemExecutor.prototype.execute = function () {
        if (this.validateInfo(this.collectInfo())) {
            console.log("\nEncrypting Payment..");
            console.log("Processing Payment...");
        }
        else
            console.log("Sorry, invalid payment!");
    };
    return PaymentSystemExecutor;
}());
exports.PaymentSystemExecutor = PaymentSystemExecutor;
