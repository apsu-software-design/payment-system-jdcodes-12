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
exports.BankDraftBuilder = void 0;
var readlineSync = require("readline-sync");
var Payment_1 = require("./Payment");
var BankDraftBuilder = /** @class */ (function (_super) {
    __extends(BankDraftBuilder, _super);
    function BankDraftBuilder() {
        var _this = _super.call(this) || this;
        _this.collectInfo = _this.bankDraftInformation;
        _this.validateInfo = _this.validateBankDraft;
        return _this;
    }
    BankDraftBuilder.prototype.bankDraftInformation = function () {
        var bd = {};
        console.log("\nBank Draft Information....");
        bd['name'] = readlineSync.question('Name: ');
        bd['acctNum'] = readlineSync.question('Acct. #: ');
        bd['routingNum'] = readlineSync.question('Routing #: ');
        return bd;
    };
    BankDraftBuilder.prototype.validateBankDraft = function (bd) {
        return /^[\w.' ]+$/.test(bd.name)
            && /\d{9}/.test(bd.acctNum)
            && /\d{6,12}/.test(bd.routingNum);
    };
    return BankDraftBuilder;
}(Payment_1.Payment));
exports.BankDraftBuilder = BankDraftBuilder;
