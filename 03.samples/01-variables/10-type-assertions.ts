// Type assertion - утверждение типов, это операция, которая напоминает приведение типов в других языках программирования.
// C помощью утверждения типов можно подсказать компилятору, конкретный тип с которым мы сейчас работаем.

let someData: any = "Hello world";
let stringLength1: number = (<string>someData).length; // утверждение, что значение  someData является string
let stringLength2: number = (someData as string).length; // утверждение, что значение someData является string