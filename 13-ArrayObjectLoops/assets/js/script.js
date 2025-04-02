// -------1.Armstrong ededlerini yazan algorithm.(armstronq ədədləri bütün rəqəmlərinin kubunun toplamına bərabər olan ədədlərdir.)-------

// 153: ( 1**3 + 5**3 + 3**3 = 1 + 125 + 27 = 153 )
// 370: ( 3**3 + 7**3 + 0**3 = 27 + 343 + 0 = 370 )
// 371: ( 3**3 + 7**3 + 1**3 = 27 + 343 + 1 = 371 )

/*
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
*/

// let num = 356;

// let digit1 = (num - (num % 100)) / 100;   //3
// num = 356 % 100; //num olacaq 56
// let digit2 = (num - (num % 10)) / 10;     //5
// let digit3 = num % 10;                    //6








// ------2.Multiplication Table(1-10 vurma cedveli)-------
// debugger

/*
for (a = 0; a <= 10; a++) {

  let line = '';

  for (b = 0; b <= 10; b++) {
    line = line + (a * b) + " ";
  }

  console.log(line);
}
*/




// -------3.Verilmis userlerden ibaret arreyde yasi 30-dan boyuk ve kicik olanlari consola yazdirmaq.-------

/*
let arr = [
    {name: "Nigar", age: 41},
    {name: "Nargiz", age: 20},
    {name: "Ramazan", age: 21},
    {name: "Mehemmed", age: 35},
    {name: "Kamran", age: 50},
    {name: "Ibrahim", age: 10}
]


for (i = 0; i < arr.length; i++) {
    let userAge = arr[i].age;
    let userName = arr[i].name

    if (userAge > 30){
        console.log(`${userName}in yasi 30dan boyukdur`);
    } else if (userAge < 30) {
        console.log(`${userName}in yasi 30dan kicikdir`);   
    }
}
*/



// -------4.Arraye daxil edilən 10 ədədin ededi ortasini tapan proqramın alqoritmi yazmaq.(While loop ile)-------







// -------5.Girilen ededin istenilen edede göre modunu(%) tapan algoritm yazmaq.-------







// Verilmiş array: let arr = [203, 19, 2, 13, 196, 86, 35, 77,]

// 6.Verilmis array-de en boyuk ededin tapilmasi.



// 7.Verilmiş array-in min elementi ilə max elementinin yerini dəyişən proqram tərtib edin



// 8.Verilmiş array-də min və max elementi nəzərə almadan yerdə qalan bütün elementlərin cəmini tapın.



// 9.Verilmiş array-e daxil olunan ədədin arreyde olub olmadığını təyin edən proqram tərtib edin.



// 10.Verilmiş array-in elementlerinden neçəsinin bir rəqəmi, neçəsinin iki rəqəmi, ve necesinin uc reqemi oldugunu tapan algrithm yazmaq.


