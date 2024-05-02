function addTask(){
    var inputBox = document.getElementById("input-box");
    var inputBoxValue = document.getElementById("input-box").value;
    
    if (inputBoxValue === '') {
        alert("내용을 입력해주세요!");
    } else {
        var newTodo = document.createElement("div");
        newTodo.className = "todo";
        newTodo.innerHTML = `
        <input type="checkbox" class="checkbox" onclick="taskCheck(this)">
        <label>${inputBoxValue}</label>
        <button class="delete-btn" onclick="deleteTask(this)">X</button>
        `;

        var listContainer = document.getElementById("list-container");
        listContainer.appendChild(newTodo);
        inputBox.value = "";
    }
}

function enterKey() {
    if (window.event.keyCode == 13) {
        addTask();
    }
}

function deleteAll() {
    if(confirm("정말 삭제하시겠습니까?")==true){
        var listContainer = document.getElementById("list-container");
        listContainer.innerText='';
    }
}

function deleteTask(e){
    e.parentElement.remove();
}

function taskCheck(e){
    if (e.checked) {
        e.nextElementSibling.className = "checked";
    } else {
        e.nextElementSibling.className = "unchecked";
    }
}