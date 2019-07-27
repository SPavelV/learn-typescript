// при создании переменной можо указать тип данных 
// оперделяющий сигнатуру функции.
// параметры => возвращаемый тип

let myAdd: (x: number, y: number) => number; // принимает 2 параметра типа number возвращает значение number
let myProc: () => void; // переменной может быть присвоена функция, которая ничего не принимает и не возвращает.

function myAddDeclaration(x: number, y: number) : number {
  return x + y;
}

myAdd = myAddDeclaration;
console.log(myAdd(10, 20)); // вызов функции

myProc = function() {
  console.log("Hello world");
}

myProc(); // вызов функции