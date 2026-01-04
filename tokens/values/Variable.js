function Variable(value) {

    this.key = value;

    this.execute = function (tokenStack, _) {
        tokenStack.push(this);
    }

    this.unwrap = function (symbolTable) {
        let unwrapped = symbolTable.search(this.key);
        if (!unwrapped) {
            console.log("Variable value not yet assigned");
        }
        return unwrapped;
    }
}

module.exports = Variable;
