// тип данных void - тип данных указывающий на отсутствие какого-либо значения.
// используется при определении функции явно указать на отсутствие возвращаемого значения

function myFuncion() : void {
  alert('Hello');
}

// тип void можно использовать для определения переменных, 
// но такой переменно можно присвоить только значение undefined или null
let someVoidVal: void = undefined;

let u: undefined = undefined; // переменная типа undefined 
let n: null = null; // переменная типа null

// по умолчанию значение null и undefined могут быть присвоены любому типу
// данных, при опции компилятора --strictNullChecks null и underfined
// могут быть использовны для инициализации типов
let testNumber: number = undefined;