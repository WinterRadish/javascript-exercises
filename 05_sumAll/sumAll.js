const sumAll = function(n1,n2) {
    if(!Number.isInteger(n1) || !Number.isInteger(n2) || n1<0 || n2<0){
        return("ERROR");
    }

    if(n1 > n2){//if n1 is larger than n2, swap them
        let temp = n1;
        n1 = n2, n2 = temp;
    }

    /* solution using iteration
    let sum = 0;
    for(let i = n1; i <= n2; i++){
        sum+=i;
    }
    return sum;
    */

    //solution using sum of integers sort of 
    //n*(a+l)/2, where n = # of integers, a = first term and l = last term
    //n = n2 - n1 + 1, n2 is the larger term, n1 is the smaller term, add 1 to account for 0 as an int
    return(((n2-n1+1)*(n1+n2))/2);
};

// Do not edit below this line
module.exports = sumAll;
