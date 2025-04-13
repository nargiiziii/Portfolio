document.addEventListener("DOMContentLoaded", () => {

    let users = JSON.parse(localStorage.getItem("users")) || [];
    let currentUsers = users.find((user) => user.isLogined); //isLogined true olani bilecem hansidi

    let form = document.querySelector("form");
    let name = document.querySelector("#name");
    let username = document.querySelector("#username");
    let email = document.querySelector("#email");
    let password = document.querySelector("#password");

    if(currentUsers){
        name.value= currentUsers.name;
       username.value = currentUsers.username;
        email.value = currentUsers.email;
    }else {
        toast("you should login first!!");
        setTimeout(() => {
           window.location.href = "login.html"; 
        }, 2000);
        return;
    }

    form.addEventListener("submit", (e) => {
        e.preventDefault();
      
        let usernameValue = username.value.trim();
        let emailValue = email.value.trim();
        let passwordValue = password.value.trim();
      
        // registerdeki kimi eyni yoxlanislar qoyuram ki problem olmasin:
        if (usernameValue.length < 3) {
          toast("username must have more than 3 characters");
          return;
        } else if (usernameValue.length > 20) {
          toast("username must have less than 20 characters");
          return;
        }
      
        let permittedSymb = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789_-";
        if (!usernameValue.split("").every(char => permittedSymb.includes(char))) {
          toast("username can contain only letters, numbers, _ or -");
          return;
        }
      
        //email yoxlanisi
        if (
          !emailValue.includes("@") ||
          !emailValue.includes(".") ||
          !emailValue.endsWith(".com") ||
          emailValue.indexOf("@") < 1 ||
          emailValue.indexOf(".") < emailValue.indexOf("@") + 1
        ) {
          toast("Email must have correct format (example: user@example.com)");
          return;
        }
      
        //password yoxlanisi
        let haveUppercase = passwordValue !== passwordValue.toLowerCase();
        let haveLowercase = passwordValue !== passwordValue.toUpperCase();
        let haveDigit = passwordValue.split("").some(char => "0123456789".includes(char));
        let haveSpecial = passwordValue.split("").some(char => "@#$%&".includes(char));
        let isLong = passwordValue.length >= 8;
      
        if (!(haveUppercase && haveLowercase && haveDigit && haveSpecial && isLong)) {
          toast("Password must have correct format (example: nN1#nN1#)");
          return;
        }
      
        //sonra deyisirem butun melumatlari
        currentUsers.name = name.value.trim();
        currentUsers.username = usernameValue;
        currentUsers.email = emailValue;
        currentUsers.password = passwordValue;
      
        users.forEach((user, index) => {
          if (user.id === currentUsers.id) {
            users[index] = currentUsers;
          }
        });
    
    
        localStorage.setItem("users", JSON.stringify(users));
        toast("account settings updated!!!");
        setTimeout(() => {
           window.location.href = "index.html" 
        }, 1000);
      
    });

});


let toast = (text) => {
    Toastify({
      text: `${text}`,
      duration: 2000,
      position: "left",
      stopOnFocus: true,
      style: {
        background:
          "linear-gradient(to right, rgb(5, 125, 162),rgb(110, 185, 208))",
      },
      onClick: function () {},
    }).showToast();
  };

