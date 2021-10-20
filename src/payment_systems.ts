/*
    Use Factory Pattern that:
        1) Reads in data
        2) Validates data
        3) "Encrypts" data
        4) "Processes" data

    Needs to be Open-Closed (e.g. 100% free of any modification related to
                             individual payment systems or even the number of payment systems)



    1) a method which outlines which informatino to obtain
    2) a method to outline how to validate that information
    3) constrcutor w/ two functions as args (perform tasks when called)
    
    4) execute method - steps through workflow & prints relevant info to screen
*/


export class PaymentSystemExecutor {
}



/*
    Objectives:
        1) Builder Pattern ? (e.g. Payments)
        2) Factory Pattern ? (e.g. PaymentExecutor)
        3) Strategy Function ? (e.g. single function?)
        4) What is Open-Closed?
*/