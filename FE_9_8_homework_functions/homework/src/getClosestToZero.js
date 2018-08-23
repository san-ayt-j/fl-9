function getClosestToZero(){
    let closestToZero = Infinity;
    
    for (let i=0;i<arguments.length;i++){
         if (Math.abs(arguments[i]) < Math.abs(closestToZero)){
             closestToZero = arguments[i];
         }
    }
    
    return closestToZero;
}