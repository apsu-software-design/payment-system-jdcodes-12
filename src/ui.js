"use strict";
//User Interface for The Payment System
//@author James Church
Object.defineProperty(exports, "__esModule", { value: true });
exports.start = void 0;
var readlineSync = require("readline-sync"); //for easier repeated prompts
var PaymentFactory_1 = require("./PaymentFactory");
function start() {
    showMainMenu();
}
exports.start = start;
function showMainMenu() {
    while (true) { //run until we exit
        console.log("Welcome to the Payment System! You wish to purchase an item for $5. Pick an option:\n  1. Use a credit card.\n  2. Use a bank draft.\n  3. Use an online payment system.\n  4. Use an offline payment system.\n  5. Quit.");
        var response = readlineSync.question('> ');
        if (response === '5' || response.slice(0, 2).toLowerCase() === ':q') {
            break; //stop looping, thus leaving method
        }
        switch (response) { //handle each response
            case '1':
                showCreditCardPaymentMenu();
                break;
            case '2':
                showBankDraftPaymentMenu();
                break;
            case '3':
                showOnlinePaymentMenu();
                break;
            case '4':
                showOfflinePaymentMenu();
                break;
            default: console.log('Invalid option!');
        }
        console.log(''); //extra empty line for revisiting
    }
}
function showCreditCardPaymentMenu() {
    var cc = PaymentFactory_1.createPayment("creditcard");
    cc === null || cc === void 0 ? void 0 : cc.execute();
}
function showBankDraftPaymentMenu() {
    var bd = PaymentFactory_1.createPayment("bankdraft");
    bd === null || bd === void 0 ? void 0 : bd.execute();
}
function showOnlinePaymentMenu() {
    var op = PaymentFactory_1.createPayment("online");
    op === null || op === void 0 ? void 0 : op.execute();
}
function showOfflinePaymentMenu() {
    var ofp = PaymentFactory_1.createPayment("offline");
    ofp === null || ofp === void 0 ? void 0 : ofp.execute();
}
