
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
            console.log("\nEncrypting Payment..");
            console.log("Processing Payment...");
        }
        else console.log("Sorry, invalid payment!");
    }
}



