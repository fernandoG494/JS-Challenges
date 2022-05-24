function checkPassword(password) {
    // expresions
    let oneLowerCaseLetter = /(?=.+[a-z])/;
    let oneUpperCaseLetter = /(?=.+[A-Z])/;
    let oneDigit = /(?=.+[0-9])/;
    let oneSpecialCaracter = /(?=.+[!@#$%^&*])/;
    let minimumEigthCharacters = /(?=.{8,})/;

    // verification
    let isValid = 
        oneLowerCaseLetter.test(password) &&
        oneUpperCaseLetter.test(password) &&
        oneDigit.test(password) &&
        oneSpecialCaracter.test(password) &&
        minimumEigthCharacters.test(password);

    return isValid ? "Your password is valid" : "Your password is invalid";
}

console.log(checkPassword("abc"));
console.log(checkPassword("9Ab!4567"));