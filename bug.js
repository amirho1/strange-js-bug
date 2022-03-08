var i = 2;

Number.prototype.valueOf = () => {
  return i++;
};

var a = new Number(42);

if (a == 2 && a == 3) {
  console.log("it will happen");
} else console.log("it wont happen");
