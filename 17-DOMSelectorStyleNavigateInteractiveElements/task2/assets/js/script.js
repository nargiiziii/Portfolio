

let card = document.createElement("div");
card.setAttribute("class", "card");
card.style.width = "20rem";
card.style.background = "rgba(173, 216, 230, 0.3)";
card.style.padding = "1rem";  
card.style.borderRadius = "10px";


let image = document.createElement("img");
image.classList.add("card-img");
image.setAttribute("src", "https://avatars.mds.yandex.net/i?id=68495fdccbf5a3b5fb8bcce557ab0a351eb91ad2-5713119-images-thumbs&n=13");
image.style.width = "20rem";


let title = document.createElement("h3");
title.textContent = "DETACHED HOUSE - 5Y OLD";
title.style.color = "gray";

let price = document.createElement("p");
price.setAttribute("class", "card-price");
price.textContent = "$750.00";
price.style.fontSize = "3rem";
price.style.margin = "0";

let subtitle = document.createElement("h4");
subtitle.textContent = "742 Evergreen Terrace";
subtitle.style.color = "gray";
subtitle.style.fontSize = "1.3rem";
subtitle.style.margin = "6px 0";


let productInfo = {
    title: title,
    price: price,
    subtitle: subtitle,
}



let heartIcon = document.createElement("i");
heartIcon.setAttribute("class", "fa-regular fa-heart fa-xl");
heartIcon.style.position = "absolute";
heartIcon.style.top = "2.5rem";
heartIcon.style.right = "2rem";
heartIcon.style.color = "white";



let cardBody = document.createElement("div");
card.style.position = "relative";
cardBody.append(heartIcon, title, price, subtitle);





let rooms = document.createElement("div");
rooms.setAttribute("class", "rooms-area");
rooms.style.display = "flex";
rooms.style.gap = "1.6rem";
rooms.style.fontSize ="1.1rem";
rooms.style.margin = "13px 0";
rooms.style.borderBlockEnd = "1px solid rgba(86, 112, 120, 0.3)";
rooms.style.borderBlockStart = "1px solid rgba(86, 112, 120, 0.3)";



let firstRoomIcon = document.createElement("i");
firstRoomIcon.setAttribute("class", "fa-solid fa-bed fa-lg")

let firstRoomText = document.createElement("div");
firstRoomText.setAttribute("class", "first-room");
firstRoomText.textContent = "3 Bedrooms";
firstRoomText.style.margin = "10px 0";

let firstRoomArea = document.createElement("div");
firstRoomArea.style.display = "flex";
firstRoomArea.style.alignItems = "center";
firstRoomArea.style.gap = "11px";

firstRoomArea.append(firstRoomIcon, firstRoomText)




let secondRoomIcon = document.createElement("i");
secondRoomIcon.setAttribute("class", "fa-solid fa-bath fa-lg")

let secondRoomText = document.createElement("div");
secondRoomText.setAttribute("class", "second-room");
secondRoomText.textContent = "2 Bathrooms";
secondRoomText.style.margin = "10px 0";

let secondRoomArea = document.createElement("div");
secondRoomArea.style.display = "flex";
secondRoomArea.style.alignItems = "center";
secondRoomArea.style.gap = "11px";

secondRoomArea.append(secondRoomIcon, secondRoomText)





rooms.append(firstRoomArea, secondRoomArea);



let realtor = document.createElement("div");
realtor.classList.add("realtor-area");
realtor.style.display = "block";

let realtorHead = document.createElement("p");
realtorHead.classList.add("realtor-head"); //silersen
realtorHead.textContent = "REALTER";
realtorHead.style.fontSize = "1rem";
realtorHead.style.color = "gray";
realtorHead.style.margin = "6px 0";


let realtorUser = document.createElement("div");
realtorUser.setAttribute("class", "user-area");
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

realtor.append(realtorHead, realtorUser);

card.append(image, cardBody, rooms, realtor);

let body = document.querySelector("body");
body.append(card);
