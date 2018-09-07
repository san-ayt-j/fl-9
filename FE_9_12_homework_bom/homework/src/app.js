const rootNode = document.getElementById('root');

const todoItems = [
    {isDone: false, id: 12345, description: 'Todo 1'}
];

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
    let todoList = document.getElementById('todo-list');
    moveItem(aCheckbox.parentNode,todoList.lastChild);
}

function moveItem(aItem,lastItem) {
    lastItem.parentNode.insertBefore(aItem,lastItem.nextSibling);
}

function deleteItem(aItem) {
    aItem.parentNode.removeChild(aItem);
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
    
    let todoItem = document.createElement('div');
    todoItem.setAttribute('class','todo-item');
    todoItem.setAttribute('id','todo-item');
    todoItem.style.display = 'flex';
    todoItem.style.alignItems = 'center';
    
    let todoItemCheckbox = document.createElement('img');
    todoItemCheckbox.setAttribute('src','assets/img/todo-s.png');
    todoItemCheckbox.setAttribute('onClick','checkedItem(this)');
    todoItem.appendChild(todoItemCheckbox);
    todoItemCheckbox.style.flex = '5%';
    
    let todoItemText = document.createElement('p');
    let inputText = document.getElementById('add-todo-input').value;
    let itemText = document.createTextNode(inputText);
    todoItemText.setAttribute('id','itemText');
    todoItemText.setAttribute('onclick','modifyItem(this)')
    todoItemText.appendChild(itemText);
    todoItem.appendChild(todoItemText);
    document.getElementById('add-todo-input').value = '';
    todoItemText.style.flex = '90%';
    todoItemText.style.margin = '0';
    
    let todoItemDelete = document.createElement('img');
    todoItemDelete.setAttribute('src','assets/img/remove-s.jpg');
    todoItemDelete.setAttribute('onClick','deleteItem(parentNode)');
    todoItem.appendChild(todoItemDelete);
    todoItemDelete.style.flex = '5%';
    
    let todosList = document.getElementById('todo-list');
    todosList.appendChild(todoItem);
    
    pageChange('');
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
        pageChange('');
    }
}

//rootNode.appendChild(/* Append your list item node*/);
