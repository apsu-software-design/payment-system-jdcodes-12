
export class PaymentSystemExecutor{
    private collectInfo: () => {[details:string]: string};
    private validateInfo: (info: {[details:string]: string}) =>boolean;


    constructor(collectInfo:()=>{[details:string]: string}, 
                validateInfo: (info: {[details:string]: string}) =>boolean) 
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



