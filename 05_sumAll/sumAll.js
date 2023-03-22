const sumAll = function(a,b) {
    let final = 0
    if (a > 0 && b > 0 && typeof a === 'number' && typeof b === 'number' ) {
        if (a < b) {
            for(let i = a; i <= b; i++){
                final += i
            } 
        } else {
            for(let i = b; i <= a; i++){
              final += i
            }
        }
        return final
    } else {
        return 'ERROR'
    }
};

// Do not edit below this line
module.exports = sumAll;
