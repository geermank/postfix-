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