export function paymentStrategy(paymentType : String) {
    
    switch(paymentType.toLowerCase()){
        case "creditcard": 
            console.log("Create a credit card");
            break;

        case "bankdraft":
            console.log("Create a bank draft");
            break;

        case "online":
            console.log("Creating online payment");
            break;
        
        case "offline":
            console.log("Creating offline payment");
            break;
    }
}