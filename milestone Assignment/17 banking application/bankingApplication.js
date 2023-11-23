const userAccount = {name:"vikas",balance:101.10};

const actionPerformeByUser = "deposite"
const EnterDepositeMoney = 1000;
// const EnteredWithdrawalMoney =50;

function updateCustomerAccount(customerDetails){
    
    if(actionPerformeByUser==="deposite"){
        return userAccount.balance += EnterDepositeMoney;
    }
    else if(actionPerformeByUser==="withdrawal"){
        return userAccount.balance -= EnteredWithdrawalMoney;
    }
        
    }
    //testing 
    console.log(updateCustomerAccount(userAccount));
    

