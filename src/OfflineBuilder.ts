import readlineSync = require('readline-sync')
import { Payment } from './Payment'

export class OfflineBuilder extends Payment {

    collectInfo: () =>{[details:string]: string}
    validateInfo: (info: {[details:string]: string}) => boolean
    
    constructor(){
        super();
        this.collectInfo = this.offlinePaymentInformation
        this.validateInfo = this.validateOfflinePayment
    }

    offlinePaymentInformation() : {[details:string]: string} {
        let ofp : {[details:string]: string} = {}
        console.log("\nEnter offline payment information...")
        ofp['name'] = readlineSync.question('Name: ')
        ofp['address'] = readlineSync.question('Current Address: ')
        return ofp        
    }

    validateOfflinePayment(ofp: {[details:string]: string}) : boolean {
        return   /^[\w.' ]+$/.test(ofp.name) 
              && /^[\w.' ]+$/.test(ofp.address)
    }
}