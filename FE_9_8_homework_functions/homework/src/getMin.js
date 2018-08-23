function getMin(){
    var minResult = Infinity;
    for (var i=0;i<arguments.length;i++){
        if (arguments[i] < minResult){
            minResult = arguments[i];
        }
    }
    
    return minResult;
}