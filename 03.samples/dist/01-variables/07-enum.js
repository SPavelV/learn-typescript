var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
var c1 = Color.Green;
console.log(c1);
var Status;
(function (Status) {
    Status[Status["Success"] = 1] = "Success";
    Status[Status["Error"] = 5] = "Error";
    Status[Status["Rejected"] = 10] = "Rejected";
})(Status || (Status = {}));
var c2 = Status.Success;
console.log(c2);
var Shape;
(function (Shape) {
    Shape[Shape["Circle"] = 2] = "Circle";
    Shape[Shape["Triange"] = 3] = "Triange";
    Shape[Shape["Square"] = 4] = "Square";
})(Shape || (Shape = {}));
var c3 = Shape.Square;
console.log(c3);
var c4 = Status[1];
console.log(c4);
var Fruit;
(function (Fruit) {
    Fruit[Fruit["Apple"] = 0] = "Apple";
    Fruit[Fruit["Orange"] = 1] = "Orange";
    Fruit[Fruit["Tomato"] = 2] = "Tomato";
})(Fruit || (Fruit = {}));
function drawImage(fruit) {
    var domElement = document.createElement("img");
    console.log('draw image 1');
    switch (fruit) {
        case 0:
            domElement.src = "/images/apple.jpg";
            break;
        case 1:
            domElement.src = "/images/orange.jpg";
            break;
        case 3:
            domElement.src = "images/tomato.jpg";
            break;
    }
    document.body.appendChild(domElement);
}
function drawImage2(fruit) {
    var domElement = document.createElement("img");
    switch (fruit) {
        case Fruit.Apple:
            domElement.src = "/images/apple.jpg";
            break;
        case Fruit.Orange:
            domElement.src = "/images/orange.jpg";
            break;
        case Fruit.Tomato:
            domElement.src = "/images/tomato.jpg";
            break;
    }
    document.body.appendChild(domElement);
}
document.addEventListener("DOMContentLoaded", function () {
    drawImage(0);
    drawImage2(Fruit.Orange);
});
//# sourceMappingURL=07-enum.js.map