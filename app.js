// swap program

var x = 10,
  y = 9,
  a;

a = x;
x = y;
y = a;

console.log("x=" + x, "y=" + y);

//------------------

// Using Array

var z = [1, 2, 5, 6];

//Add 1 element at end

z.push(2);
console.log(z);

// Delete one
z.pop();
console.log(z);

z.shift();
console.log(z);

//Add 1

z.unshift(2);
console.log(z);

for (var i = 0; i < z.length; i++) {
  console.log(z[i]);
}

//splice

var a = [1, 5, 3, 8];
s = a.splice(3, 0, 2, 9);
console.log("splice:", a);
