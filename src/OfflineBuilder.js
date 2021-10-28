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
exports.OfflineBuilder = void 0;
var readlineSync = require("readline-sync");
var Payment_1 = require("./Payment");
var OfflineBuilder = /** @class */ (function (_super) {
    __extends(OfflineBuilder, _super);
    function OfflineBuilder() {
        var _this = _super.call(this) || this;
        _this.collectInfo = _this.offlinePaymentInformation;
        _this.validateInfo = _this.validateOfflinePayment;
        return _this;
    }
    OfflineBuilder.prototype.offlinePaymentInformation = function () {
        var ofp = {};
        console.log("\nEnter offline payment information...");
        ofp['name'] = readlineSync.question('Name: ');
        ofp['address'] = readlineSync.question('Current Address: ');
        return ofp;
    };
    OfflineBuilder.prototype.validateOfflinePayment = function (ofp) {
        return /^[\w.' ]+$/.test(ofp.name)
            && /^[\w.' ]+$/.test(ofp.address);
    };
    return OfflineBuilder;
}(Payment_1.Payment));
exports.OfflineBuilder = OfflineBuilder;
