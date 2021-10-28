"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreditCardBuilder = void 0;
var readlineSync = require("readline-sync");
var Payment_1 = require("./Payment");
var CreditCardBuilder = /** @class */ (function (_super) {
    __extends(CreditCardBuilder, _super);
    function CreditCardBuilder() {
        var _this = _super.call(this) || this;
        _this.collectInfo = _this.creditCardInformation;
        _this.validateInfo = _this.validateCreditCard;
        return _this;
    }
    CreditCardBuilder.prototype.creditCardInformation = function () {
        var cc = {};
        console.log("\nEnter Credit Card information...");
        cc['cardHolder'] = readlineSync.question('Cardholder name: ');
        cc['cardNum'] = readlineSync.question('Card Number: ');
        cc['expiryDate'] = readlineSync.question('Expiry Date: ');
        return cc;
    };
    CreditCardBuilder.prototype.validateCreditCard = function (cc) {
        return /^[\w.' ]+$/.test(cc.cardHolder)
            && /\d{15,16}/.test(cc.cardNum)
            && /\d\d\/\d\d/.test(cc.expiryDate);
    };
    return CreditCardBuilder;
}(Payment_1.Payment));
exports.CreditCardBuilder = CreditCardBuilder;
