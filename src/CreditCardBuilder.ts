import readlineSync = require('readline-sync')
import { Payment } from './Payment'

export class CreditCardBuilder extends Payment {

    collectInfo: () =>{[details:string]: string}
    validateInfo: (info: {[details:string]: string}) => boolean
    
    constructor(){
        super();
        this.collectInfo = this.creditCardInformation
        this.validateInfo = this.validateCreditCard
    }

    creditCardInformation() : {[details:string]: string} {
        let cc : {[details:string]: string} = {}
        console.log("\nEnter Credit Card information...")
        cc['cardHolder'] = readlineSync.question('Cardholder name: ')
        cc['cardNum'] = readlineSync.question('Card Number: ')
        cc['expiryDate'] = readlineSync.question('Expiry Date: ')
        return cc;        
    }

    validateCreditCard(cc: {[details:string]: string}) : boolean {
        return    /^[\w.' ]+$/.test(cc.cardHolder) 
               && /\d{15,16}/.test(cc.cardNum) 
               && /\d\d\/\d\d/.test(cc.expiryDate);
    }
}