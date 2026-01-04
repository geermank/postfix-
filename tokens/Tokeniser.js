const Addition = require("./operations/Addition");
const Subtraction = require("./operations/Subtraction");
const Multiplication = require("./operations/Multiplication");
const Division = require("./operations/Division");
const Assignment = require("./operations/Assignment");
const Integer = require("./values/Integer");
const Variable = require("./values/Variable");

function Tokeniser() {

    const operationalTokens = new Map();

    let isNumber = function(c) {
        return typeof c === 'string' && c.length === 1 && c >= '0' && c <= '9';
    }

    let isLetter = function isLetter(str) {
        return str.length === 1 && str.match(/[a-z]/i);
    }

    this.load = function () {
        operationalTokens.set("+", new Addition());
        operationalTokens.set("-", new Subtraction());
        operationalTokens.set("*", new Multiplication());
        operationalTokens.set("/", new Division());
        operationalTokens.set("=", new Assignment());
    }

    this.tokenize = function (tokenChar, tokenStack, symbolTable) {
        getToken(tokenChar).execute(tokenStack, symbolTable);
    }

    let getToken = function (tokenChar) {
        if (operationalTokens.has(tokenChar)) {
            return operationalTokens.get(tokenChar);
        } else if (isNumber(tokenChar)) {
            return new Integer(tokenChar);
        } else if (isLetter(tokenChar)) {
            // do not distinguish between lower and uppercase letters
            return new Variable(tokenChar.toLocaleLowerCase());
        }
        throw new Error("Unknown token: " + tokenChar);
    }
}

module.exports = Tokeniser;
