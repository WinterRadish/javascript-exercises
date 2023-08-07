const repeatString = function(string, num) {
    if(num < 0){
        return "ERROR";
    }
    let storedString = "";
    for(let i = 0; i < num; i++){
        storedString += string;
    }
    return storedString;
};

// Do not edit below this line
module.exports = repeatString;
