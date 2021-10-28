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
exports.OnlineBuilder = void 0;
var readlineSync = require("readline-sync");
var Payment_1 = require("./Payment");
var OnlineBuilder = /** @class */ (function (_super) {
    __extends(OnlineBuilder, _super);
    function OnlineBuilder() {
        var _this = _super.call(this) || this;
        _this.collectInfo = _this.onlinePaymentInformation;
        _this.validateInfo = _this.validateOnlinePayment;
        return _this;
    }
    OnlineBuilder.prototype.onlinePaymentInformation = function () {
        var op = {};
        console.log("\nEnter online payment information...");
        op['email'] = readlineSync.question('Email: ');
        op['pass'] = readlineSync.question('Password: ');
        return op;
    };
    OnlineBuilder.prototype.validateOnlinePayment = function (op) {
        return /^[\w@.]+$/.test(op.email)
            && /\w+/.test(op.pass);
    };
    return OnlineBuilder;
}(Payment_1.Payment));
exports.OnlineBuilder = OnlineBuilder;
