//var rootNode = document.getElementById("root");
function checkedItem() {
    
}

function addNewAction() {
    var actionsListItems = document.getElementsByClassName('action-item');
    if(actionsListItems.length == null || actionsListItems.length < 10) {
        var actionItem = document.createElement('div');
        actionItem.setAttribute('class','action-item');
        actionItem.setAttribute('id','action-item');
        actionItem.style.display = 'flex';
        
        var actionItemCheckbox = document.createElement('i');
        actionItemCheckbox.setAttribute('class','material-icons');
        actionItemCheckbox.innerText = 'check_box_outline_blank';
        
        actionItem.appendChild(actionItemCheckbox);
        
        var actionItemText = document.createElement('p');
        actionItemText.innerText = 'input text';
       
        actionItem.appendChild(actionItemText);
        
        var actionItemDelete = document.createElement('i');
        actionItemDelete.setAttribute('class','material-icons');
        actionItemDelete.innerText = 'delete';
       
        actionItem.appendChild(actionItemDelete);
        
        var actionsList = document.getElementById('actions-list');
        
        actionsList.appendChild(actionItem);
    }
    else {
        var newAction = document.getElementById('new-action');
        var newActionInput = document.getElementById('new-action-input');
        var newActionBtn = document.getElementById('new-action-btn');
        
        var maximumItemPerList = document.createElement('h2');
        maximumItemPerList.innerText = 'Maximum item per list are created';
        maximumItemPerList.style.display = 'block';
        maximumItemPerList.style.marginLeft = 'auto';
        maximumItemPerList.style.marginRight = 'auto';
        maximumItemPerList.style.color = 'red';
        
        newAction.replaceChild(maximumItemPerList,newActionInput);
        newAction.removeChild(newActionBtn);
    }
}

//rootNode.appendChild(/* Append your list item node*/);