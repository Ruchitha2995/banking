const prompt = require("prompt-sync")();

 var notes_2000 = true;
 var notes_500 = false;
 var notes_200 = true;
 var notes_100 = true;



let number=123456;
console.log(number)

const SBI={
    username:"ravi",
    password:1111,
    transferusername:"ravikumar",
    transferaccountno:"223344556677"
    
    }
    console.log("SBI details")
console.table(SBI)
const HDFC={
    username:"rani",
    password:2222,
    transferusername:"rani kumari",
    transferaccountno:"443344556677"
    
    }
    console.log("HDFC details")
    console.table(HDFC)
    const AXIS={
        username:"raju",
        password:3333,
        transferusername:"rajukumar",
        transferaccountno:"223344556677"
        
        }
        console.log("AXIS details")
        console.table(AXIS)

         var bankbalance = 1000;
         var transferbankbalance = 1000;

        const user = prompt("enter user name :")
        const pwd = parseInt (prompt("enter the password :"))
        
        if((user===SBI.username && pwd=== SBI.password)||(user === HDFC.username && pwd === HDFC.password)||(user === AXIS.username && pwd === AXIS.password)){
            console.log("welcome to ATM process")
            while(true){

            
            let options = {
                deposit : "1" ,
                withdraw : "2" ,
                balanceenquiry  : "3" ,
                moneytrasfer : "4" ,
                ministatement : "5" ,
                exit : "6" ,

            }
            console.table(options)
            let option = prompt ("choose your option:")
            if(option==options.deposit){
                console.log("deposit")
              var depositamount = parseInt(prompt("choose your amount :"))
              if((depositamount < bankbalance)|| (depositamount > bankbalance)|| (depositamount == bankbalance)){
                bankbalance = bankbalance + depositamount;
                var printdepositamount = `${depositamount} deposited amount successfully`
                console.log(printdepositamount)
              }
            }
            else if(option==options.withdraw){
                console.log("withdraw")
                var withdrawamount = parseInt(prompt("choose your amount :"))
                if (withdrawamount <= bankbalance){
                    bankbalance = bankbalance - withdrawamount;
                    var printwithdrawamount = `${withdrawamount} amount withdraw successfully`
                    console.log(printwithdrawamount)
                    var count = 0;
                    if(notes_2000 && withdrawamount >= 2000){
                      var notes_2000_count =(Math.floor(withdrawamount/2000));
                      console.log(notes_2000_count,"=>2000 notes") 
                      count = count + notes_2000_count
                      withdrawamount = withdrawamount - (notes_2000_count * 2000);
                    }
                    if(notes_500 && withdrawamount >= 500){
                        var notes_500_count =(Math.floor(withdrawamount/500));
                        console.log(notes_500_count,"=>500 notes") 
                        count = count + notes_500_count
                        withdrawamount = withdrawamount - (notes_500_count * 500);
                      }
                      if(notes_200 && withdrawamount >= 200){
                          var notes_200_count =(Math.floor(withdrawamount/200));
                          console.log(notes_200_count,"=>200 notes") 
                          count = count + notes_200_count
                          withdrawamount = withdrawamount - (notes_200_count * 200);
                        }
                        if(notes_100 && withdrawamount >= 100){
                            var notes_100_count =(Math.floor(withdrawamount/100));
                            console.log(notes_100_count,"=>100 notes") 
                            count = count + notes_100_count
                            withdrawamount = withdrawamount - (notes_100_count * 100);
                          }
                          console.log("notes_count",count)
                }
      
                else{
                    console.log("insufficient balance")
                }
            }


           else if(option==options.balanceenquiry){
                console.log("balanceenquiry")
                console.log(bankbalance)
            }
           else if(option==options.moneytrasfer){
                console.log("moneytransfer")
                const transferuserid = prompt("enter the transfer user id")
                const transferaccountno = prompt("enter account number")
                if((transferuserid === SBI.transferaccountno)&&(transferaccountno===SBI.accno)||(transferuserid === HDFC.transferaccountno)&&(transferaccountno===HDFC.accno)||(transferuserid === AXIS.transferaccountno)&&(transferaccountno===AXIS.accno)){
                    var transferamount = parseInt (prompt("enter the transfer amount"))
                    if(transferamount <= bankbalance){
                        transferbankbalance = transferbankbalance +transferamount;
                        bankbalance = bankbalance - transferamount;
                        var printtransferamount = `${transferamount} transfer amount successfully`
                        console.log(printtransferamount)
                    }
                }
            }
          else if(option==options.ministatement){
                console.log("ministatement")
            }
           else if(option==options.exit){
                console.log("exit")
                break;
            }
        }
        }
        else{
            console.log("invalid credentials")
        }
        
