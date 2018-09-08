const rootNode = document.getElementById('root');

let todoItems = [];
let newObjId = 0;

function getItemObj(index) {
    for(var i=0; i<todoItems.length; i++) {
        if(todoItems[i].id === index) {
            return todoItems[i];
        }
    }
}

function getItemObjArIndex(index) {
    for(var i=0; i<todoItems.length; i++) {
        if(todoItems[i].id === index) {
            return i;
        }
    }  
}

function getDivByObjId(id){
    let todosList = document.getElementById('todo-list');
    for (var i=0; i<todosList.childElementCount; i++){
        var div = todosList.childNodes[i];
        if (div.tagName === 'DIV'){
            var divId = parseInt(div.getAttribute('idArray'));
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
        for(var i=0; i<todoItems.length; i++) {
            addItemUI(todoItems[i]);
        }
        
        let todosList = document.getElementById('todo-list');
        for (var i=0; i<todoItems.length; i++){
            if (todoItems[i].isDone){
                var div = getDivByObjId(todoItems[i].id);
                moveItem(div, todosList.lastChild);
            }
        }
        
    }
    
    console.log(localStorage.getItem('todoList'));
}

function pageChange(hashAt) {
    location.hash = hashAt;
}

document.getElementById('add-item-page').setAttribute('hash','#/add)');
document.getElementById('modify-item').setAttribute('hash','#/modify');

window.addEventListener('hashchange',function(e) {
    if(e.newURL.endsWith('#/add')) {
        document.getElementById('main-page').style.display = 'none';
        document.getElementById('modify-item').style.display = 'none';
        document.getElementById('add-item-page').style.display = 'block';
        return;
    }
     if(e.newURL.endsWith('#/modify')) {
        document.getElementById('main-page').style.display = 'none';
        document.getElementById('add-item-page').style.display = 'none';
        document.getElementById('modify-item').style.display = 'block';
        return;
    }
    document.getElementById('main-page').style.display = 'block';
    document.getElementById('add-item-page').style.display = 'none';
    document.getElementById('modify-item').style.display = 'none';
});

emptyInput(document.getElementById('add-todo-input'));
document.getElementById('add-todo-input').setAttribute('onkeyup','emptyInput(this)');
emptyInput(document.getElementById('modify-todo-input'));
document.getElementById('modify-todo-input').setAttribute('onkeyup','emptyInput(this)');

let modifyingItem = null;

function checkedItem(aCheckbox) {
    aCheckbox.setAttribute('src','assets/img/done-s.png');
    aCheckbox.parentNode.style.background = 'grey';
    
    let index = aCheckbox.parentNode.getAttribute('idArray');
    index = parseInt(index);
    getItemObj(index).isDone = true;
    
    let todoList = document.getElementById('todo-list');
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
    
    let todoList = document.getElementById('todo-list');
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
        text: document.getElementById('add-todo-input').value
    };
    
    newObjId++;
    
    addItemUI(itemObj);

    document.getElementById('add-todo-input').value = '';
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
    
    let todosList = document.getElementById('todo-list');
    var addItem = document.createElement('div');
    addItem.setAttribute('class','todo-item');
    addItem.setAttribute('id','todo-item');
    addItem.setAttribute('idArray', obj.id);
    if (obj.isDone){
        addItem.style.background = 'gray';
    }
    addItem.innerHTML = html;
    
    todosList.appendChild(addItem);
}

function modifyItem(aItem) {
    modifyingItem = aItem;
    let modifyTodoInput = document.getElementById('modify-todo-input');
    modifyTodoInput.value = modifyingItem.innerText;
    pageChange('#/modify');
}

function modifyItemSave() {
    if(modifyingItem !== undefined) {
        let modifyTodoInput = document.getElementById('modify-todo-input');
        modifyingItem.innerText = modifyTodoInput.value;
        
        let index = modifyingItem.getAttribute('idArray');
        index = parseInt(index);
        
        getItemObj(index).text = modifyingItem.innerText;
        
        pageChange('');
        
        saveToLocalStorage();
    }
}

loadFromLocalStorage();

//rootNode.appendChild(/* Append your list item node*/);
