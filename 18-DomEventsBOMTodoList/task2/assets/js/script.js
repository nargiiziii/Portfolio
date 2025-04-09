let form = document.querySelector("form");

let input = document.querySelector("#input");

let list = document.querySelector(".list")

form.addEventListener("submit", forToDo);


function forToDo (e) {
    e.preventDefault();

    if (input.value == "") {
        alert("please enter task!");
        return;
    } 

    let existingTasks = document.querySelectorAll(".task");
    for (let i = 0; i < existingTasks.length; i++) {
    if (existingTasks[i].textContent === input.value) {
        alert("hey, this task already exists.");
        return;
    }
}


let li = document.createElement("li");
li.classList.add("list-item");




let taskText = document.createElement("div");
taskText.classList.add("task-text");



let check = document.createElement("input");
check.setAttribute("type", "checkbox");
check.classList.add("task-checkbox")



let spanNum = document.createElement("span");
spanNum.classList.add("task-num");
spanNum.textContent = (list.children.length + 1) + ". "; 



let task = document.createElement("span");
task.classList.add("task");
task.textContent = input.value;
task.style.color = "red";



taskText.append(check, spanNum, task);




let setting = document.createElement("div");
setting.classList.add("setting");




let deleteBtn = document.createElement("i");
deleteBtn.classList.add("fa-solid", "fa-trash", "fa-lg")



let editBtn = document.createElement("i");
editBtn.classList.add("fa-solid","fa-pen-to-square", "fa-lg");



deleteBtn.addEventListener("click", (e) => {
    let parentElement = e.target.closest(".list-item");
    let taskText = parentElement.querySelector(".task");
    
    if(taskText.style.color !== "red") {
        parentElement.remove();
    } else {
        alert("you cannot delete an incompleted task!!!")
    }
    
})



editBtn.addEventListener("click", (e) => {
    let parentElement = e.target.closest(".list-item");
    let currentTaskText = parentElement.querySelector(".task");
    let newTaskText = prompt("edit your task", currentTaskText.textContent);

    if (newTaskText.trim() == "") {
        alert("please fill that area!")
    } else {
        currentTaskText.textContent = newTaskText;
    }
})





check.addEventListener("click", (e) => {
    let parentElement = e.target.closest(".list-item");
    let underlined = parentElement.querySelector(".task");

    if (underlined.style.textDecoration == "line-through") {
        underlined.style.textDecoration = "none";
        underlined.style.color = "red";
        spanNum.style.color = "red";
    } else {
        underlined.style.textDecoration = "line-through";
        underlined.style.color = "green";
        spanNum.style.color = "green";
    }
})



updateNum();


setting.append(deleteBtn, editBtn);


li.append(taskText, setting);

list.appendChild(li);

input.value = "";

}


// reqemlerin artmasi ucun ayri funksiya
function updateNum() {
    let allTasks = document.querySelectorAll('.list-item');
    allTasks.forEach((task, index) => {
        let numSpan = task.querySelector(".task-num");
        numSpan.textContent = (index + 1) + ". "; 
    });
}




let deleteAll = document.querySelector(".delete-all-btn");

deleteAll.addEventListener("click", (e) => {
    let allTasksList = document.querySelectorAll(".list .list-item");

    allTasksList.forEach((task) => {
        let taskText = task.querySelector(".task");

        if (taskText.style.color === "green") {
            task.remove();
        } else {
            alert("you cannot delete an incompleted tasks! we will delete only completed ones.");
        }
    });
});
