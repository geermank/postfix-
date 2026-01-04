const BinaryMathOperation = require("../utils/BinaryMathOperation");
const Integer = require("../values/Integer");

function Addition() {

    let binaryMathOperation = new BinaryMathOperation()
    const additionOperation = (x, y) => {
        return x + y;
    }

    this.execute = function(tokenStack, symbolTable) {
        let result = binaryMathOperation.execute(tokenStack, symbolTable, additionOperation);
        tokenStack.push(new Integer(result));
    }
}

module.exports = Addition;