const BinaryMathOperation = require("../utils/BinaryMathOperation");
const Integer = require("../values/Integer");

/**
 * Divides the last two values of the stack.
 * Order is important: the first typed token will be divided by the second typed token
 * This means that: "4 2 /" results in "4 / 2 = 2", and "2 4 /" results in "2 / 4 = 0"
 */
function Division() {

    let binaryMathOperation = new BinaryMathOperation()
    const subtractionOperation = (first, second) => {
        if (second === 0) {
            throw Error("Can't divide by zero");
        }
        return first / second;
    }

    this.execute = function (tokenStack, symbolTable) {
        let result = binaryMathOperation.execute(tokenStack, symbolTable, subtractionOperation);
        tokenStack.push(new Integer(result));
    }
}

module.exports = Division;