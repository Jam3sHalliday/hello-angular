// enum Color {
//     Red = "red",
//     Green = "green",
//     Blue = "blue",
// }
// let red = Color.Red;
// let blue = Color.Blue;
// // TypeAssertion
// let a: string[];
// let b;
// // Cast
// (<string[]>b)
// (b as string[])
// // interface
// let drawPoint = (point: { x: number, y: number }) => {
//     console.log(`Draw a point at X: ${point.x}, y: ${point.y}`)
// }
// Class
// Access Modifiers: Public, Private, Protected
// Conhesion -> đưa tất cả những hàm có liên quan về chung 1 class
var Point = /** @class */ (function () {
    function Point(x, y) {
        this.x = x;
        this.y = y;
    }
    Point.prototype.drawPoint = function () {
        console.log("Draw a point at X: " + this.x + ", y: " + this.y);
    };
    Object.defineProperty(Point.prototype, "X", {
        get: function () { return this.x; },
        set: function (value) {
            if (value < 0) {
                throw Error("value < 0");
            }
            this.x = value;
        },
        enumerable: false,
        configurable: true
    });
    return Point;
}());
var point = new Point(1, 2);
point.X = 4;
console.log(point);
