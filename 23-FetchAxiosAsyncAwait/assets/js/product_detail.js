
// TASK 1

document.addEventListener("DOMContentLoaded", async () => {
    let Url = new URLSearchParams(location.search);
    let prodContainer = document.querySelector(".product-container");
    let id = Url.get("id");

    fetch(`https://fakestoreapi.com/products/${id}`)
    .then((response) => response.json())
    .then((data) => {
      prodContainer.innerHTML = `
 <div class="product-image">
          <img src="${data.image}" alt="" class="img">
        </div>
        <div class="product-info">
          <div class="product-details">
            <h4 class="product-title">${data.title}</h4>
            <p class="product-category">Category: ${data.category}</p>
            <p class="product-price" id="product-price">$${data.price}</p>
            <p class="product-desc">${data.description}</p>
          </div>
          <div class="product-rating">
            <span>*${data.rating.rate}</span>
            <span class="prod-count">(${data.rating.count} reviews)</span>
          </div>
          <div class="quantity-selector">
            <button class="btn-minus">-</button>
            <input type="number" value="1" min="1" id="quantity-input"/>
            <button class="btn-plus">+</button>
          </div>
          <button class="btn btn-danger add-to-cart">Add to cart</button>
        </div>
      `
      
      let minusBtn = document.querySelector(".btn-minus");
      let plusBtn = document.querySelector(".btn-plus");
      let quantityInput = document.getElementById("quantity-input");
      let priceElem = document.getElementById("product-price");

      let users = JSON.parse(localStorage.getItem("users")) || [];
      let userIndex = users.findIndex((user) => user.isLogined === true);

      let loginedUser = users[userIndex];
      let basket = loginedUser.basket || [];

      let existProduct = basket.find((product) => product.id == id);
      let count = existProduct && existProduct.count || 1;

      quantityInput.value = count;
      updatePrice();

      function updatePrice() {
          priceElem.textContent = "$" + (data.price * count).toFixed(2);
      }

      minusBtn.addEventListener("click", () => {
          if (count > 1) {
              count--;
              quantityInput.value = count;
              updatePrice();

              if (existProduct) {
                  existProduct.count = count;
              } else {
                  let productToAdd = { ...data, count };
                  basket.push(productToAdd);
              }

              users[userIndex].basket = basket;
              localStorage.setItem("users", JSON.stringify(users));
          }
      });

      plusBtn.addEventListener("click", () => {
          count++;
          quantityInput.value = count;
          updatePrice();

          if (existProduct) {
              existProduct.count = count;
          } else {
              let productToAdd = { ...data, count };
              basket.push(productToAdd);
          }

          users[userIndex].basket = basket;
          localStorage.setItem("users", JSON.stringify(users));
      });

      let addToCartBtn = document.querySelector(".add-to-cart");
      addToCartBtn.addEventListener("click", () => {
          if (!existProduct) {
              let productToAdd = { ...data, count };
              basket.push(productToAdd);
              toast("Product added to cart!");
          } else {
              existProduct.count = count;  
          }

          users[userIndex].basket = basket;
          localStorage.setItem("users", JSON.stringify(users));
      });

      quantityInput.addEventListener("input", function () {
          let value = Number(quantityInput.value);

          if (!isNaN(value) && value >= 1) {
              count = value;
              updatePrice();

              if (existProduct) {
                  existProduct.count = count;
              } else {
                  let productToAdd = { ...findProd, count };
                  basket.push(productToAdd);            
              }

              users[userIndex].basket = basket;
              localStorage.setItem("users", JSON.stringify(users));
          } else {
              quantityInput.value = 1;
              updatePrice();
          }
      });
      ;
    })
    .catch((error) => {
      console.log("data tapilmadi, xeta: " + error);
      prodContainer.innerHTML = `<p>mehsul tapilmadi</p>`;
    });
  ;

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








