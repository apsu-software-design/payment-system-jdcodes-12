import readlineSync = require('readline-sync');
import { Payment } from './Payment';
export class BankDraftBuilder extends Payment {
    collectInfo: () => {[details:string]: string};
    validateInfo: (info: {[details:string]: string}) => boolean;
    
    constructor(){
        super();
        this.collectInfo = this.bankDraftInformation;
        this.validateInfo = this.validateBankDraft;
    }

    bankDraftInformation() : {[details:string]: string} {
        let bd : {[details: string]: string} = {}
        console.log("Bank Draft Information....")
        bd['name'] = readlineSync.question('Name: ')
        bd['acctNum'] = readlineSync.question('Acct. #: ')
        bd['routingNum'] = readlineSync.question('Routing #: ')
        return bd
    }

    validateBankDraft(bd: {[details:string]:string}) : boolean {
        return    /^[\w.' ]+$/.test(bd.name) 
               && /\d{9}/.test(bd.acctNum)
               && /\d{6,12}/.test(bd.routingNum)
    }
}