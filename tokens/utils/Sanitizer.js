/**
 * Utility class that converts an input into an array of token strings, verifying the validity
 * of each of them individually.
 *
 * This class searches for spelling/grammar mistakes, not for logical ones. This means that if the
 * input is logically wrong, but its grammar is correct, sanitize will not fail and will return an array
 * of token strings anyway.
 */
function Sanitizer() {

    let validTokensRegex = /^[0-9a-z+\-*/=]$/;

    this.sanitize = function(input) {
        if (!input || input.trim() === "") {
            // ignore empty lines
            console.warn("Empty input. Ignoring.");
            return [];
        }
        let tokens = input
            .trim()
            // this program is not case-sensitive, meaning a and A represent the same variable
            .toLowerCase()
            // tokens must be separated by whitespaces
            .split(/\s+/);

        for (const t of tokens) {
            // for now, we only accept tokens of length 1
            if (t.length !== 1 || !t.match(validTokensRegex)) {
                throw new Error("Invalid token: " + t);
            }
        }

        return tokens;
    }
}

module.exports = Sanitizer;