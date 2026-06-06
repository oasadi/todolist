console.log("hello world");
// input Settings
// selectors
let inputButton = document.getElementById("enter-button");
let inputUser = document.getElementById("input-fild");
let ulSellect = document.querySelector("ul");
let liIdCount = 0;
let delIdCount = 0;


// input Settings
// Functions
function inputLength() {
    return inputUser.value.length;
}

function createListElements() {
    let liCreator = document.createElement("li");
    liCreator.classList.add("task");
    liCreator.classList.add("glassbox");
    let liIdCreator = "task-id-" + liIdCount;
    liCreator.id = liIdCreator;
    liIdCount++;
    
    let delCreator = document.createElement("input");
    delCreator.classList.add("delete-task");
    delCreator.type = "button";
    delCreator.value ="حذف";
    let delIdCreator = "del-id-" + delIdCount;
    delCreator.id = delIdCreator;
    liCreator.appendChild(delCreator);
    delIdCount++;
    
    let checkCreator = document.createElement("input");
    checkCreator.classList.add("task-check");
    checkCreator.type = "checkbox";
    liCreator.appendChild(checkCreator);
    
    let paragraphCreator = document.createElement("p");
    paragraphCreator.classList.add("task-text");
    paragraphCreator.appendChild(document.createTextNode(inputUser.value));
    liCreator.appendChild(paragraphCreator);
    
    ulSellect.appendChild(liCreator);

    inputUser.value = ""

    console.log("Task Created")
}

function addToListByClick() {
    if (inputLength() > 0) {
        createListElements();
    }
}

function addToListBykeypress() {
    if (inputLength() > 0 && event.code === "Enter") {
        createListElements();
    }
}

// Actions
inputButton.addEventListener("click" , addToListByClick)

inputUser.addEventListener("keypress" , addToListBykeypress)

// Dellet setting
// selectors
let taskRowSelector = document.getElementById("tasks-list");

// Functions
function taskRemover (event) {
    if (event.target.classList.contains("delete-task")) {
        let taskRow = event.target.parentNode;
        taskRow.remove();
        console.log("Task deleted");
    }
}

// Actions
taskRowSelector.addEventListener("click", taskRemover);

// Done Settieng
// Functions
function doneAction(event) {
    if (event.target.classList.contains("task-check")) {
        let taskrooow = event.target.parentNode;
        if (event.target.checked) {
            taskrooow.classList.add("done");
        } else {
            taskrooow.classList.remove("done");
        }
        console.log("Task Done/Undone");
    }
}

// Actions
taskRowSelector.addEventListener("change", doneAction);
