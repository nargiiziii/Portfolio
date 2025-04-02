
// COMMENTLERI SIRAYNAN ACARAQ TASKLARA BAXA BILERSINIZ






// TASK 1 -------Armstrong ededlerini yazan algorithm-------
// armstrong reqemleri: 153, 370, 371




for (i = 100; i <= 999; i++) {
  let num = i;
  let sum;

  let digit1 = (num - (num % 100)) / 100;

  num = num % 100; // meselen "num" 356dirse bu yazidan sonra "num" olacaq 56 ki biz 5'i goture bilek
  let digit2 = (num - (num % 10)) / 10;

  let digit3 = num % 10;

  sum = digit1 ** 3 + digit2 ** 3 + digit3 ** 3;

  if (sum == i) {
    console.log(i);
  }
}










//TASK 2 -------Multiplication Table(1-10 vurma cedveli)-------
// debugger





// for (a = 0; a <= 10; a++) {

//   let line = '';

//   for (b = 0; b <= 10; b++) {
//     line = line + (a * b) + " ";
//   }

//   console.log(line);
// }











// TASK 3 -------Verilmis userlerden ibaret arreyde yasi 30-dan boyuk ve kicik olanlari consola yazdirmaq.-------



// let arr = [
//     {name: "Nigar", age: 41},
//     {name: "Nargiz", age: 20},
//     {name: "Ramazan", age: 21},
//     {name: "Mehemmed", age: 35},
//     {name: "Kamran", age: 50},
//     {name: "Ibrahim", age: 10}
// ]

// for (i = 0; i < arr.length; i++) {
//     let userAge = arr[i].age;
//     let userName = arr[i].name

//     if (userAge > 30){
//         console.log(`${userName}in yasi 30dan boyukdur`);
//     } else if (userAge < 30) {
//         console.log(`${userName}in yasi 30dan kicikdir`);   
//     }
// }








// TASK 4 -------Arraye daxil edilən 10 ədədin ededi ortasini tapan proqramın alqoritmi yazmaq.(While loop ile)-------
// debugger




// let sum = 0;
// let count = 0;
// let arr = [1, 3, 4, 6, 7, 8, 9, 2, 11, 10];

// while (count < arr.length) {  
//     sum += arr[count];  
//     count++; 
// }
// // axirda sum'in qiymeti yuxardaki reqemlerin summasi olur ve biz summani massivin uzunluguna boluruk ve tapiriq ededi ortasini 
// let average = sum / arr.length;  
// console.log(average);  










// TASK 5 -------Girilen ededin istenilen edede göre modunu(%) tapan algoritm yazmaq.-------
// debugger



// let divisor = prompt("enter divisor")
// let dividend = prompt("enter dividend")

// let remainder = divisor;

// while (remainder >= dividend) {
//     remainder = remainder - dividend;
// }

// console.log(`${divisor}nin ${dividend}ye bolunmeden olan modu = ${remainder}`);











// TASK 6 -------Verilmis array-de en boyuk ededin tapilmasi-------



// let arr = [203, 19, 2, 13, 196, 86, 35, 77];

// max = arr[0]; //tutaq ki bu olsun max eded

// for (i = 0; i < arr.length; i++) {

//     if (arr[i] > max) {
//         max = arr[i];
//     }
// }
// console.log(`en boyuk eded: ${max}`);










// TASK 7 -------Verilmiş array-in min elementi ilə max elementinin yerini dəyişən proqram tərtib edin-------




// let arr = [203, 19, 2, 13, 196, 86, 35, 77];

// max = arr[0]; //tutaq ki bu olsun max eded
// min = arr[0]; //tutaq ki bu olsun min eded

// for (i = 0; i < arr.length; i++) {
//     if (arr[i] > max) {
//         max = arr[i];
//     }
// }

// for (i = 0; i < arr.length; i++) {
//     if (arr[i] < min) {
//         min = arr[i];
//     }
// }

// let reverseVar;

// reverseVar = max;
// max = min;
// min = reverseVar;

// console.log(`en boyuk eded(balaca kecib yerine): ${max}`);

// console.log(`en balaca eded(boyuk kecib yerine): ${min}`);











// TASK 8 -------Verilmiş array-də min və max elementi nəzərə almadan yerdə qalan bütün elementlərin cəmini tapın.-------





// let arr = [203, 19, 2, 13, 196, 86, 35, 77];

// max = arr[0]; //tutaq ki bu olsun max eded
// min = arr[0]; //tutaq ki bu olsun min eded

// for (let i = 1; i < arr.length; i++) {
//     if (arr[i] > max) {
//         max = arr[i];
//     }
//     if (arr[i] < min) {
//         min = arr[i];
//     }
// }

// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] !== min && arr[i] !== max) { // min ve max'i gormemek serti ile
//         sum += arr[i];
//     }
// }

// console.log(sum);











// TASK 9 -------Verilmiş array-e daxil olunan ədədin arreyde olub olmadığını təyin edən proqram tərtib edin-------



// let arr = [203, 19, 2, 13, 196, 86, 35, 77]; 

// for (i = 0; i < arr.length; i++) {
//     let newNum = 3;

//     if(arr[i] = newNum){
//         console.log("massivin icinde olan reqemdir");
//     } else if (arr[i] != newNum) {
//         console.log("massivin icinde bele reqem yoxdur");
//     }
// }










// TASK 10 -------Verilmiş array-in elementlerinden neçəsinin bir rəqəmi, neçəsinin iki rəqəmi, ve necesinin uc reqemi oldugunu tapan algrithm yazmaq-------



// let arr = [203, 19, 2, 13, 196, 86, 35, 77];

// let oneDigit = 0;
// let twoDigit = 0;
// let threeDigit = 0;

// for (i = 0; i < arr.length; i++){

//     let numLenght = arr[i].toString().length;

//     if (numLenght === 1) {
//         oneDigit++;
//     } else if (numLenght === 2) {
//         twoDigit++;
//     } else if (numLenght === 3) {
//         threeDigit++;
//     }
// }
    
// console.log(`tek reqemliler: ${oneDigit}`);
// console.log(`iki reqemliler: ${twoDigit}`);
// console.log(`uc reqemliler: ${threeDigit}`);


