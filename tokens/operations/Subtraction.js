const BinaryMathOperation = require("../utils/BinaryMathOperation");
const Integer = require("../values/Integer");

function Subtraction() {

    let binaryMathOperation = new BinaryMathOperation()
    const subtractionOperation = (first, second) => {
        return first - second;
    }

    this.execute = function (tokenStack, symbolTable) {
        let result = binaryMathOperation.execute(tokenStack, symbolTable, subtractionOperation);
        tokenStack.push(new Integer(result));
    }
}

module.exports = Subtraction;