import readlineSync = require('readline-sync');

import { Payment } from './Payment';
export class BankDraftBuilder extends Payment {
    collectInfo: () => {[info: string]: string};
    validateInfo: (info: {[input:string]:string}) => boolean;
    
    constructor(){
        super();
        this.collectInfo = this.bankDraftInformation;
        this.validateInfo = this.validateBankDraft;
    }

    bankDraftInformation() : {[info:string]:string} {
        let bd : {[inputs: string]:string} = {}
        console.log("Bank Draft Information....")
        bd['name'] = readlineSync.question('Name: ')
        bd['acctNum'] = readlineSync.question('Acct. #: ')
        bd['routingNum'] = readlineSync.question('Routing #: ')
        return bd
    }

    validateBankDraft(info: {[input:string]:string}) : boolean {
        return    /^[\w.' ]+$/.test(info.name) 
               && /\d{9}/.test(info.acctNum)
               && /\d{6,12}/.test(info.routingNum)
    }
}