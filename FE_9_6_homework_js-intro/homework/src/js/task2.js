var lengthA = parseInt(prompt('Input length of the first side','a length'));
var lengthB = parseInt(prompt('Input length of the second side','b length'));
var angle = parseInt(prompt('Input angle','angle'));

var validData = lengthA !== null && lengthA >= 0;

if (validData) {
    validData = lengthB !== null && lengthB >= 0;
}

if (validData) {
    validData = angle !== null && angle >= 0;
}

if (!validData) {
    console.log('Invalid data');
}

if (validData){
    var lengthC = Math.sqrt(Math.pow(lengthA,2)+Math.pow(lengthB,2)-2*lengthA*lengthB*Math.cos(angle*Math.PI/180));
    var perimeter = lengthA + lengthB + lengthC; 
    var semiPerimeter = perimeter / 2;
    var square = Math.sqrt(semiPerimeter*(semiPerimeter-lengthA)*(semiPerimeter-lengthB)*(semiPerimeter-lengthC));
    
    lengthC = +(Math.round(lengthC + 'e+2') + 'e-2');
    square = +(Math.round(square + 'e+2') + 'e-2');
    perimeter = +(Math.round(perimeter + 'e+2') + 'e-2');
    
    console.log('c length: ' + lengthC + '\n' + 
                'Triangle square: ' + square + '\n' +
                'riangle perimeter: ' + perimeter);
}