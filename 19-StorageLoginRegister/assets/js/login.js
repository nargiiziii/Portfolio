document.addEventListener("DOMContentLoaded", () => {
  let users = JSON.parse(localStorage.getItem("users"));
  let form = document.querySelector("form");

  let username = document.querySelector("#username");
  let password = document.querySelector("#password");

  form.addEventListener("submit", login);

  function login(e) {
    e.preventDefault();
    // debugger
    console.log(users);

    if (!users) {
      toast("user is not found");
    }

    let isLoginedUser = users.find(
      (user) =>
        user.username == username.value && user.password == password.value
    );

    if (isLoginedUser) {
        isLoginedUser.isLogined = true;
        localStorage.setItem("users", JSON.stringify(users));
        toast("user login succesfully!");
        
        setTimeout(() => {
            window.location.href = "index.html"
        }, 4000);

    } else {
        toast("username or password incorrect!");
        return
    }
    
  }
});

let toast = (text) => {
  Toastify({
    text: `${text}`,
    duration: 3000,
    position: "right",
    stopOnFocus: true,
    style: {
      background:
        "linear-gradient(to right, rgb(5, 125, 162),rgb(110, 185, 208))",
    },
    onClick: function () {},
  }).showToast();
};
