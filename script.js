// function task1 (email , password) {
//     if(email.includes("@") && password.length >=6) {
//         return true;
//     }else{
//         return false;
//     }
// }


// while(true){
// let email = prompt("enter your email");
// let password = prompt("enter your password");

// if(task1(email,password)) {
//     console.log("your email and password are verified");
//     break;
// }else{
//     console.log("please try again");
// }
// }





// function atm (balance , amount) {
//     if ( amount <=  balance && amount > 0) {
//         return true;
//     }else{
//         return false;
//     }
// }

// while(true) {
//     let amount = prompt("enter your amount you want to withdrawl");
//     let balance = 5500;

//     if(atm(balance,amount)) {
//         console.log(`you withdrawl ${amount} from your account`)
//         console.log("let me show u your remaining balance");
//         console.log(balance-=amount , " is your remaining balance in your account");
//         break;
//     }else{
//         console.log("your account dont have enough money for withdrawl");
//         console.log("insufficient balance");
//     }
// }




// function guesser (secretnum) {
//     if(secretnum >=0 && secretnum<=6) {
//         console.log("small guess try again ");
//     }else if (secretnum > 7) {
//         console.log("large guess try again");
//     }else if (secretnum == 7 )
//         console.log( "congrats , your guess is absolutely correct ");
//     }
// }
// let answer = 7;

// while(true) {
//     let secretnum = Number(prompt("please guess the secret number"));
//     if (secretnum==answer) {
//         console.log("lucky");
//         break;
//     }else{
//         guesser(secretnum);
//     }
// }


 


// function checkpass (password) {
//     if (password.length >=8 && password!=password.toLowerCase()){
//      return true;
// }else{
//     return false;
// }
// }
// while (true) {
//     let password = prompt("enter your password");
//     if (checkpass(password)) {
//         console.log("strongpassword");
//         break;
//     }else{
//         console.log("weak password");
//     }
// }







// function result(marks) {
//     if (marks >=90) {
//         console.log("grade is A");
//     }else if (marks >=75) {
//         console.log("grade is B");
//     }else if (marks>=50 ) {
//         console.log("grade is C");
//     }else if (marks < 50  ) {
//         console.log("FAIL");
//     }else if (marks < 0 || marks >100){
//         console.log("invalid marks");
//     }
// }

// while(true) {
//     let marks = Number(prompt("enter your marks"));
//     if (result(marks)) {  
//     break;
// }
// }
// // 
// while(true) {
//     let plans  = Number(prompt("choose your plans"));
//     if (recharge(plans) ) {
//         console.log("Recharge successful");
//         break;

//     }else{
//         console.log("recharge invalid ")
//     }
    
// }

// function recharge (plans) {
//     if (plans === 199 || plans === 299 || plans ===399) {
//         return true;
//     }else{
//         return false;
//     }
// }









// function calculator (calculations) {
//     let x = Number(prompt("enter your First Number"));
//     let y = Number(prompt("enter your Second Number"));

// if ( calculations === "plus" ){
//     console.log( x + y );
// }else if ( calculations === "minus" ) {
//     console.log( x - y );
// }else if ( calculations === "multi") {
//     console.log( x * y );
// }else if ( calculations === "div") {
//     console.log( x / y);
// }else {
//     console.log("this is a calculator please enter only digits");
// }
// }


// calculator("plus");
// calculator("minus");
// calculator("multi");
// calculator("div");








// function username(user) {
//     if (user.length < 5 ) {
//         console.log("name is toooo short");
//         return false;
//     }else if (user.includes(" ")) {
//         console.log("no space is allowed");
//         return false;
//     }else if (user.includes("@")) {
//         console.log("not use @ in your username");
//         return false;
//     }else{
//         return true;
//     }
// }
// while (true) {
//     let user = prompt("enter your username");
//     if (username(user)) {
//         console.log("your username is accepted  =" , user);
//         break;

//     }
// }




// function pinset() {
// // let pinsure = 1234;
// // let attempts = 0 ;


// // while(attempts < 3) {
// //     let pin = prompt("enter your pin");

// // if(pin===pinsure) {
// //     console.log("correct pin");
// //     return; 
// //  }else{
// //     attempts++;
// //     console.log("card is blocked because you entered wrong pin more than 3 times");
// }
// }
// }