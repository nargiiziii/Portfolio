// 1.Hər biri 2 parametr qəbul edib və riyazi əməlləri yerinə yetiren funksiya yazin.




// function sum(num1, num2) {
//     let sum = num1 + num2;
//     return sum;
// }

// function sub(num1, num2) {
//     let sub = num1 - num2;
//     return sub;
// }

// function mult(num1, num2) {
//     let mult = num1 * num2;
//     return mult;
// }

// function div(num1, num2) {
//     let div = num1 / num2;
//     return div;
// }

// console.log(div(7, 3));









// 2.Verilen parametrlerde tek ve cutlerin tapilmasi.(Rest operatoru istifade etmek)(14, 20, 35, 40, 57, 60, 100)



// let func = (...numbers) => {
//     //debugger
//     let i = 0;

//     while (i < numbers.length) {
//         let num = numbers[i];   //bir bir her reqemi goturub tek ya cut oldugunu yoxlayacaq

//         if (num % 2 === 1) {
//             console.log(`tek: ${num}`);
//         } else if (num % 2 === 0) {
//             console.log(`cut: ${num}`);
//         }

//         i++   // bir sonraki reqeme kecmek ucun bunu yazdiq (yazmasam sonsuz loop olur)
//     }
// }

// func(14, 20, 35, 40, 57, 60, 100);











// 3.Verilmis arreyde elementlerin həm 4-ə, həm də 5-ə bölününen elementlerin cemini tapin.[14, 20, 35, 40, 57, 60, 100]




// let numbers = [14, 20, 35, 40, 57, 60, 100];

// function sum(arr) {
//     let summa = 0;   //yeni variable yaratdim ki icinde cemini yigim

//     for (i = 0; i < arr.length; i++) {
//         let num = arr[i];

//         if ( num % 5 === 0 && num % 4 === 0) {
//             summa += num;  //massivin icinde olan her 4e ve 5e bolunen reqemler bu if blokuna girecek ve summanin icinde cemi yigilacaq
//         }
//     }
//     return(summa)

// }

// console.log(sum(numbers));  //burda functionu cagiranda "arr" yerine "numbers" yazdim ki yuxardaki "numbers =[..]" massivimi gotursun ve "arr"a asign elesin












// 4.Daxil edilmiş cümlədə daxil edilmis simvoldan nece eded olduğunu tapan Proqramın alqoritmini yazin.




// function symbolCount(symbol, text) {
//     // debugger
// let count = 0;   //tesevvur edek ki bu text'i oxumadan qabaq olan simvol sayidi

//     for( i = 0; i < text.length; i++){
//         if ( text[i] === symbol) {
//             count++   //her "a" simvolunu gordukde bu if blokuna girecek ve bu setrde count'u 1 defe coxaldacaq ve yene yuxari cixacaq (i text'in uzunlugunnan qisa oldugu muddetde)
//         }
//     }
//      return count;
// }
    
//     let text = "Ramazan";
//     let symbol = "a";

// symbolQuantity = symbolCount(symbol, text);
// console.log(`we have ${symbolQuantity} symbols ${symbol} in the text ${text}`);












// 5.Daxil edilen ededin Aboundant ve ya Deficient oldugunu yoxlayan algorithm.
// (Abundant ədəd öz müsbət bolenlerinin(ozunden basqa) cəmi özündən böyük olan müsbət tam ədədlərə deyilir. 
// Eks halda Deficient eded olur. 12-Aboundant, 13- Deficient)





// function checkNum (num) {
//     // debugger
//     divisorsSum = 0;     //birinci bolenlerinin cemini 0 olaraq teyin edirem
//     for (i = 0; i <= num/2; i++) {     // 0dan ededin yarisina kimi olacaq dovr 
//         if (num % i === 0) {    //burda konkret hansi reqemler num'a bolunur ise onlari gorub bu if blokuna girecek ve siraynan bolunenlerin cemini yigacaq
//             divisorsSum = divisorsSum + i;  
//         } 
//     }

//     if (divisorsSum > num) {
//         console.log(`${num} is an aboundant nummber`);
//     } else if (divisorsSum < num) {
//         console.log(`${num} is a deficient number`);
//     }
// }

// checkNum(12)











// 6.Array-in bütün elementlərini kvadrata yüksəldib yeni array qaytaran funksiya yazın.



// arr = [2, 3, 4, 5]

// function degree() {
//     // debugger
//     let newArr = [];  //yeni bos massiv yaratdim 
//     let newNum = 0;   //yeni elementler 0dan baslayacaq

//     for (i = 0; i < arr.length; i++) {
//         let num = arr[i]**2;  
        
//         newArr[newNum] = num;  //yeni massivin icine yeni kvadrata yukselmis element asign eliyirem
//         newNum++;   //her defe bu line'dan sonra gedecek yuxari ve sonraki kohne massivin elementini yukseldecek kvadrata 
//     }
//     return newArr;
// }

// let newArray = degree();
// console.log(newArray);











// 7.İçərisində name və age key-ləri olan obyektlərdən təşkil olunmuş bir array var. 
// Ən az yaşı olan ilə ən çox yaşı olan elementin yaşlarını və onların fərqini array şəklində qaytaran funksiya yazın. Məsələn - [13,67,54]




// let arr = [
//     { name: "Nargiz", age: 20 },
//     { name: "Mehemmed", age: 18 },
//     { name: "Ibrahim", age: 9 },
//     { name: "Nazli", age: 14 }
// ];

// let maxAge = arr[0].age;   //tutaq ki max age budu
// let minAge = arr[0].age;   //tutaq ki min age budu


// for (let i = 1; i < arr.length; i++) {
//     if (arr[i].age > maxAge) {
//         maxAge = arr[i].age;    //burada max age tapiram //20
//     }
//     if (arr[i].age < minAge) {
//         minAge = arr[i].age;    //burada min age tapiram //9
//     }
// }


// let difference = (max, min) => max - min;   //high order function istifade etdim

// let usersAge = (max, min, func) => {
//     return [max, min, func(max, min)];
// };

// console.log(usersAge(maxAge, minAge, difference)); 





