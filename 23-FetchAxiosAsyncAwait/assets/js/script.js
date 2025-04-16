

async function getData() {

}
getData()


document.addEventListener("DOMContentLoaded", async () => {

    let products = (await axios('http://localhost:3000/products')).data;

    let users = JSON.parse(localStorage.getItem("users")) || [];

    let loginedUser = users.find((user) => user.isLogined == true);

    let userIndex = users.findIndex((user) => user.id == loginedUser?.id);

    let userBtn = document.querySelector(".username");
    userBtn.textContent = loginedUser?.username;

    let login = document.querySelector(".login");
    
    let register = document.querySelector(".register");
    
    let logout = document.querySelector(".logout");

    let settings = document.querySelector(".settings");

    let wishlistLink = document.querySelector(".wishlistIcon");

    let basketLink = document.querySelector(".basketIcon");


    function updateUserStatus(){
      if(loginedUser) {
          login.classList.add("d-none");
          register.classList.add("d-none");
          logout.classList.remove("d-none");
          settings.classList.remove("d-none");
      } else {
          login.classList.remove("d-none");
          register.classList.remove("d-none");
          logout.classList.add("d-none")
          settings.classList.add("d-none")
      }
  }
    
    let logoutUserFunc = () => {
        loginedUser.isLogined = false;
        // logout etdikden sonra localstorageden wishlisti sifirlayiram
        loginedUser.wishlist = [];

        localStorage.setItem("users", JSON.stringify(users));

        loginedUser = null; //bunu null eledim ki wishliste kecid ede bilmesin, user cixis etdikden sonra login melumati sifirlansin 

        logout.classList.add("d-none");
        settings.classList.add("d-none");
        login.classList.remove("d-none");
        register.classList.remove("d-none");

        userBtn.textContent = "";

        toast("user logged out!!");

       let cards = document.querySelector(".cards")

      //logout etdikden sonra UI'dan heart'lari silmek ucun bele if bloku yazdim:
        if (cards) {
          cards.innerHTML = "";   
          createUserCard();                 
      }

    }

    logout.addEventListener("click", logoutUserFunc);

    // login olmayanda wishlist seyfesine kecmek olmasin deye:
    if(wishlistLink){
      wishlistLink.addEventListener("click", (e) => {
        if(!loginedUser){ 
          e.preventDefault();
          toast("before entering the wishlist,you should log in!!");
          setTimeout(() => {
            window.location.href = "login.html";
          }, 2000);
        }
      });
    }


    // login olmayanda basket seyfesine kecmek olmasin deye:
    if(basketLink){
      basketLink.addEventListener("click", (e) => {
        if(!loginedUser){ 
          e.preventDefault();
          toast("before entering the basket,you should log in!!");
          setTimeout(() => {
            window.location.href = "login.html";
          }, 2000);
        }
      });
    }
    


 function createUserCard(){

    products.forEach((product) => {

            let card = document.createElement("div");
            card.classList.add("card");
            card.style.cursor = "pointer";
            card.addEventListener("click", () => {
              window.location.href = `product_detail.html?id=${product.id}`
            })

            let heartIcon = document.createElement("i");
            heartIcon.classList.add("fa-regular", "fa-heart", "card-heart");
            card.appendChild(heartIcon);


            //refresh etdikden sonra secilmis produktlar seyfede qalsin deye:
            if(loginedUser && loginedUser.wishlist.some(item => item.id === product.id)){
              heartIcon.classList.add("fa-solid");
            }else {
              heartIcon.classList.add("fa-regular");
            }
            

            heartIcon.addEventListener("click", (e) => {
              e.stopPropagation(),
              toggleUserWishlist(product.id, heartIcon)
            });

            let cardImage = document.createElement("div");
            cardImage.classList.add("card-image");

            let img = document.createElement("img");
            img.src = `${product.image}`;
            
            let cardContent = document.createElement("div");
            cardContent.classList.add("card-content");

            let cardTittle = document.createElement("h2");
            cardTittle.classList.add("card-title");
            cardTittle.textContent= `${product.title.slice(0, 18)}. . .`;

            let cardCategory = document.createElement("p");
            cardCategory.classList.add("card-category");
            cardCategory.textContent = `${product.category}`;
            
            let cardFooter = document.createElement("div");
            cardFooter.classList.add("card-footer");

            let cardPrice = document.createElement("span");
            cardPrice.classList.add("card-price");
            cardPrice.textContent = `$${product.price}`;

            let cardRating = document.createElement("div");
            cardRating.classList.add("card-rating");

            let rate = document.createElement("span");
            rate.textContent = `${product.rating.rate}`;

            let reviews = document.createElement("span");
            reviews.textContent = `${product.rating.count}`;

            let addBtn = document.createElement("button");
            addBtn.classList.add("btn", "btn-primary", "add-to-cart");
            addBtn.textContent = "Add Basket";

            addBtn.addEventListener("click", (e) => {
              e.stopPropagation(),
              addBasket(product.id)});


            cardRating.append(rate, reviews);
            cardFooter.append(cardPrice, cardRating);
            cardContent.append(cardTittle,cardCategory, cardFooter, addBtn);
            cardImage.appendChild(img);
            card.append(cardImage, cardContent);

            let cards = document.querySelector(".cards");
            cards.appendChild(card);
        });
    }


    function toggleUserWishlist(productId, heartIcon){

      if(!loginedUser){
        toast("you should login first before entering the wishlist!!");
        setTimeout(() => {
          window.location.href = "login.html";
        }, 3000);
      }

      let currentProduct = loginedUser.wishlist.some((item) => item.id === productId);

      if(currentProduct) {
        let currentProductIndex = loginedUser.wishlist.findIndex(
          (product) => product.id == productId
        );

        loginedUser.wishlist.splice(currentProductIndex, 1); //wishlistde bu product olarsa onu silirem

        users[userIndex].wishlist = loginedUser.wishlist;
        localStorage.setItem("users", JSON.stringify(users));

        heartIcon.classList.remove("fa-solid");
        heartIcon.classList.add("fa-regular");
        
        toast("product removed from wishlist");

      } else {
        let addProduct = products.find((product)=> product.id == productId);

        loginedUser.wishlist.push(addProduct); //wishlistde product yoxdusa onu elave edirem wishlist arrayin icine

        users[userIndex] = loginedUser;
        localStorage.setItem("users", JSON.stringify(users));

        heartIcon.classList.add("fa-solid");
        heartIcon.classList.remove("fa-regular");

        toast("product added to wishlist")

      }

    }


    function addBasket(productId) {

      if(!loginedUser){
        toast("you should login first before entering the basket!!");
        setTimeout(() => {
          window.location.href = "login.html";
        }, 3000);
      }
      
      let existingProd = loginedUser.basket.find((prod) => prod.id == productId);
      
      if (!existingProd) {
        let product = products.find((productItem)=> productItem.id == productId);
        loginedUser.basket.push({...product, count: 1});
      }else {
        existingProd.count++;
      }

      users[userIndex].basket == loginedUser.basket;
      localStorage.setItem("users", JSON.stringify(users));
      toast("product added to basket!!");
      basketCount();
    }

    function basketCount(){
      let result = loginedUser.basket.reduce(
        (acc, product) => acc + product.count,
      0);

      let countItem = document.querySelector(".basketIcon sup");
      countItem.textContent = result
    }
    basketCount();
    updateUserStatus();
    createUserCard();


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

