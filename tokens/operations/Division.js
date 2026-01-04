const BinaryMathOperation = require("../utils/BinaryMathOperation");
const Integer = require("../values/Integer");

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