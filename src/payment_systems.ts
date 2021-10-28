import { BankDraftBuilder } from './BankDraftBuilder';


export type PaymentType = "BankDraft" | "CreditCard" | "Offline" | "Online";

export class PaymentSystemExecutor{
    private collectInfo: () => {[input:string]:string};
    private validateInfo: (info: {[input:string] : string}) =>boolean;


    constructor(collectInfo:()=>{[input:string]:string}, 
                validateInfo: (info: {[input:string]:string}) =>boolean) 
    {
            this.collectInfo = collectInfo;
            this.validateInfo = validateInfo;
                    
    }

    execute(){
        if(this.validateInfo(this.collectInfo())){
            console.log("Payment is being encrypted...");
            console.log("Payment is being processed...");
        }

        else console.log("Sorry, invalid payment!");
    }
}



