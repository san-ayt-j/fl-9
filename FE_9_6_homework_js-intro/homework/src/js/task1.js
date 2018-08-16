var price = parseInt(prompt('Input price','Price'));
var discount = parseInt(prompt('Input discount','Discount'));

var validData = price !== null && price >= 0;

if (validData) {
    validData = discount !== null && discount >= 0 && discount <= 100;
}

if (!validData) {
    console.log('Invalid data');
}

if (validData){
    var saved = price * discount / 100;
    var result = price - saved;
    
    saved = +(Math.round(saved + 'e+2') + 'e-2');
    result = +(Math.round(result + 'e+2') + 'e-2');
    
    console.log('Price without discount: ' + price + '\n' + 
                'Discount: ' + discount + '%\n' +
                'Price with discount: ' + result + '\n' + 
                'Saved: ' + saved);
}
