
// STRING METHODS




// ################ 1.Verilmis string-de sait herflewrin tapilmasi ################


// let str = "I am frontend DEVELOPER I LEARN Javascript";
// let vowels = "aeiouAEIOU";  //saitleri ozum yazib verirem ki metod ile icinnen tapim

// function findVowels(str) {
//     // debugger
//     let result =[];  //bos bir array yaratdim ki icinde saitleri yigim
//     for (let i = 0; i < str.length; i++) {
//         if (str.includes(vowels[i])) {   //stringin icinde sait varsa bu if blokuna girir 
//             result.push(vowels[i]);   //sait varsa o saiti siraynan goturub result arrayine elave edir
//         }
//     }
//     return result;
// }
// console.log(findVowels(str)); // ['a', 'e', 'i', 'o', 'A', 'E', 'I', 'O'] burda verilen siralama menim vowels string'imde olan saitlerin sirasina goredi













// ################ 2.Verilmish string-de sozlerin bosluga gore sayi. ################


// let str = "I am frontend DEVELOPER I LEARN Javascript";

// function wordsCount() {
//     let words = str.split(" ");  //stringi bosluqlara gore ayirdim ve arraye cevirdim
//     words = words.length;
//     return words;
// }
// console.log(wordsCount(str));












// ################ 3.Verilmiş stringin-in ən uzun sözünü ekrana çıxaran proqram yazın ################


// let str = "I am frontend DEVELOPER I LEARN Javascript";

// function longestWord() {
//     let words = str.split(" "); //cumleni sozlere ayirdim 

//     let longest = words.reduce((longest, word) => {  // reduce metodunu istifade etdim, ve birinci tapmaq istediyim sozu yazdim icine(longest) sonrada hazirda olan soz(word)
//         // debugger
//         if (word.length > longest.length) { 
//             longest = word; 
//         }
//         return longest; 
//     })
//     return longest;
// }
// console.log(longestWord(str)); 












// ################ 4.Verilmiş string-in bütün hərfləri böyük olan sözün özünü və indeksini çapa çıxaran proqram yazın. ################



// let str = "I am frontend DEVELOPER I LEARN Javascript";
// let words = str.split(" "); //cumleni sozlere ayirdim

// function findWord() {
//     let newArr = [];  //yeni array yaratdim cunki forEach metodu ozu ozune yaratmir yeni massiv. newArr'in icine yigacam sozleri ve indexlerini
//     words.forEach((word, index) => {
//         // debugger
//         if (word === word.toUpperCase()) {
//             return newArr.unshift( {word,index});  //push ilede elave ede bilerdim, amma ferqli olsun deye unshift isletdim
//         }
//     })
//     return newArr;
// }
// console.log(findWord(words));








// ################ 5.Verilmiş string-in 2-dən artıq böyük hərfi olan elementlərini çapa çıxaran proqram yazın ################





let str = "I am frontend DEVELOPER I LEARN Javascript";



function findUpperCase() {
    let words = str.split(" ");
    

}






// ################ 6.Hər hansı bir cümlədə istənilən baş hərflə olan simvolları birləşdirib qaytaran funksiya yazın.
// Məsələn:  My name is Jhon - MniJ



// ################ 7.Cümlədə olan bütün sözləri ixtisar edən proqram tərtib edin. Əgər söz 4 hərfdən azdırsa o qısaldılmır. 
// İxtisar zamanı başdakı və sondakı hərflər saxlanılır, ortada olan hərflərin sayı yazılır. Cümlədə heç bir durğu işarəsi olmayacaq. 
// Məsələn: komputer-k6r, stəkan-s4n, javascript- j8t








// ARRAY METHODS

// 1.Verilmis arrayde tekrarlanan reqemleri silmek ve tekrar reqemlerin sayini gostermek.
// 2.Verilmis sozun polindrom olub olmadığını yoxlayan alqoritm yazmaq.
// 3.Girilen ededin verilmis arreyde nece elementden kicik oldugunu yazan alqoritim.
// 4.customers  array-in icindeki objectlerdeki hobbileri array-in reduce metodundan istifade ederek yazdirmaq.
// const customers = [
//   {
//     name: "Tyrone",
//     personal: {
//       age: 33,
//       hobbies: ["Bicycling", "Camping"],
//     },
//   },
//   {
//     name: "Elizabeth",
//     personal: {
//       age: 25,
//       hobbies: ["Guitar", "Reading", "Gardening"],
//     },
//   },
//   {
//     name: "Penny",
//     personal: {
//       age: 36,
//       hobbies: ["Comics", "Chess", "Legos"],
//     },
//   },
// ];
// 5.Random reqemlerden ibaret array yaratmaq,en boyuk ve en kicik elemanlar,ortalamani,toplami ve elemanlarin kvadratini tapmaq(Math metodlarindan istifade ederek)