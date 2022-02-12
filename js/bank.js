
// start the deposit button acce 


document.getElementById('button-deposit').addEventListener('click',function(){
    console.log('clicked');
    // ekhane ami input take access dibo 
    const addDeposit=document.getElementById('total-deposit-input');
    const addDepositText =addDeposit.value ;
    const addDepositTextToNumber =parseFloat(addDepositText);
    console.log(addDepositTextToNumber);


    //ekhane ami deposit take access dibo 
    const previousDeposit =document.getElementById('previous-deposit');
    const previousDepositText = previousDeposit.innerText;
    const previousDepositTextToNumber =parseFloat(previousDepositText);
    console.log(previousDepositTextToNumber);
    const addDepositTotal=addDepositTextToNumber+previousDepositTextToNumber;
    
    previousDeposit.innerText=addDepositTotal; 
    addDeposit.value='';


    // ekhane ami balance er acces dibo 
    const addBalance =document.getElementById('balance-id');
    const addBalanceText =addBalance.innerText;
    addBalanceTextToNumber = parseFloat(addBalanceText);
    console.log(addBalanceTextToNumber);
    addBalance.innerText=addBalanceTextToNumber+addDepositTextToNumber;

})

// end the deposit button here it is endd 



// start the withdraw button acces 
document.getElementById('button-withdraw').addEventListener('click',function(){

    

})

// end the withdraw button acces 