/**
 * Convenience wrapper around a JavaScript array that we use as the real Stack
 */
function TokenStack() {

    let tokens = [];

    this.push = function(token) {
        tokens.push(token);
    }

    this.pop = function() {
        return tokens.pop();
    }
}

module.exports = TokenStack;