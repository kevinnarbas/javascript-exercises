const removeFromArray = function(arr, ...args) {
    let finalArr = arr.filter(item => !args.includes(item))
    return finalArr
};

// Do not edit below this line
module.exports = removeFromArray;
