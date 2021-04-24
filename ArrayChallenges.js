//1

// function highPass(arr, cutoff) {
//     var filteredArr = [];
//     for (var i = 0; i <arr.length; i++){
//         if( arr[i] > cutoff){
//             filteredArr.push(arr[i]);
//         }
//     }
//     return filteredArr;
// }
// var result = highPass([6, 8, 3, 10, -2, 5, 9], 5);
// console.log(result); // we expect back [6, 8, 10, 9]


//2

// function evensOfOdds(arr) {
//     var totalOdds = 0;
//     var totalEvens = 0;
//     for(var i = 0 ; i < arr.length; i++){
//         if(arr[i] % 2 === 0){
//             totalEvens+= arr[i];
//         }else if(arr[i]% 2 !== 0){
//             totalOdds+= arr[i];
//         }
//     }
//     if(totalOdds > totalEvens){
//         return("Odds are larger");
//     }else if(totalEvens > totalOdds){
//         return("Evens are larger");
//     }

// }
 
// var result = evensOfOdds([6, 8, 3, 10, -2, 5, 9]);
// console.log(result); // we expect back "evens are larger"

//3

// function betterThanAverage(arr) {
//     var sum = 0;
//     for ( var i = 0; i <arr.length; i++){
//         sum += arr[i];
//     }
//     var avg = sum/arr.length;
//     var count = 0;
//     for (var i = 0; i<arr.length; i++){
//         if(arr[i] > avg){
//             count++
//         }
//     }
//     return count;
// }
// var result = betterThanAverage([6, 8, 3, 10, -2, 5, 9]);
// console.log(result); // we expect back 4

// //4

// function fibonacciArray(n) {
//     // the [0, 1] are the starting values of the array to calculate the rest from
//     var fibArr = [0, 1];
//     for(var i = 0; i < n-2 ; i++){
//         fibArr.push(fibArr[0+i] + fibArr[1+i]);
//     }
//     return fibArr;
// }
   
// var result = fibonacciArray(10);
// console.log(result); // we expect back [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]