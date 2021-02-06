// let obj = {}
// obj["ali"] = "r "
// obj["ali"] = obj["ali"] + "sss"

// console.log(obj);

var obj = {key1: "value1,fsff,    ", key2: "value2"};
// var pair = {key1: "value3"};
// obj = {...obj, ...pair};
console.log(obj["key1"]);
let string = 'ffffff..'
// string.splice(0, string.length - 1);
// console.log(string);
console.log(string.split("").splice(0, string.length - 1).join(''));
console.log(  obj["key1"].split("").splice(0, obj["key1"].length - 1).join(''));
obj["key1"] = obj["key1"] .trim()
obj["key1"] =  obj["key1"].split("").splice(0, obj["key1"].length - 1).join('')
console.log(obj);


// console.log(obj);