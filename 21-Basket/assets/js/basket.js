
document.addEventListener("DOMContentLoaded", () => {

    let users = JSON.parse(localStorage.getItem("users"));

    let currentUser = users.find((user) => user.isLogined === true);

    let userIndex = users.findIndex((user) => user.id == currentUser.id);

    let basket = currentUser.basket;

    function createBasketItem() {
        let basketContainer = document.querySelector(".basket");
        basketContainer.innerHTML ="";

        basket.forEach(product => {
        let basketItem = document.createElement("div");
        basketItem.classList.add("basket-item");
        
        let image = document.createElement("div");
        image.classList.add("image");

        let img = document.createElement("img");
        img.src = product.image;
        image.appendChild(img);

        let title = document.createElement("h6");
        title.classList.add("title");
        title.textContent = product.title;

        let category = document.createElement("p");
        category.classList.add("category");
        category.textContent = product.category;

        let priceElem = document.createElement("p");
        priceElem.classList.add("price");
        priceElem.textContent = "$" + (product.price * product.count).toFixed(2);
        

        let countArea = document.createElement("div");
        countArea.classList.add("count-area");

        let minusBtn = document.createElement("button");
        minusBtn.classList.add("minus-btn");
        minusBtn.textContent = "-";
        minusBtn.addEventListener("click", () => decrement(product.id, countElem, minusBtn, priceElem));

        let countElem = document.createElement("p");
        countElem.classList.add("count");
        countElem.textContent = product.count;

        let plusBtn = document.createElement("button");
        plusBtn.classList.add("plus-btn");
        plusBtn.textContent = "+";
        plusBtn.addEventListener("click", () => increment(product.id, countElem, minusBtn, priceElem));

        let removeBtn = document.createElement("button");
        removeBtn.classList.add("btn", "btn-danger");
        removeBtn.textContent = "remove";

        removeBtn.addEventListener("click", ()=> removeProduct(product.id));

        countArea.append(minusBtn, countElem, plusBtn);
        basketItem.append(image, title, category, priceElem, countArea, removeBtn);

        basketContainer.appendChild(basketItem);
        });

        
     totalPrice();

    //butun basketi temizlemek ucun:
     let clearBtn = document.createElement("button");
     clearBtn.classList.add("btn", "btn-danger", "clear-basket-btn");
     clearBtn.textContent = "clear basket";
     
     clearBtn.addEventListener("click", clearBasket);
     
     basketContainer.appendChild(clearBtn);
     
    };


    function clearBasket() {
        basket = [];
        users[userIndex].basket = basket;
        localStorage.setItem("users", JSON.stringify(users));
        createBasketItem();
        toast("all products removed from basket!!");
    }
    


    function increment(productId, countElem, minusBtnElem, priceElem) {
        let existProduct = basket.find((product) => product.id == productId);
        if (existProduct) {
            existProduct.count++;
            countElem.textContent = existProduct.count;
            priceElem.textContent = "$" + (existProduct.count * existProduct.price).toFixed(2);
    
            if (existProduct.count > 1) {
                minusBtnElem.removeAttribute("disabled");
            }
    
            users[userIndex].basket = basket;
            localStorage.setItem("users", JSON.stringify(users)); 
        }
        totalPrice();
    }
    
    function decrement(productId, countElem, minusBtnElem, priceElem) {
        let existProduct = basket.find((product) => product.id == productId);
        if (existProduct && existProduct.count > 1) {
            existProduct.count--;
            countElem.textContent = existProduct.count;
            priceElem.textContent = "$" + (existProduct.count * existProduct.price).toFixed(2);
    
            if (existProduct.count === 1) {
                minusBtnElem.setAttribute("disabled", "true");
            }
    
            users[userIndex].basket = basket;
            localStorage.setItem("users", JSON.stringify(users)); 
        }
        totalPrice();
    }
    


    function totalPrice() {
        let paymentCash = 0;
        basket.forEach((product) => {
            paymentCash += product.count * product.price;
        });

        let totalElement = document.querySelector(".total-price");
        totalElement.textContent = "$" + paymentCash.toFixed(2);
    }


    function removeProduct(productId) {
        let existProductIndex = basket.findIndex(
            (product) => product.id == productId
        );

        if (existProductIndex != -1) {
            basket.splice(existProductIndex, 1);
            users[userIndex].basket = basket;
            localStorage.setItem("users", JSON.stringify(users));
            toast("product deleted!!");
            createBasketItem();
        }
    }


    totalPrice();
    createBasketItem();

});


let toast = (text) => {
    Toastify({
        text: `${text}`,
        duration: 3000,
        position: "left", 
        stopOnFocus: true, 
        style: {
            background: "linear-gradient(to right, rgb(5, 125, 162),rgb(110, 185, 208))",
        },
        onClick: function() {} 
    }).showToast();
  }