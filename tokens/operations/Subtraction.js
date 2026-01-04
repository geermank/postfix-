const BinaryMathOperation = require("../utils/BinaryMathOperation");
const Integer = require("../values/Integer");

/**
 * Subtracts the last two values of the stack
 * Order is important: the second typed token will be subtracted to the first typed token
 * This means that: "4 2 -" results in "4 - 2 = 2", and "2 4 -" results in "2 - 4 = -2"
 */
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