function reverseNumber(number){
    let isNegative = number < 0;
    let numberString = Math.abs(number).toString();
    
    numberString = numberString.split('').reverse().join('');
    
    if (isNegative){
        return -parseInt(numberString);
    } else {
        return parseInt(numberString);
    }
}