
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

// tek- нечетные    3 % 2 = 1
// cut- четные      4 % 2 = 0




let func = (...numbers) => {
    debugger
    let i = 0;
    
    while (i < numbers.length) {
        let num = numbers[i];   //bir bir her reqemi goturub tek ya cut oldugunu yoxlayacaq
        
        if (num % 2 === 1) {
            console.log(`tek: ${num}`);
        } else if (num % 2 === 0) {
            console.log(`cut: ${num}`);
        }

        i++
    }
}

func(14, 20, 35, 40, 57, 60, 100);

// let arr = [14, 20, 35, 40, 57, 60, 100];

// for (let i = 0; i < arr.length; i++) {
//     num = arr[i];
//     if (num % 2 == 1) {
//        let tekNum = num;
//        console.log(tekNum);
//     } 
    
//     else if (num % 2 == 0) {
//         let cutNum = num;
//         console.log(`cutler: ${cutNum}`);
//     }
// }









// 3.Verilmis arreyde elementlerin həm 4-ə, həm də 5-ə bölününen elementlerin cemini tapin.[14, 20, 35, 40, 57, 60, 100]
// 4.Daxil edilmiş cümlədə daxil edilmis simvoldan nece eded olduğunu tapan Proqramın alqoritmini yazin.
// 5.Daxil edilen ededin Aboundant ve ya Deficient oldugunu yoxlayan algorithm.(Abundant ədəd öz müsbət bolenlerinin(ozunden basqa) cəmi özündən böyük olan müsbət tam ədədlərə deyilir. Eks halda Deficient eded olur. 12-Aboundant, 13- Deficient)
// 6.Array-in bütün elementlərini kvadrata yüksəldib yeni array qaytaran funksiya yazın.
// 7.İçərisində name və age key-ləri olan obyektlərdən təşkil olunmuş bir array var. Ən az yaşı olan ilə ən çox yaşı olan elementin yaşlarını və onların fərqini array şəklində qaytaran funksiya yazın. Məsələn - [13,67,54]