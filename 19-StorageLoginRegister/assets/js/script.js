

document.addEventListener("DOMContentLoaded", () => {

    let users = JSON.parse(localStorage.getItem("users"));

    let loginedUser = users.find((user) => user.isLogined == true);

    let login = document.querySelector(".login");
    
    let register = document.querySelector(".register");
    
    let logout = document.querySelector(".logout");



    
    if(loginedUser) {
        login.classList.add("d-none");
        register.classList.add("d-none");
        logout.classList.remove("d-none");
    } else {
        login.classList.remove("d-none");
        register.classList.remove("d-none");
        logout.classList.add("d-none")
    }

    let logoutUser = () => {
        loginedUser.isLogined = false;
        localStorage.setItem("users", JSON.stringify(users));
        logout.classList.add("d-none");
        login.classList.remove("d-none");
        register.classList.remove("d-none");
    }

    logout.addEventListener("click", logoutUser);

});


