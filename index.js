function findType(param){
    return typeof param;
}

//console.log (findType('jgff'));
//console.log (findType(4));
//console.log (findType(null));

function forEach(arr,func){
    let outPut = [];
    for (let i=0; i<arr.length; i++){
        outPut.push(func(arr[i]));
    }
    return outPut;
}

//forEach([2,3,4],function(val){
//    console.log(val);
//});

function map(arr,func){
    return forEach(arr,func);
}

//let array2 = map ([2,3,4], function(el){return el+3});
//console.log(array2);

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

//let array2 = filter([1,2,3,4,5,6,7,8,9], function(el){
//    if (el<3)
//    return el;
//});
//console.log(array2);

/* let data = [
  {
    "_id": "5b5e3168c6bf40f2c1235cd6",
    "index": 0,
    "age": 39,
    "eyeColor": "green",
    "name": "Stein",
    "favoriteFruit": "apple"
  },

  {
    "_id": "5b5e3168e328c0d72e4f27d8",
    "index": 1,
    "age": 38,
    "eyeColor": "blue",
    "name": "Cortez",
    "favoriteFruit": "strawberry"
  },

  {
    "_id": "5b5e3168cc79132b631c666a",
    "index": 2,
    "age": 2,
    "eyeColor": "blue",
    "name": "Suzette",
    "favoriteFruit": "apple"
  },

  {
    "_id": "5b5e31682093adcc6cd0dde5",
    "index": 3,
    "age": 17,
    "eyeColor": "green",
    "name": "Weiss",
    "favoriteFruit": "banana"
  }

]; */

function getAdultAppleLovers(data){
    let adultAppleLovers = filter(data,function(el){
       if (el.age > 18 && el.favoriteFruit === 'apple'){
           return el.name;
       } 
    });
    return adultAppleLovers;
}

//console.log (getAdultAppleLovers(data));

function keys(obj){
    let outPut = [];
    for (let prop in obj){
        if (obj.hasOwnProperty(prop)){
            outPut.push(prop);    
        }
    }
    
    return outPut;
}

//console.log (keys({keyOne: 1, keyTwo: 2, keyThree: 3}));

function values(obj){
    let outPut = [];
    for (let prop in obj){
        if (obj.hasOwnProperty(prop)){
            outPut.push(obj[prop]);
        }
    }
    
    return outPut;
}

//console.log (values({keyOne: 1, keyTwo: 2, keyThree: 3}));

function showFormattedDate(date){
    let dateDay = date.getDate();
    let dateYear = date.getFullYear();
    let monthArray = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    let shortMonth = monthArray[date.getMonth()];
    return 'It is ' + dateDay + ' of ' + shortMonth + ', ' + dateYear;
}

//console.log(showFormattedDate(new Date('2018-08-27T01:10:00')));