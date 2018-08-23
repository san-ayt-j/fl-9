function isPrime(aVal){
    for (var i=2;i<aVal;i++){
        if(aVal % i === 0){
            return false;
        }
    }
    return aVal > 1;
}