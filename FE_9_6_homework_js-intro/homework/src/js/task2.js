let lengthA = parseInt(prompt('Input length of the first side','a length'));
let lengthB = parseInt(prompt('Input length of the second side','b length'));
let angle = parseInt(prompt('Input angle','angle'));

let validData = lengthA !== null && lengthA >= 0;

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
    const degree = 180;
    let lengthC = Math.sqrt(Math.pow(lengthA,2) + Math.pow(lengthB,2) - 
        2 * lengthA * lengthB * Math.cos(angle * Math.PI / degree));
    let perimeter = lengthA + lengthB + lengthC; 
    let semiPerimeter = perimeter / 2;
    let square = Math.sqrt(semiPerimeter * (semiPerimeter - lengthA) * 
        (semiPerimeter - lengthB) * (semiPerimeter - lengthC));
    
    lengthC = +(Math.round(lengthC + 'e+2') + 'e-2');
    square = +(Math.round(square + 'e+2') + 'e-2');
    perimeter = +(Math.round(perimeter + 'e+2') + 'e-2');
    
    console.log('c length: ' + lengthC + '\n' + 
                'Triangle square: ' + square + '\n' +
                'riangle perimeter: ' + perimeter);
}