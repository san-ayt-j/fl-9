//var rootNode = document.getElementById("root");
disableAddBtn(document.getElementById('action-input'));
document.getElementById('action-input').setAttribute('onkeyup','disableAddBtn(this)');

function checkedItem(aCheckbox) {
    aCheckbox.innerText = 'check_box';
}

function deleteItem(aItem) {
    aItem.style.display = 'none';
}

function disableAddBtn(aInput) {
    let addNewActionBtn = document.getElementById('new-action-icon');
    if (aInput.value === '') {
        addNewActionBtn.style.color = '#D3D3D3';
        addNewActionBtn.onclick = null;
    } else {
        addNewActionBtn.style.color = '#000';
        addNewActionBtn.setAttribute('onClick', 'addNewAction()');
    }
}

function allowDropItem(ev) {
    console.log('allowDrop');
    ev.preventDefault();
}

function dragItem(ev) {
    console.log('drag');
    ev.dataTransfer.setData('text', ev.target.id);
}

function dropItem(ev) {
    console.log('drop');
    ev.preventDefault();
    var data = ev.dataTransfer.getData('text');
    ev.target.appendChild(document.getElementById(data));
}

function addNewAction() {
    var actionsListItems = document.getElementsByClassName('action-item');
    const actionListMaxLength = 10;
    if(actionsListItems.length === null || actionsListItems.length < actionListMaxLength) {
        var actionItem = document.createElement('div');
        actionItem.setAttribute('class','action-item');
        actionItem.setAttribute('id','action-item');
        actionItem.style.display = 'flex';
        actionItem.style.alignItems = 'center';
        
        actionItem.setAttribute('draggable','true');
        actionItem.setAttribute('ondragstart','dragItem(event)');
        actionItem.setAttribute('ondragover','allowDropItem(event)');
        actionItem.setAttribute('ondrop','dropItem(event)');
        
        var actionItemCheckbox = document.createElement('i');
        actionItemCheckbox.setAttribute('class','material-icons');
        actionItemCheckbox.innerText = 'check_box_outline_blank';
        actionItemCheckbox.style.flex = '5%';
        actionItemCheckbox.style.cursor = 'pointer';
        actionItemCheckbox.setAttribute('onClick','checkedItem(this)');
        
        actionItem.appendChild(actionItemCheckbox);
        
        var actionItemText = document.createElement('p');
        var inputText = document.getElementById('action-input').value;
        var itemText = document.createTextNode(inputText);
        actionItemText.appendChild(itemText);
        actionItem.appendChild(actionItemText);
        document.getElementById('action-input').value = '';
        disableAddBtn(document.getElementById('action-input'));
       
        actionItemText.style.flex = '90%';
        actionItemText.style.margin = '0';
        
        var actionItemDelete = document.createElement('i');
        actionItemDelete.setAttribute('class','material-icons');
        actionItemDelete.innerText = 'delete';
        actionItemDelete.style.cursor = 'pointer';
        actionItemDelete.setAttribute('onClick','deleteItem(parentNode)');
       
        actionItem.appendChild(actionItemDelete);
        actionItemDelete.style.flex = '5%';
        
        var actionsList = document.getElementById('actions-list');
        
        actionsList.appendChild(actionItem);
    } else {
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