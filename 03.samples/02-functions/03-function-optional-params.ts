// В TypeScript все параметры функции являются обязательными.
// Но если после имени параметра указать символ ? параметр 
// становиться опциональным, и если при вызове не передавать 
// значение параметра будет undefined
// Опциональные параметра могу быть только последними параметрами
// в списке параметров метода.


// optional parameters
function getFullName(firstName: string, lastName?: string): string {
  if(lastName) {
    return firstName + " " + lastName;
  }
  else {
    return firstName;
  }
}

let fullName: string = getFullName("David", "Lee");
let fullName2: string = getFullName("David");

console.log(fullName);
console.log(fullName2);

// Параметры со значениями по умолчанию - параметры метода, для которых в 
// объявлении функции присвоено значение которое будет использоваться если 
// функция будет вызвана без указания значения для данного параметра
// или если в качестве значения будет передано undefined

// default-initialize parates
function getDisplayName(firstName: string, lastName: string = "Deer") {
  return "Display Name: " + firstName + " " + lastName;
}

let fullName3: string = getDisplayName("Jonh", "Deer");
let fullName4: string = getDisplayName("Jonh");
let fullName5: string = getDisplayName("Jonh", undefined); // идентичен предыдущему вызову

console.log(fullName3);
console.log(fullName4);
console.log(fullName5);