let todoItems = [];
let newObjId = 0;

let todoList = document.getElementById('todo-list');

function getItemObj(index) {
    for(let i=0; i<todoItems.length; i++) {
        if(todoItems[i].id === index) {
            return todoItems[i];
        }
    }
}

function getItemObjArIndex(index) {
    for(let i=0; i<todoItems.length; i++) {
        if(todoItems[i].id === index) {
            return i;
        }
    }  
}

function getDivByObjId(id){
    for (let i=0; i<todoList.childElementCount; i++){
        let div = todoList.childNodes[i];
        if (div.tagName === 'DIV'){
            let divId = parseInt(div.getAttribute('idArray'));
            if (divId === id){
                return div;   
            }
        }
    }
}

function saveToLocalStorage() {
    localStorage.setItem('todoList',JSON.stringify(todoItems));
}

function loadFromLocalStorage() {
    if(localStorage.getItem('todoList') !== null){
        todoItems = JSON.parse(localStorage.getItem('todoList'));
        for(let i=0; i<todoItems.length; i++) {
            addItemUI(todoItems[i]);
        }
        for (let j=0; j<todoItems.length; j++){
            if (todoItems[j].isDone){
                let div = getDivByObjId(todoItems[j].id);
                moveItem(div, todoList.lastChild);
            }
        }
    }
    const nullLength = 0;
    if(todoItems === undefined || todoItems.length === nullLength) {
        document.getElementById('empty-todo-msg').style.display = 'block';
    } else {
        document.getElementById('empty-todo-msg').style.display = 'none';
    }
}

function pageChange(hashAt) {
    location.hash = hashAt;
}

const mainPage = document.getElementById('main-page');
const addItemPage = document.getElementById('add-item-page');
const modifyItemPage = document.getElementById('modify-item');

addItemPage.setAttribute('hash','#/add)');
modifyItemPage.setAttribute('hash','#/modify');

window.addEventListener('hashchange',function(e) {
    if(e.newURL.endsWith('#/add')) {
        mainPage.style.display = 'none';
        modifyItemPage.style.display = 'none';
        addItemPage.style.display = 'block';
        return;
    }
     if(e.newURL.endsWith('#/modify')) {
        mainPage.style.display = 'none';
        addItemPage.style.display = 'none';
        modifyItemPage.style.display = 'block';
        return;
    }
    mainPage.style.display = 'block';
    addItemPage.style.display = 'none';
    modifyItemPage.style.display = 'none';
});

let addTodoInput = document.getElementById('add-todo-input');
let modifyTodoInput = document.getElementById('modify-todo-input');

emptyInput(addTodoInput);
addTodoInput.setAttribute('onkeyup','emptyInput(this)');
emptyInput(modifyTodoInput);
modifyTodoInput.setAttribute('onkeyup','emptyInput(this)');

let modifyingItem = null;

function checkedItem(aCheckbox) {
    aCheckbox.setAttribute('src','assets/img/done-s.png');
    aCheckbox.parentNode.style.background = 'grey';
    
    let index = aCheckbox.parentNode.getAttribute('idArray');
    index = parseInt(index);
    getItemObj(index).isDone = true;
    
    moveItem(aCheckbox.parentNode,todoList.lastChild);
    
    saveToLocalStorage();
}

function moveItem(aItem,lastItem) {
    lastItem.parentNode.insertBefore(aItem,lastItem.nextSibling);
}

function deleteItem(aItem) {
    let index = aItem.parentNode.getAttribute('idArray');
    index = parseInt(index);
    
    todoItems.splice(getItemObjArIndex(index),1);
    
    todoList.removeChild(aItem.parentNode);
    
    saveToLocalStorage();
}

function emptyInput(aInput) {
    let saveAddBtn = document.getElementById('add-save-changes-btn');
    let saveModifyBtn = document.getElementById('modify-save-changes-btn');
    if(aInput.value === '') {
        saveAddBtn.style.opacity = '0.5';
        saveModifyBtn.style.opacity = '0.5';
        saveAddBtn.onclick = null;
        saveModifyBtn.onclick = null;
    } else {
        saveAddBtn.style.opacity = '1';
        saveModifyBtn.style.opacity = '1';
        saveAddBtn.setAttribute('onclick','addNewtodo()');
        saveModifyBtn.setAttribute('onClick','modifyItemSave()');
    }
}

function addNewtodo() {
    document.getElementById('empty-todo-msg').style.display = 'none';
    
    const itemObj = {
        isDone: false,
        id: newObjId,
        text: addTodoInput.value
    };
    
    newObjId++;
    
    addItemUI(itemObj);

    addTodoInput.value = '';
    todoItems.push(itemObj);
    pageChange('');
    
    saveToLocalStorage();
}

function addItemUI(obj) {
    let html = '';
    if (obj.isDone){
        html = '<img src="assets/img/done-s.png" onClick="checkedItem(this)" />'
    } else {
        html = '<img src="assets/img/todo-s.png" onClick="checkedItem(this)" />';
    }
    
    html = html + `
        <p id="itemText" idArray="${obj.id}" onClick="modifyItem(this)">${obj.text}</p>
        <img src="assets/img/remove-s.jpg" onClick="deleteItem(this)" />
    `;
    
    let addItem = document.createElement('div');
    addItem.setAttribute('class','todo-item');
    addItem.setAttribute('id','todo-item');
    addItem.setAttribute('idArray', obj.id);
    if (obj.isDone){
        addItem.style.background = 'gray';
    }
    addItem.innerHTML = html;
    
    todoList.appendChild(addItem);
}

function modifyItem(aItem) {
    modifyingItem = aItem;
    modifyTodoInput.value = modifyingItem.innerText;
    pageChange('#/modify');
}

function modifyItemSave() {
    if(modifyingItem !== undefined) {
        modifyingItem.innerText = modifyTodoInput.value;
        
        let index = modifyingItem.getAttribute('idArray');
        index = parseInt(index);
        
        getItemObj(index).text = modifyingItem.innerText;
        
        pageChange('');
        
        saveToLocalStorage();
    }
}

loadFromLocalStorage();