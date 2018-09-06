//const rootNode = document.getElementById('root');

const todoItems = [
    {isDone: false, id: 12345, description: 'Todo 1'}
];

var modifyingItem = null;

function checkedItem(aCheckbox) {
    aCheckbox.setAttribute('src','assets/img/done-s.png');
    aCheckbox.parentNode.style.background = 'grey';
}

function deleteItem(aItem) {
    aItem.parentNode.removeChild(aItem);
}

function addNewTask() {
    var taskItem = document.createElement('div');
    taskItem.setAttribute('class','task-item');
    taskItem.setAttribute('id','task-item');
    taskItem.style.display = 'flex';
    taskItem.style.alignItems = 'center';
    
    var taskItemCheckbox = document.createElement('img');
    taskItemCheckbox.setAttribute('src','assets/img/todo-s.png');
    taskItemCheckbox.setAttribute('onClick','checkedItem(this)');
    taskItem.appendChild(taskItemCheckbox);
    taskItemCheckbox.style.flex = '5%';
    
    let taskItemText = document.createElement('p');
    let inputText = document.getElementById('add-task-input').value;
    let itemText = document.createTextNode(inputText);
    taskItemText.setAttribute('id','itemText');
    taskItemText.setAttribute('onclick','modifyItem(this)')
    taskItemText.appendChild(itemText);
    taskItem.appendChild(taskItemText);
    document.getElementById('add-task-input').value = '';
    taskItemText.style.flex = '90%';
    taskItemText.style.margin = '0';
    
    let taskItemDelete = document.createElement('img');
    taskItemDelete.setAttribute('src','assets/img/remove-s.jpg');
    taskItemDelete.setAttribute('onClick','deleteItem(parentNode)');
    taskItem.appendChild(taskItemDelete);
    taskItemDelete.style.flex = '5%';
    
    let tasksList = document.getElementById('task-list');
    tasksList.appendChild(taskItem);
}

function modifyItem(aItem) {
    modifyingItem = aItem;
    var modifyTaskInput = document.getElementById('modify-task-input');
    modifyTaskInput.value = aItem.innerText;
}

function modifyItemSave() {
    if(modifyingItem != 0) {
        var modifyTaskInput = document.getElementById('modify-task-input');
        modifyingItem.innerText = modifyTaskInput.value;
    }
}

//rootNode.appendChild(/* Append your list item node*/);
