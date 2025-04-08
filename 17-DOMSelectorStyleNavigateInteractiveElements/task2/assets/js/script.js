

let card = document.createElement("div");
card.setAttribute("class", "card");
card.style.width = "20rem";
card.style.background = "rgba(173, 216, 230, 0.3)";
card.style.padding = "1rem";  
card.style.borderRadius = "10px";
console.log(card);


let image = document.createElement("img");
image.classList.add("card-img");
image.setAttribute("src", "https://avatars.mds.yandex.net/i?id=68495fdccbf5a3b5fb8bcce557ab0a351eb91ad2-5713119-images-thumbs&n=13");
image.style.width = "20rem";
console.log(image);

let title = document.createElement("h3");
title.textContent = "DETACHED HOUSE - 5Y OLD";
title.style.color = "gray";
console.log(title);

let price = document.createElement("p");
price.setAttribute("class", "card-price");
price.textContent = "$750.00";
price.style.fontSize = "3rem";
price.style.margin = "0";
console.log(price);

let subtitle = document.createElement("h4");
subtitle.textContent = "742 Evergreen Terrace";
subtitle.style.color = "gray";
subtitle.style.fontSize = "1.3rem";
subtitle.style.margin = "6px 0";
console.log(subtitle);


let productInfo = {
    title: title,
    price: price,
    subtitle: subtitle,
}



let cardBody = document.createElement("div");
cardBody.append(title, price, subtitle);




let rooms = document.createElement("div");
rooms.setAttribute("class", "rooms-area");
rooms.style.display = "flex";
rooms.style.gap = "5rem";
rooms.style.fontSize ="1.1rem";
rooms.style.margin = "13px 0";
rooms.style.borderBlockEnd = "1px solid black";
rooms.style.borderBlockStart = "1px solid black";


let firstRoom = document.createElement("div");
firstRoom.setAttribute("class", "first-room");
firstRoom.textContent = "3 Bedrooms";
firstRoom.style.margin = "10px 0";

let secondRoom = document.createElement("div");
secondRoom.setAttribute("class", "second-room");
secondRoom.textContent = "2 Bathrooms";
secondRoom.style.margin = "10px 0";

rooms.append(firstRoom, secondRoom);



let realtor = document.createElement("div");
realtor.classList.add("realtor-area");
realtor.style.display = "block";

let realtorHead = document.createElement("p");
realtorHead.classList.add("realtor-head"); //silersen
realtorHead.textContent = "Realtor";
realtorHead.style.fontSize = "1.3rem";
realtorHead.style.color = "gray";



let realtorUser = document.createElement("div");
realtorUser.setAttribute("class", "user-area")
realtorUser.style.display = "flex";





let realtorImg = document.createElement("img");
realtorImg.setAttribute("src", "https://cdn-icons-png.flaticon.com/512/18775/18775912.png")
realtorImg.style.width = "3rem";
realtorImg.style.marginRight = "1rem";





let realtorInfo = document.createElement("div");
realtorInfo.style.display = "block";

let realtorName = document.createElement("p");
realtorName.classList.add("realtor-name"); //silersen
realtorName.textContent = "Tiffany Heffner";
realtorName.style.fontSize = "1.2rem";
realtorName.style.margin = "6px 0";
realtorName.style.fontWeight = "bold";

let realtorNum = document.createElement("p")
realtorNum.classList.add("realtor-num"); //silersen
realtorNum.textContent = "(555) 555-4321";
realtorNum.style.fontSize = "1.2rem";       
realtorNum.style.margin = "0";
realtorNum.style.color = "gray";

realtorInfo.append(realtorName, realtorNum)





realtorUser.append(realtorImg, realtorInfo);

realtor.append(realtorUser);

card.append(image, cardBody, rooms, realtor);

let body = document.querySelector("body");
body.append(card);
