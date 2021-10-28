"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createPayment = void 0;
var BankDraftBuilder_1 = require("./BankDraftBuilder");
var CreditCardBuilder_1 = require("./CreditCardBuilder");
var OfflineBuilder_1 = require("./OfflineBuilder");
var OnlineBuilder_1 = require("./OnlineBuilder");
function createPayment(type) {
    var payment;
    switch (type.toLowerCase()) {
        case "creditcard":
            payment = new CreditCardBuilder_1.CreditCardBuilder();
            payment.build();
            return payment.getExecutor();
        case "bankdraft":
            payment = new BankDraftBuilder_1.BankDraftBuilder();
            payment.build();
            return payment.getExecutor();
        case "online":
            payment = new OnlineBuilder_1.OnlineBuilder();
            payment.build();
            return payment.getExecutor();
        case "offline":
            payment = new OfflineBuilder_1.OfflineBuilder();
            payment.build();
            return payment.getExecutor();
        default:
            return null;
    }
}
exports.createPayment = createPayment;
