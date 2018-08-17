let userName = prompt('Enter user name');

if (userName === null || userName === '') {
    alert('Canceled'); 
}

else if (userName.length < 4) {
    alert('I don\'t know any users having name length less than 4 symbols');
}

else if (userName !== 'User') {
    alert('I don’t know you');
}

else if (userName === 'User') {
    let pswd = prompt('Enter password');
    
    if (pswd === null || pswd === '') {
    alert('Canceled');
    }
    
    else if (pswd !== 'superUser') {
        alert('Wrong password');
    }
    
    else if (pswd === 'superUser') {
        let dayHour = new Date().getHours();
        
        if (dayHour < 20) {
            alert('Good day!');
        }
        
        else {
            alert('Good evening!');
        }
    }
}