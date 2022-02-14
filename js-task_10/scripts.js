let doc = document;
let addMessage = doc.querySelector('.message'),
    addButton = doc.querySelector('.add'),
    editButton = doc.querySelector('.edit'),
    removeButton = doc.querySelector('.remove'),
    task = doc.querySelector('.task');

let arrTask = [];
if(localStorage.getItem('task')){
    arrTask = JSON.parse(localStorage.getItem('task'));
    displayMessages();
};
//  ФУНКЦИЯ ВВОДА
let enter = function(){
    if(!addMessage.value) return alert('Поле ввода пустое! Введите задачу!');
    let newTask = {
        task: addMessage.value,
        checked: false,
        important: false
    };
    arrTask.push(newTask);
    displayMessages()
    localStorage.setItem('task',JSON.stringify(arrTask));
    addMessage.value = '';
}
// ВВОД ПО КЛИКУ НА +
addButton.addEventListener('click', function(){
        enter();
    });
// ФУНКЦИЯ ОЧИСТКИ
let clear = function(){
    let conf = confirm("Вы точно хотите очистить список задач?")
    if(arrTask.length <= 0) return alert("Извините, но список уже пуст!"); 
    if(conf == true){
    arrTask = arrTask.splice();
    alert("Список очищен!")
    localStorage.setItem('task',JSON.stringify(arrTask));
    displayMessages();
    };
    return 
};
// РЕДАКТИРОВАНИЕ ЗАДАЧ!
task.addEventListener('click', function(event){
    doc.querySelectorAll('.task li .edit').forEach((item, index) => {
        if (item === event.target) {
            arrTask[index].task = prompt("Введите редакцию", arrTask[index].task);
            displayMessages();
            localStorage.setItem('task',JSON.stringify(arrTask));
        };
    });
});

// ОЧИСТКА ВСЕГО СПИСКА ЗАДАЧ ПО КЛИКУ НА КОРЗИНУ!
    removeButton.addEventListener('click', function(){
        clear();
    });

// УДАЛЕНИЕ ЗАДАЧ ПО ОДНОЙ!
    task.addEventListener('click', function(event){
        doc.querySelectorAll('.task li .remove').forEach((item, index) => {
            if (item === event.target) {
                arrTask.splice(index, 1);
                displayMessages();
                localStorage.setItem('task',JSON.stringify(arrTask));
            };
        });
    });

// ВЫВОД ЗАДАЧИ!
function displayMessages() {
    let displayMessage = '';
    if(arrTask.length === 0) task.innerHTML = '';
    arrTask.forEach(function(item, index){
        displayMessage +=`<li>
        <input type ='checkbox' id='item_${index}' ${item.checked ? 'checked' : ''}>
        <label for = 'item_${index}' class ="${item.important ? 'important' : ''}">${item.task}</label>
        <button class="edit bst" style="display: block;"></button>
        <button class="remove bst"></button>
        </li>`;
        task.innerHTML = displayMessage;
    });
};

task.addEventListener('change', function(event){
    let inputId = event.target.getAttribute('id');
    let forLabel = task.querySelector('[for='+ inputId +']');
    let valueLabel = forLabel.innerHTML;
    arrTask.forEach(function(item){
        if(item.task === valueLabel) {
            item.checked =!item.checked;
            localStorage.setItem('task', JSON.stringify(arrTask));
        }
    });
})
// ВАЖНЫЕ ЗАДАЧИ, ПРАВАЯ КНОПКА
task.addEventListener('contextmenu', function(event){
    event.preventDefault(); /// отменяем стандартное поведение браузера для .task (ul, li)
    arrTask.forEach(function(item){
        if(item.task === event.target.innerHTML){ 
            item.important = !item.important;
            displayMessages();
            localStorage.setItem('task', JSON.stringify(arrTask));
        }
    });
});
//УПРАВЛЕНИЕ ЧЕРЕЗ КЛАВИАТУРУ. ENTER
doc.addEventListener('keyup', function(event){
    if(event.code === 'Enter') {
        enter();
    }
});
// УДАЛЕНИЕ СПИСКА ЧЕРЕЗ КЛАВИАТУРУ. DELETE
doc.addEventListener('keyup', function(event){
    if(event.code === 'Delete'|| event.code === 'Insert') {
        clear();
    }
});

