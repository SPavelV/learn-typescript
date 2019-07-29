// this - контекст функции. This - переменная, которая устанавливается при  запуске функции.
function test() {
  console.log(this);
}
test(); // global object

let someObj = {
  name: 'test',
  testMeth: test
};
someObj.testMeth(); // someObj

// let someInstance = new test(); // new instance


// установка контекста вызываемой функции
function test2(x: number, y: number) {
  console.log(x + y);
  console.log(this);
}

let someTestObj = {
  name: "test object"
};

test2.call(someTestObj, 10, 20); // установка контекста, вариант 1
test2.apply(someTestObj, [30, 40]); // установка контекста, ваирант 2
let newFunc = test2.bind(someTestObj, 50); // установка контекста, вариант 3
newFunc(60);

