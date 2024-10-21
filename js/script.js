const listContainer = document.getElementById("listContainer");
const inputBox = document.getElementById("inputBox");

function addTask(){
    if (inputBox.value === ''){
        alert("Your must write something");
    }
    else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = '';
    saveData();
}

listContainer.addEventListener("click", function(e){
    if (e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if (e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
})

function saveData(){
    localStorage.setItem("task", listContainer.innerHTML);
}

function showData(){
    listContainer.innerHTML = (localStorage.getItem("task"));
}
showData();