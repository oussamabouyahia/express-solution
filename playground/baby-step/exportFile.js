const add =  (a,b) => a + b
const multiply = (a,b) => a * b
const substract = (a,b) => a - b

// this playground is made for you to understand how to pass function / classes / variables from a file to another
// so you have to uncomment the "module" and check the console log in the export file
//

// 1 - go to the require file and use the function "add"

// module.exports = add
//! comment this method after using it in the export file

// 2 - go to the require file and use the function "add","multiply","substract"

module.exports.add = add
module.exports.multiply = multiply
module.exports.substract = substract
//! comment this method after using it in the export file

// 3 - go to the require file and use the function "add","multiply","substract"
// module.exports = { add,multiply,substract}
//! comment this method after using it in the export file

// 4 - go through this documentation and test the many ways you can use to export function/classes/variables... and test
// https://jsdoc.app/howto-commonjs-modules.html





