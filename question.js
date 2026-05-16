// function getaverage(arr) {
//     let sum = 0 ;
//     for(i=0; i<arr.length; i ++){
//         sum=sum+arr[i]
//     }

//     return sum/arr.length
// } 
//  let average =(getaverage([2,3,5,5,5,]));
//  console.log(`your average is ${average}`)



// function getmax(arr) {
//     max_val = arr[0] ;
//     for (i=1; i<arr.length; i++) {
//         if(arr[i]>max_val) {
//             max_val = arr[i]
//         }
//     }
//     return max_val;
// }
// console.log(getmax([9,2,4,3,6,8,4,5,6,3]));


// function countoddeven(arr) {
//     let x =0 ;
//     let y =0 ;

//     for(i=0; i<arr.length; i++) {
//         if(arr[i] % 2 === 0){
//             y++;
//         }  else {
//             x++;
//         }
//      }
//      return{"odd" : x , "even" : y};

// }
// console.log(countoddeven([1,2,3,4,5,6,7,8,9787873,2837,7874,3787,118894,4648,378,3384,13891,2199,390809,12908093,3900,3290,398043,3198903,3908,3938,130-3908,39802,3-28,39349023,39832832,3939032,329003,3983292,3248,32094,39813,3290823,2390490,3297,849085,6856,,76,5,76,7,7,5,6,,7,76,7,8,7,,5,345,,6,77,8,6,6,7,8,8,7,,6,5,0,0,98,7,6,5,4,3,2,48978,4348,4585863,3447,5769,48835,45883,45858,45839,45008734]));



// function removeduplicates(arr) {
//     result =[];
    

//     for(i=0; i<arr.length; i++) {
//         if(!result.includes(arr[i])) {
//             result.push(arr[i]);
//         }
//     }
//     return result
// }
// console.log( removeduplicates([1,2,3,3,4,54,60,37,14,23,54,3,1,2,4,2,2,2,2,2,2,2,2,2]));




// function reversearray(arr) {
//     reverse_list =[];

//     for(i=arr.length-1; i>=0; i--) {
//         reverse_list.push(arr[i]) 
//     }
//     return reverse_list
// }
// console.log(reversearray([1,2,3,4,5,6,7,8,9,10]));





// function getpositivenumber(arr) {
//     let lete =[];

//     for(let i=0; i<arr.length; i++) {
//         if(arr[i]  > 0) {
//             lete.push(arr[i]);
//         }
//     }
//     return lete
// }






// function getarray(arr) {
//     let sum = 0;
//     for( let i=0; i<arr.length; i++) {
//         sum+=arr[i]
//     }
//     let minimum = arr[0];
//     let maximum = arr[0];
//     let odd = 0;
//     let even = 0;


//     for( let i=0; i<arr.length; i++) {
//         if(arr[i]<minimum)minimum=arr[i]
//         if(arr[i]>maximum)maximum=arr[i]
//         if(arr[i] % 2 !==0) odd++
//         else even++
//     }

// return {
//     sum: sum,
//     average: sum/arr.length,
//     maximum: maximum,
//     minimum: minimum,
//     odd: odd,
//     even: even
// }

// }


// console.log(getarray([1,2,3,4,5,6]));







// lets make a number gusessing game



// let secret_number = 78;

// let attempts = 0;
// guess_history = [];

// while(true) {

//     let guess = prompt("lets play a game of number guessing, choose between (1 - 100) ");


//     if (guess < 1 || guess > 100) {
//         console.log("number range  must be  1 to 100");
//     }else if (guess === "") {
//         console.log("dont leave blank please ")
//     }else{
//         guess_history.push(guess)
//         attempts++
//     }

//     if(guess > secret_number) {
//         console.log("guess is too highhhhhhh")
//     }else if(guess < secret_number) {
//         console.log("guess is too lowwwwwwwww")
//     }else if (guess == secret_number) {
//         console.log("congrats your guess is correct")
//         console.log(`your total number of attempts are ${attempts}`)
//         console.log(`your guess history is here ${guess_history}`)
//         break
//     }
// }


