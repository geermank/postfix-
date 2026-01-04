const Variable = require("../values/Variable");
const Integer = require("../values/Integer");

/**
 * Operation Token that takes the last two value Tokens, verifies that one of them is a Variable
 * and the other an Integer, and stores it in the symbol table for future use.
 */
function Assignment() {

    this.execute = function (tokenStack, symbolTable) {
        let a = tokenStack.pop();
        let b = tokenStack.pop();

        if (!isVariable(a) && !isInteger(a) || !isVariable(b) && !isInteger(b)) {
            throw Error("Invalid token")
        }
        if (isVariable(a) && isVariable(b) || isInteger(a) && isInteger(b)) {
            throw Error("Invalid sequence of tokens")
        }


        let key;
        let value;
        if (a instanceof Variable) {
            key = a.key;
            value = b.value;
        } else {
            key = b.key;
            value = a.value;
        }

        symbolTable.insert(key, value);
    }

    let isVariable = function(x) {
        return x instanceof Variable;
    }

    let isInteger = function(x) {
        return x instanceof Integer;
    }


}

module.exports = Assignment;