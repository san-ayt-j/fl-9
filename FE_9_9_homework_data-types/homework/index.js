function findType(param){
    return typeof param;
}

function forEach(arr,func){
    let outPut = [];
    for (let i=0; i<arr.length; i++){
        outPut.push(func(arr[i]));
    }
    return outPut;
}

function map(arr,func){
    return forEach(arr,func);
}

function filter(arr,func){
    let processed = forEach(arr,func);
    let outPut=[];
    for (let i=0; i<processed.length; i++){
        if (findType(processed[i]) !== 'undefined'){
            outPut.push(processed[i]);
        }
    }
    return outPut;
}

function getAdultAppleLovers(data){
    let adultAppleLovers = filter(data,function(el){
       if (el.age > 18 && el.favoriteFruit === 'apple'){
           return el.name;
       } 
    });
    return adultAppleLovers;
}

function keys(obj){
    let outPut = [];
    for (let prop in obj){
        if (obj.hasOwnProperty(prop)){
            outPut.push(prop);    
        }
    }
    return outPut;
}

function values(obj){
    let outPut = [];
    for (let prop in obj){
        if (obj.hasOwnProperty(prop)){
            outPut.push(obj[prop]);
        }
    }
    return outPut;
}

function showFormattedDate(date){
    let dateDay = date.getDate();
    let dateYear = date.getFullYear();
    let monthArray = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    let shortMonth = monthArray[date.getMonth()];
    return 'It is ' + dateDay + ' of ' + shortMonth + ', ' + dateYear;
}