/**
 * A class that stores key-value pairs.
 *
 * Assumes that variable names can be only characters from a to z (lowercase only), resulting
 * in a maximum number of variables of 26. Also assumes users of this class respect
 * this constraint and does not perform extra validations
 *
 * Internally, it uses a hashtable to store them.
 */
function SymbolTable() {

    // since we're storing letters from A to Z, 26 is the max size of the symbols array
    let maxSize = 26

    let symbols = Array(maxSize);

    this.insert = function (k, v) {
        let hash = hashFunction(k);

        // get the list of values at hashed index
        let values = symbols[hash];
        if (!values) {
            symbols[hash] = [new Pair(k, v)];
            return;
        }

        let hit = false;
        for (const pair of values) {
            // check key in case of collisions
            if (pair.key === k) {
                pair.value = v;
                hit = true;
                break;
            }
        }
        if (!hit) {
            // value wasn't previously saved
            values.push(new Pair(k, v));
        }
    }

    this.search = function (k) {
        let hash = hashFunction(k);
        let values = symbols[hash];
        if (!values) {
            return null;
        }

        let value = null;
        for (const pair of values) {
            if (pair.key === k) {
                value = pair.value;
                break;
            }
        }
        return value;
    }

    this.delete = function (k) {
        let hash = hashFunction(k);
        let values = symbols[hash];
        if (!values) {
            return false;
        }

        let indexToRemove = values.findIndex(i => i.key === k);
        if (indexToRemove > -1) {
            values.splice(indexToRemove, 1);
            return true;
        }
        return false;
    }

    let hashFunction = function (key) {
        // https://stackoverflow.com/questions/70044220/custom-hashable-implementation-in-javascript
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash = (hash * 31 + key.charCodeAt(i)) % maxSize;
        }
        return hash;
    }
}

function Pair(k, v) {
    this.key = k;
    this.value = v;
}

module.exports = SymbolTable;