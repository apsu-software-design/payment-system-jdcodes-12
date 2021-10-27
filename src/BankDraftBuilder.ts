import readlineSync = require('readline-sync');

class Payment{
    type
}



export class BankDraftBuilder extends Payment {
    private paymentType : PaymentType:
    private name : string;
    private routingNum : string;
    private bankAcctNum : string;
    private bankDraft : BankDraftBuilder;
    
    constructor(){
        super();
        this.bankDraft = new BankDraftBuilder();
    }

    
    setName(name : string){ this.name = name; return this;}
    setRoutingNum(routingNum : string) { this.routingNum = routingNum; return this;}
    setBankAcctNum(bankAcctNum : string) { this.bankAcctNum = bankAcctNum; return this;}

    getName() { return this.name; }
    getRoutingNum() { return this.routingNum; }
    getBankAcctNum() { return this.bankAcctNum; }

    input() : void {
        console.log('Enter Bank Account Details.');
        this.name = readlineSync.question('  Name: ');
        this.routingNum= readlineSync.question('  Bank Routing Number: ');
        this.bankAcctNum = readlineSync.question('  Bank Account Number: ');
    }

    validate() : boolean {
        return /^[\w.' ]+$/.test(this.name) && /\d{9}/.test(this.routingNum) && /\d{6,12}/.test(this.bankAcctNum);
    }

    build() : BankDraftBuilder {
        return this.bankDraft;
    }
}