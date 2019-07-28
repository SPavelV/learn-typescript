function getFullName(firstName, lastName) {
    if (lastName) {
        return firstName + " " + lastName;
    }
    else {
        return firstName;
    }
}
var fullName = getFullName("David", "Lee");
var fullName2 = getFullName("David");
console.log(fullName);
console.log(fullName2);
function getDisplayName(firstName, lastName) {
    if (lastName === void 0) { lastName = "Deer"; }
    return "Display Name: " + firstName + " " + lastName;
}
var fullName3 = getDisplayName("Jonh", "Deer");
var fullName4 = getDisplayName("Jonh");
var fullName5 = getDisplayName("Jonh", undefined);
console.log(fullName3);
console.log(fullName4);
console.log(fullName5);
//# sourceMappingURL=03-function-optional-params.js.map