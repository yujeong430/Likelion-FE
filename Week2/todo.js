/* task 추가하는 함수 */
function addTask(){
    var inputBox = document.getElementById("input-box");
    var inputBoxValue = document.getElementById("input-box").value;
    
    if (inputBoxValue === '') {
        alert("내용을 입력해주세요!");
    } else {
        /* div element를 만들어서 'todo' class 적용하고, 아래의 html 추가 */
        var newTodo = document.createElement("div");
        newTodo.className = "todo";
        newTodo.innerHTML = `
        <input type="checkbox" class="checkbox" onclick="taskCheck(this)">
        <label>${inputBoxValue}</label>
        <button class="delete-btn" onclick="deleteTask(this)">X</button>
        `;

        /* div가 task들이 추가되는 list-container의 자식 요소가 되도록 설정 */
        var listContainer = document.getElementById("list-container");
        listContainer.appendChild(newTodo);
        inputBox.value = "";
    }
}

/* input 창에서 엔터키를 눌렀을 때도 addTask 함수가 실행되도록 함 */
function enterKey() {
    if (window.event.keyCode == 13) {
        addTask();
    }
}

/* task 전체 삭제하는 함수 */
function deleteAll() {
    if(confirm("정말 삭제하시겠습니까?")==true){
        var listContainer = document.getElementById("list-container");
        listContainer.innerText='';
    }
}

/* x 버튼 눌렀을 때 해당 버튼의 부모 요소, 즉 div 삭제하는 함수 */
function deleteTask(e){
    e.parentElement.remove();
}

/* 체크박스가 체크되지 않은 상태면 다음 요소(글자)에 'checked' 클래스 적용, 이미 체크된 상태면 'unchecked' 클래스 적용 */
function taskCheck(e){
    if (e.checked) {
        e.nextElementSibling.className = "checked";
    } else {
        e.nextElementSibling.className = "unchecked";
    }
}