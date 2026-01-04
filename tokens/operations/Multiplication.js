const BinaryMathOperation = require("../utils/BinaryMathOperation");
const Integer = require("../values/Integer");

function Multiplication() {

    let binaryMathOperation = new BinaryMathOperation()
    const multiplicationOperation = (x, y) => x * y

    this.execute = function (tokenStack, symbolTable) {
        let result = binaryMathOperation.execute(tokenStack, symbolTable, multiplicationOperation);
        tokenStack.push(new Integer(result));
    }
}

module.exports = Multiplication;
