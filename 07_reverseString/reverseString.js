const reverseString = function(string) {
    let arr = string.split(" ");
    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i].split("").reverse().join("");
    }
    arr = arr.reverse();
    return string = arr.join(" ");
};

// Do not edit below this line
module.exports = reverseString;
