
import { PaymentSystemExecutor } from './payment_systems';

export abstract class Payment {
    abstract collectInfo: () => {[input:string]:string};
    abstract validateInfo: (info: {[input:string] : string}) => boolean;

    private pse! : PaymentSystemExecutor;

    build() : void {
        this.pse = new PaymentSystemExecutor(this.collectInfo, this.validateInfo);
    }

    getExecutor(){ return this.pse; }
}