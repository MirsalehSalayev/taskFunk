////////////////13
// function bignum(reqem) {
//     let nums = reqem.toString().split('');
  
//     let Bignum = nums[0];
//     for(let i = 1; i < nums.length; i++) {
//         if(nums[i] > Bignum) {
//             Bignum = nums[i];
//         }
//     }
//     return Bignum;
// }

// let reqem = 123456;
// console.log(bignum(reqem)); 

////////////14
// function bignum(reqem) {
//     let nums = reqem.toString().split('');
  
//     let Bignum = nums[0];
//     for(let i = 1; i < nums.length; i++) {
//         if(nums[i] < Bignum) {
//             Bignum = nums[i];
//         }
//     }
//     return Bignum;
// }

// let reqem = 123456;
// console.log(bignum(reqem)); 


///////////////15
// function bignum(reqem) {
//     let nums = reqem.toString().split('');
//     let sum = 0;
//     let hasil=1
//     for(let i = 0; i < nums.length; i++){
//       sum += parseInt(nums[i]);
//       hasil*=parseInt(nums[i]);
//     }
//     let edediorta = sum / nums.length;
//     return { sum,edediorta,hasil};
// }

// let reqem = 123456;
// let result = bignum(reqem);
// console.log(  result.sum);
// console.log(  result.edediorta);
// console.log(  result.hasil);
////////16
// function bolenleritap(num) {
//     let bolenler = [];
//     for(let i = 1; i <= num; i++) {
//         if(num % i === 0) {
//             bolenler.push(i);
//         }
//     }
//     return bolenler;
// }
// let num = 12; 
// console.log(bolenleritap(num));
////////17
// function bolenleritap(num) {
//     let bolenler = [];
//     for(let i = 1; i <= num; i++) {
//         if(num % i === 0) {
//             bolenler.push(i);
//         }
//     }
//     return bolenler.length;
// }
// let num = 12; 
// console.log(bolenleritap(num));



///////18
// function bolenleritap(num) {
//     let bolenler = [];
//   let sum =0
//   let hasil=1
//     for(let i = 1; i <= num; i++) {
//         if(num % i === 0) {
//           hasil*=i
//           sum+=i
          
//             bolenler.push(i);
          
//         }
//     }
//     return {sum,hasil};
// }

// let num = 12; 
// console.log(bolenleritap(num));





// function Big(arrbig){
//   let Bignum=arrbig[0];
//   for(i=1;i<arrbig.length;i++)
//     if(arrbig[i]>Bignum){
//       Bignum=arrbig[i]
//     }
//   return Bignum;
// }
// let arrbig=[2,3,4,5,6]
// console.log(Big(arrbig))



/////20
// }
// function isPrime(num) {
//     if (num <= 1) {
//         return false;
//     }
//     else if (num === 2) {
//         return true;
//     }
//     else {
//         for (var i = 2; i < num; i++) {
//             if (num % i === 0) {
//                 return false;
//             }
//         }
//         return true;
//     }
// }
// console.log(isPrime())






