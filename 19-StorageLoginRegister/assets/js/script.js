document.addEventListener("DOMContentLoaded", () => {

    let form = document.querySelector("form");

    let users = JSON.parse(localStorage.getItem("users")) || [];

    let name = document.querySelector("#name");
    let username = document.querySelector("#username");
    let email = document.querySelector("#email");
    let password = document.querySelector("#password");
    let confirmpassword = document.querySelector("#confirmpassword")


    form.addEventListener("submit", register);

    function register(e) {
        e.preventDefault();

        let uniqueUser = users.some(
            (user) => user.username == username.value || user.email == email.value
        );

        if(!uniqueUser) {
            let newUser = {
                name: name.value,
                username: username.value,
                email: email.value, 
                password: password.value,
                confirmpassword: confirmpassword.value,
            };

            users.push(newUser);
            localStorage.setItem("users", JSON.stringify(users));
            toast("Register successfuly!!");
            setTimeout(() => {
                window.location.href = "login.html"
            }, 4000);
        } else {
            toast("User already exist!")
        }

    }

    let toast= (text) => {
        Toastify({
            text: `${text}`,
            duration: 3000,
            position: "right", 
            stopOnFocus: true, 
            style: {
              background: "linear-gradient(to right,rgb(23, 63, 204),rgb(87, 116, 222))",
            },
            onClick: function(){} 
          }).showToast();
    }

})
