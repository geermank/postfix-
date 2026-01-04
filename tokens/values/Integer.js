function Integer(value) {

    this.value = parseInt(value);

    this.execute = function (tokenStack, _) {
        tokenStack.push(this);
    }

    this.unwrap = function (_) {
        return this.value;
    }
}

module.exports = Integer;
