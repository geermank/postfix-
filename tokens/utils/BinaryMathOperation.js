/**
 * Utility class that pops the latest 2 tokens stored, tries to unwrap them to its numeric form,
 * and runs the given operation on them, returning its result.
 *
 * If unwrapping fails, it throws an exception, skipping this instruction due to incorrect input.
 * Popped values are lost.
 */
function BinaryMathOperation() {

    this.execute = function (tokenStack, symbolTable, operation) {
        try {
            // last is the latest typed token in the input
            let last = tokenStack.pop().unwrap(symbolTable);
            // first has to be popped secondly, cause we are using a stack
            let first = tokenStack.pop().unwrap(symbolTable);
            // parameter order is important here,
            // as some math operations may have different results
            return operation(first, last);
        } catch (e) {
            throw new Error("BinaryMathOperationInvalid :: Invalid tokens. Can't unwrap these types");
        }
    }
}

module.exports = BinaryMathOperation;
