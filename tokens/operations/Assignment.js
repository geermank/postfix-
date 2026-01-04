const Variable = require("../values/Variable");
const Integer = require("../values/Integer");

function Assignment() {

    this.execute = function (tokenStack, symbolTable) {
        let a = tokenStack.pop();
        let b = tokenStack.pop();

        if (!isVariable(a) && !isInteger(a)) {
            throw Error("Invalid token")
        }
        if (!isVariable(b) && !isInteger(b)) {
            throw Error("Invalid token")
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