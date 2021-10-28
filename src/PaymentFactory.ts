import { BankDraftBuilder } from "./BankDraftBuilder";
import { CreditCardBuilder } from "./CreditCardBuilder"
import { OfflineBuilder } from "./OfflineBuilder";
import { OnlineBuilder } from "./OnlineBuilder";
import { Payment } from "./Payment"
import { PaymentSystemExecutor } from "./payment_systems";

export function createPayment(type: string) : PaymentSystemExecutor | null {
    let payment : Payment

    switch(type.toLowerCase()){
        case "creditcard":
                payment = new CreditCardBuilder()
                payment.build();
                return payment.getExecutor();
                
        case "bankdraft":
                payment = new BankDraftBuilder()
                payment.build()
                return payment.getExecutor()

        case "online":
                payment = new OnlineBuilder()
                payment.build()
                return payment.getExecutor()

        case "offline":
                payment = new OfflineBuilder()
                payment.build()
                return payment.getExecutor()

        default:   
                return null
    }
}