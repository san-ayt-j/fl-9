function getMin(){
    let minResult = Infinity;
    
    for (let i=0;i<arguments.length;i++){
        if (arguments[i] < minResult){
            minResult = arguments[i];
        }
    }
    
    return minResult;
}