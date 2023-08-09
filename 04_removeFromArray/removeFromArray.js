const removeFromArray = function(array, ...value) {
    //make new array and only include elements that do not equal the values
    let newArray = [];
    for(const i of array){
        if(!value.includes(i)){//check if i isn't in the value array
            newArray.push(i);//add i to the new array
        }
    }
    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
