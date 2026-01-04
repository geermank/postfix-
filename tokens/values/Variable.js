/**
 * Token that represents a value stored in the symbol table, which can be remembered for feature use, updated,
 * and accessed during mathematical operations by unwrapping it (get its numeric form from the table)
 *
 * @param value the name of the variable. That is, the key used to stored its value in the symbolTable
 */
function Variable(value) {

    this.key = value;

    this.execute = function (tokenStack, _) {
        tokenStack.push(this);
    }

    this.unwrap = function (symbolTable) {
        let unwrapped = symbolTable.search(this.key);
        if (!unwrapped) {
            throw Error("Variable value not yet assigned");
        }
        return unwrapped;
    }
}

module.exports = Variable;
