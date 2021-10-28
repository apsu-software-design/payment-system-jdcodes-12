import readlineSync = require('readline-sync')
import { Payment } from './Payment'

export class OnlineBuilder extends Payment {

    collectInfo: () =>{[details:string]: string}
    validateInfo: (info: {[details:string]: string}) => boolean
    
    constructor(){
        super();
        this.collectInfo = this.onlinePaymentInformation
        this.validateInfo = this.validateOnlinePayment
    }

    onlinePaymentInformation() : {[details:string]: string} {
        let op : {[details:string]: string} = {}
        console.log('Enter online payment information...')
        op['email'] = readlineSync.question(' Email: ')
        op['pass'] = readlineSync.question(' Password: ')
        return op        
    }

    validateOnlinePayment(op: {[details:string]: string}) : boolean {
        return    /^[\w@.]+$/.test(op.email) 
               && /\w+/.test(op.pass)
    }
}