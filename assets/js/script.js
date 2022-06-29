var passLength = 0;
var wantUpper = false;
var wantLower = false;
var wantNum= false;
var wantSym = false;
var passSlot = document.getElementById("passPlace");



// TABLES FOR POSSIBLE PASSWORD CHARACTERS
// passTable = {
    
// }
upperLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",],
lowerLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",],
numTable = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"],
symTable = ["!", "?", "@", "#", "$", "&", "%", "*", "=", "/"],

// FUNCTION TO GENERATE NUMBER TO RANDOMLY PICK FROM TABLE
function randomNumGen (arrayLength) {
    return Math.floor(Math.random() * arrayLength);
};


// FUNCTION TO GENERATE PASSWORD
function passGen() {

    // FUNCTION TO GENERATE NUMBER TO RANDOMLY PICK FROM TABLE
    function randomNumGen (arrayLength) {
        return Math.floor(Math.random() * arrayLength);
    };

    var passMade = false; // PASS NEEDS TO BE MADE EVERY TIME BUTTON IS PRESSED
    var encrypPass = ""; // EMPTY STRING FOR PASSWORD THAT IS GENERATED

    // LOOP TO MAKE SURE PASSWORD IS MADE BEFORE STOPPING
    while (!passMade) {
        passLength = prompt("How long would you like your password to be?\nMust be at least 8 characters and no longer than 128");
        if (passLength > 8 && passLength <= 128) {
            wantUpper = confirm("Do you want Uppercase Characters in your password?");
            wantLower = confirm("Do you want Lowercase Characters in your password?");
            wantNum = confirm("Do you want Numbers in your password?");
            wantSym = confirm("Do you want Special Symbols in your password?");
            // MAKE SURE THEY HAVE SELECTED A CHARACTER TYPE
            if (wantUpper || wantLower || wantNum || wantSym) {
                // LOOP TO CYCLE THROUGH TABLES UNTIL PASSWORD IS CORRECT LENGTH
                for (i = 0; i < passLength; i++) {
                    if (wantUpper && encrypPass.length < passLength) {
                        encrypPass += upperLetters[randomNumGen(upperLetters.length)];
                        }
                    if (wantLower && encrypPass.length < passLength) {
                        encrypPass += lowerLetters[randomNumGen(lowerLetters.length)];
                        }
                    if (wantNum && encrypPass.length < passLength) {
                        encrypPass += numTable[randomNumGen(numTable.length)];
                        }
                    if (wantSym && encrypPass.length < passLength) {
                        encrypPass += symTable[randomNumGen(symTable.length)];
                    }
                };
                passMade = true;
            } else {
                alert("You need to pick a character!");
            }
        } else if (passLength < 8 || passLength > 128) {
            passLength = prompt("Password must be between 8 and 128 characters");
        } else {
            passLength = prompt("Password must be a number");
        };
    };
    console.log(encrypPass);
    passSlot.innerHTML = encrypPass;
    return encrypPass;
};


