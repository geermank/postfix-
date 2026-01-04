const Tokeniser = require("./tokens/Tokeniser");
const TokenStack = require("./tokens/TokenStack");
const SymbolTable = require("./tokens/SymbolTable");
const Sanitizer = require("./tokens/utils/Sanitizer");
const readline = require("readline");

const consoleReader = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function main() {
    let inputSanitizer = new Sanitizer();
    let symbolTable = new SymbolTable();
    let tokenStack = new TokenStack();
    let tokeniser= new Tokeniser();

    tokeniser.load()

    processLine(symbolTable, tokenStack, tokeniser, inputSanitizer);
}

function processLine(symbolTable, tokenStack, tokeniser, inputSanitizer) {
    consoleReader.question(">>", (input) => {
        if (input === "exit") {
            // break point to the input cycle that allows to stop the program
            consoleReader.close();
            return;
        }
        try {
            // convert the input into an array of string tokens, validating each of them individually.
            // sanitizer does not validate logical failures, but grammar errors instead
            let stringTokens = inputSanitizer.sanitize(input)

            // tokenize each character of the input individually
            // this can result in:
            // - running an arithmetic operation (addition, subtraction, division, multiplication)
            // - pushing an integer or variable to the stack of tokens (this can also happen after an arithmetic op)
            // - saving a new value to the symbol table (assignment)
            for (const t of stringTokens) {
                tokeniser.tokenize(t, tokenStack, symbolTable);
            }
            // if an arithmetic operation was successful, we should have an "unwrapable" type in the stack
            // which can be either a variable or an integer, which are the result of any operation except assignment
            // since this one only saves a value in the symbol table
            let result = tokenStack.pop()
            if (result) {
                console.log("Result: " + result.unwrap(symbolTable));
            }
        } catch (e) {
            // show error and continue requesting data
            console.log("Something went wrong! Check your input");
            console.error(e.toString());
        }
        // recursive call to request a new input from the user
        processLine(symbolTable, tokenStack, tokeniser, inputSanitizer);
    });
}

main();