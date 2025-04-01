// TASK 1 

// WITH SWITCH CASE STATEMENT

let dizelPrice = 0.9;
let benzinPrice = 1;
let premiumPrice = 1.5;

let choice = prompt("Choose fuel type:\n 1-Dizel \n 2-Benzin \n 3-Premium");
choice = Number(choice);

switch (choice) {
case 1:
    fuelLiter = prompt("Enter the amount of dizel liters you want to buy");
    userMoney = prompt("Enter the amount of money you have right now");
    totalPrice = fuelLiter * dizelPrice;
    remainingMoney = userMoney - totalPrice;
    if (userMoney > totalPrice) {
    alert(`Your money is Ok: \n My remaining money: ${remainingMoney.toFixed(2)} Azn`);
    } else if (userMoney < totalPrice) {
    alert(`Total price is ${totalPrice} Azn \n Your balance is ${userMoney} Azn \n And you need to add ${missingMoney.toFixed(2)} Azn more`);
    }
    break;
case 2:
    fuelLiter = prompt("Enter the amount of benzin liters you want to buy");
    userMoney = prompt("Enter the amount of money you have right now");
    totalPrice = fuelLiter * benzinPrice;
    remainingMoney = userMoney - totalPrice;
    if (userMoney > totalPrice) {
    alert(`Your money is Ok: \n My remaining money: ${remainingMoney.toFixed(2)} Azn`);
    } else if (userMoney < totalPrice) {
    alert(`Total price is ${totalPrice} Azn \n Your balance is ${userMoney} Azn \n And you need to add ${missingMoney.toFixed(2)} Azn more`);
    }
    break;
case 3:
    fuelLiter = prompt("Enter the amount of premium liters you want to buy");
    userMoney = prompt("Enter the amount of money you have right now");
    totalPrice = fuelLiter * premiumPrice;
    remainingMoney = userMoney - totalPrice;
    if (userMoney > totalPrice) {
    alert(`Your money is Ok: \n My remaining money: ${remainingMoney.toFixed(2)} Azn`);
    } else if (userMoney < totalPrice) {
    alert(`Total price is ${totalPrice} Azn \n Your balance is ${userMoney} Azn \n And you need to add ${missingMoney.toFixed(2)} Azn more`);
    }
    break;
    default:
    alert("Lütfən, düzgün Yanacaq Tipi daxil edin.");
    break;
}




// WITH IF ELSE STATEMENT (bu kodumda isleyir, her iki cur etmeye calisdim)

// let dizelPrice = 0.9;

// let benzinPrice = 1;

// let premiumPrice = 1.5;

// let choice = prompt("Choose fuel type:\n 1-Dizel \n 2-Benzin \n 3-Premium");

// choice = Number(choice);

// if (choice == 1) {
//     let dizelLiters = Number(
//         prompt("Enter the amount of dizel liters you want to buy")
//     );
//     let userMoney = Number(
//         prompt("Enter the amount of money you have right now")
//     );

//     let totalPrice = dizelLiters * dizelPrice;
//     let remainingMoney = userMoney - totalPrice;

//     if (userMoney > totalPrice) {
//         alert(
//             `Your money is Ok: \n My remaining money: ${remainingMoney.toFixed(
//         2
//       )} Azn`
//         );
//     } else if (userMoney < totalPrice) {
//         missingMoney = totalPrice - userMoney;
//         alert(
//             `Total price is ${totalPrice} Azn \n Your balance is ${userMoney} Azn \n And you need to add ${missingMoney.toFixed(
//         2
//       )} Azn more`
//         );
//     }
// } else if (choice == 2) {
//     let benzinLiters = Number(
//         prompt("Enter the amount of benzin liters you want to buy")
//     );
//     let userMoney = Number(
//         prompt("Enter the amount of money you have right now")
//     );
//     let totalPrice = benzinLiters * benzinPrice;
//     let remainingMoney = userMoney - totalPrice;

//     if (userMoney > totalPrice) {
//         alert(
//             `Your money is Ok: \n My remaining money: ${remainingMoney.toFixed(
//         2
//       )} Azn`
//         );
//     } else if (userMoney < totalPrice) {
//         missingMoney = totalPrice - userMoney;
//         alert(
//             `Total price is ${totalPrice} Azn \n Your balance is ${userMoney} Azn \n And you need to add ${missingMoney.toFixed(
//         2
//       )} Azn more`
//         );
//     }
// } else if (choice == 3) {
//     let premiumLiters = Number(
//         prompt("Enter the amount of premium liters you want to buy")
//     );
//     let userMoney = Number(
//         prompt("Enter the amount of money you have right now")
//     );
//     let totalPrice = premiumLiters * premiumPrice;
//     let remainingMoney = userMoney - totalPrice;

//     if (userMoney > totalPrice) {
//         alert(
//             `Your money is Ok: \n My remaining money: ${remainingMoney.toFixed(
//         2
//       )} Azn`
//         );
//     } else if (userMoney < totalPrice) {
//         missingMoney = totalPrice - userMoney;
//         alert(
//             `Total price is ${totalPrice} Azn \n Your balance is ${userMoney} Azn \n And you need to add ${missingMoney.toFixed(
//         2
//       )} Azn more`
//         );
//     }
// } else {
//     alert("Lütfən, düzgün Yanacaq Tipi daxil edin.");
// }











// TASK 2

// WITH SWITCH CASE STATEMENT


let season = prompt("Enter the season \n 1-Spring \n 2-Summer \n 3-Autumn \n 4-Winter")
season = Number(season);

switch (season) {
    case 1:
        alert("Months: March, April, May")
    break;
    case 2:
        alert("Months: June, July, August")
    break;
    case 3:
        alert("Months: September, October, November")
    break;
    case 4:
        alert("Months: December, January, February")
    break;
}




// WITH IF ELSE STATEMENT (ve yene if else ile yazdim bu kodumda isleyir)



// let season = prompt("Enter the season");

// if (season == "Spring") {
//     alert("Months: March, April, May");
// } else if (season == "summer") {
//     alert("Months: June, July, August");
// } else if (season == "Autumn") {
//     alert("Months: September, October, November");
// } else if (season == "Winter") {
//     alert("Months: December, January, February");
// } else {
//     alert("Enter a valid season!!");
// }
