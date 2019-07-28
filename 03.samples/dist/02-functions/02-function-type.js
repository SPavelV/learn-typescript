var myAdd;
var myProc;
function myAddDeclaration(x, y) {
    return x + y;
}
myAdd = myAddDeclaration;
console.log(myAdd(10, 20));
myProc = function () {
    console.log("Hello world");
};
myProc();
//# sourceMappingURL=02-function-type.js.map