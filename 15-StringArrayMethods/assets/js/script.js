
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





// let str = "I am frontend DEVELOPER I LEARN JAvascript";

// function findUpperCase() {
//     let words = str.split(" "); //cumleni sozlere ayirdim

//     let upperCaseWords = words.filter(word => {     //boyuk herf sayini tapmaq ucun filter metodu istifade etdim
//         let letters = word.split(""); //her sozu herflerine ayirdim
        
//         let upperCaseCount = letters.reduce((count, letter) => {   // herfleri reduce ile yoxlayib boyuk herfleri saydim
//         //    debugger
//             if (letter === letter.toUpperCase() && letter !== letter.toLowerCase()) { //boyuk herfdise bu if blokuna girirem ve sayini artiriram 
//                 count++;
//             }
//             return count; 
//         }, 0); //baslangici sifir etdim ki sayma prosesi 0'dan baslasin

//         return upperCaseCount >= 2; //eger boyuk herf sayi 2den boyuk olsa o sozu qaytariram
//     });

//     return upperCaseWords; 
// }
// console.log(findUpperCase()); 









// ################ 6.Hər hansı bir cümlədə istənilən baş hərflə olan simvolları birləşdirib qaytaran funksiya yazın.
// Məsələn:  My name is Jhon - MniJ





// let sentence = "My name is Jhon";

// function some(sentence) {
//     let words = sentence.split(" ");

//     let newArr = words.map(word => word.charAt(0).toUpperCase()); //map metodu ile her sozun birinci herfini aldim ve newArr'in icinde yigdim, charAt metodu ile ise 0inci elementi(yeni birinci) aldim
    
//     return newArr.join(""); //sonra join metodu ile onlari birlesdirdim
// }
// console.log(some(sentence)); 









// ################ 7.Cümlədə olan bütün sözləri ixtisar edən proqram tərtib edin. Əgər söz 4 hərfdən azdırsa o qısaldılmır. 
// İxtisar zamanı başdakı və sondakı hərflər saxlanılır, ortada olan hərflərin sayı yazılır. Cümlədə heç bir durğu işarəsi olmayacaq. 
// Məsələn: komputer-k6r, stəkan-s4n, javascript- j8t





// let str = "I'm a frontend developer, i write code in JavaScript";

// function wordsCut() {
//     let words = str.split(" "); //cumleni sozlere boldum

//     let changedWords = words.map( word => {  //map istifade ederek her sozun ustunnen kecirem ki sonra lazim olani ixtisar edim
//         // debugger
//         if (word.length >= 4) {  //sozun uzunlugu 4den cox olsa bu if blokuna girecek
//             result = word.charAt(0) .concat((word.length - 2).toString()) .concat(word.charAt(word.length - 1));  
//             //charAt[0] ile sozun bas herfini aldim
//             //word.length-2 yazaraq ortada olan herflerin sayini tapdim sonra stringe cevirdim ki birlesdire bilim sozun icinde
//             //word.length-1 yazaraq sonuncu herfi tapdim
//             //concat ile hamisini birlesdirdim
//             return result;
//         } else {
//             return word;
//         }
//     })
//     return changedWords.join(" ");
// }
// console.log(wordsCut(str));













// ARRAY METHODS





// 1.Verilmis arrayde tekrarlanan reqemleri silmek ve tekrar reqemlerin sayini gostermek.



// let numbers = [2, 13, 6, 15, 6, 76, 13]; 

// let singleNumbers = []; //yeni massiv yaratdim ki icinde tekrarlanmayan reqemleri saxlayacam

// let duplicateNumCount = 0;  //burada ise tekrarlanan reqemlerin sayini yigacam(0 yazaraq bos saxlayiram)

// numbers.forEach((num) => {  //forEach metodu ile her reqemin ustunnen kececem\
//     // debugger
//     if (!singleNumbers.includes(num)) {  //"!" bunun ile ve includes metodu ile "singleNumbers"in icinde reqemin olub olmadigini yoxlayiram
//         singleNumbers.push(num);   //eger reqem yoxdursa onu yeni massivime elave edirem
//     } else {
//         duplicateNumCount++;  //eger reqem varsa o zaman saygacimi artiriram(yeniki tekrarlanan reqemlerin sayi artir)
//     }
// });

// console.log(`tekrarlanmayan reqemler: ${singleNumbers}`);
// console.log(`tekrarlanan reqemlerin sayi: ${duplicateNumCount}`);








// 2.Verilmis sozun polindrom olub olmadığını yoxlayan alqoritm yazmaq.(sozun eksi ozune beraber olan)



// function isPolindromWord(word){
//     let letters = word.split("");  //sozu herflere boldum
//     let reverseWord = letters.reverse().join("");  //reverse metodu ile herfleri eks terefden baslatdim, ve join metodu ile birlesdirib eks sozu yaratdim
//     if (word == reverseWord){
//         return `${word} polindrom sozdur`;
//     } else {
//         return `${word} polindrom soz deyildir`;
//     }
// }

// console.log(isPolindromWord("Nargiz"));
// console.log(isPolindromWord("madam"));









// 3.Girilen ededin verilmis arreyde nece elementden kicik oldugunu yazan alqoritim.



// let numbers = [2, 1, 6, 15, 76];

// function isSmall(numbers, n) {
//     let count = numbers.filter(num => num > n);   // massivdeki her elementin ustunnen kecerek girilen reqemin(n) nece reqemden kicik oldugunu tapiram  ve yeni "count" massivimde saxlayiram 
//     count = count.length //sonra bu "count" adli yeni massivimin uzunlugunu tapiram ki nece ededden kicik oldugunu gorum
//     return count;
// }

// let n = 10;
// console.log(`${n} ededi bizim array'da olan ${isSmall(numbers, n)} elementlerden kicikdir`);








// 4.customers array-in icindeki objectlerdeki hobbileri array-in reduce metodundan istifade ederek yazdirmaq.



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


// customersHobbies = customers.reduce((acc, customer) => {  //acc yeni massivimdi, customer ise customers massivindeki her obyekte deyirem(her musteriye) 
//     hobbies = acc.concat(customer.personal.hobbies);  //concat metodu ile acc massivinin icine her hobbini elave edirem
//     return hobbies;
// }, []);  //baslangic olaraq reduce metoduna massiv verirem, burdaki [] demekdi ki acc massiv olacaq, massive yigilacaq hobbiler 

// console.log(customersHobbies);








// 5.Random reqemlerden ibaret array yaratmaq,en boyuk ve en kicik elemanlar,ortalamani,toplami ve elemanlarin kvadratini tapmaq(Math metodlarindan istifade ederek)





// Ən boyuk elementini tapmaq:


// let numbers = [];
// for (let i = 0; i < 10; i++) {
//     numbers.push(Math.floor(Math.random() * 100)); //random metodu 0 ve 1 arasi eded yaradir deye onu 100e vurdum ve floor metodu ile ortaladim
// }
// console.log("random reqemler:", numbers);

// let biggestNum = Math.max.apply(null, numbers); //massivdeki butun elementleri Math.max metoduna gondermek ucun apply metodunu isletdim. amma birinci null yazdim cunki Math.max o parametra baxmayacaq,istifade etmeyecek
// let smallestNum = Math.min.apply(null, numbers); 

// console.log(`en boyuk: ${biggestNum}`);  
// console.log(`en kicik: ${smallestNum}`); 








// Toplamını tap (bütün ədədləri cəmlə).


// let numbers = [];

// for (let i = 0; i < 10; i++) {
//     numbers.push(Math.floor(Math.random() * 100)); 
// }
// console.log("random reqemler:", numbers);

// let sum = numbers.reduce((acc, num) => {
//     return acc + num;
// }, 0)
// console.log(sum);








// Orta qiymətini tap.


// let numbers = [];

// for (let i = 0; i < 10; i++) {
//     numbers.push(Math.floor(Math.random() * 100)); 
// }
// console.log("random reqemler:", numbers);

// let sum = numbers.reduce((acc, num) => {
//     return acc + num;
// }, 0)

// let average = Math.floor(sum / numbers.length); //floor ile ortaladim vergul getsin deye
// console.log(`orta qiymet: ${average}`);







// Hər elementin kvadratını tap və yeni array yarat.


// let numbers = [];

// for (let i = 0; i < 10; i++) {
//     numbers.push(Math.floor(Math.random() * 100)); 
// }
// console.log("random reqemler:", numbers);

// let squares = numbers.reduce((acc, num) => {
//     acc.push(Math.pow(num, 2)); //push ile acc massivine elave edirem, pow ile ise reqemlerin kvadratini tapiram
//     return acc; 
// }, []); //acc ucun bos array olsun deye [] qoydum
// console.log(squares); 



