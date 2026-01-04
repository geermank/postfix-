function SymbolTable() {

    // since we're storing letters from A to Z, 26 is the max size of the symbols array
    let maxSize = 26

    let symbols = new Map();

    this.insert = function (k, v) {
        //let hash = hashingFunction(k);
        //let values = symbols[hash];
        symbols.set(k, v);
    }

    this.search = function (k) {
        return symbols.get(k);
    }

    this.delete = function (k) {
        symbols.delete(k);
    }

    let hashingFunction = function (key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash = (hash * 31 + key.charCodeAt(i)) % maxSize;
        }
        return hash;
    }
}

module.exports = SymbolTable;