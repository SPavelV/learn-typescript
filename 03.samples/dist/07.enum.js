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
//# sourceMappingURL=07.enum.js.map