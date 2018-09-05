const rootNode = document.getElementById('root');

const todoItems = [
    {isDone: false, id: 12345, description: 'Todo 1'}
];

function addTaskSaveChanges() {
    var taskItem = document.createElement('div');
    taskItem.setAttribute('class','task-item');
    taskItem.setAttribute('id','task-item');
    taskItem.style.display = 'flex';
    taskItem.style.alignItems = 'center';
    
    var taskItemCheckbox = document.createElement('img');
    taskItemCheckbox.setAttribute('src','assets/img/todo-s.png');
    taskItem.appendChild(taskItemCheckbox);
    taskItemCheckbox.style.flex = '5%';
    
    let taskItemText = document.createElement('p');
    let inputText = document.getElementById('add-task-input').value;
    let itemText = document.createTextNode(inputText);
    taskItemText.appendChild(itemText);
    taskItem.appendChild(taskItemText);
    taskItemText.style.flex = '90%';
    taskItemText.style.margin = '0';
    
    let taskItemDelete = document.createElement('img');
    taskItemDelete.setAttribute('src','assets/img/remove-s.jpg');
    taskItem.appendChild(taskItemDelete);
    taskItemDelete.style.flex = '5%';
    
    let tasksList = document.getElementById('task-list');
    tasksList.appendChild(taskItem);
}

rootNode.appendChild(/* Append your list item node*/);
