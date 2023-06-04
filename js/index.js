// get the input

let todoInput = document.getElementById("todoInput");

// get the button to add

let addBtnList = document.querySelector(".addBtn");

// get the DIV element class of todoList

let todoList = document.querySelector(".todoList");

//Save and get data in Local Storage
const saveData = () => {

    localStorage.setItem('data', todoList.innerHTML);


}
const getData = () => {
    todoList.innerHTML = localStorage.getItem('data');

}



// create Click eventListener for Adding Todo

addBtnList.addEventListener('click', function(e) {



    if (checkInput(todoInput.value)) {
        clearInput(todoInput)


    } else {



        let div = document.createElement('div');
        div.classList.add("item");
        div.style.transition = " 0.4 ease-in-out";
        div.innerHTML = ` <p>${todoInput.value}</p>
        <div class="itemBtn">

        <i class="fa-solid fa-circle-check"></i>
            <i class="fa-solid fa-trash-can"></i>




        </div>
`
        todoList.appendChild(div);


        saveData();

        clearInput(todoInput);


    }



});

todoList.addEventListener('click', (e) => {


    if (e.target.classList.contains('fa-circle-check')) {

        e.target.parentElement.parentElement.classList.toggle('completed');

        saveData();
    }



});

todoList.addEventListener('click', (e) => {


    if (e.target.classList.contains('fa-trash-can')) {

        e.target.parentElement.parentElement.remove();

        saveData();

    }



});

getData();


// Clear input Field arrowFunction
const clearInput = (todoData) => {

    todoData.value = '';
    todoData.focus();

}


// check the input Field Value;

const checkInput = (todoValue) => {


    return todoValue === '' || todoValue === 0;

}