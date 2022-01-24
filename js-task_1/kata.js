function greet(name) {
  return "Hello, " + name + " how are you doing today?";
}
console.log (greet("Pavel"));

let l = 7,
    z = 8;
function areaOrPerimeter(l , z) {
    if (l != z) {
        return "Периметр прямоугольника- " + (l * 2 + z * 2);
    }
    else {
        return "Площадь квадрата- " + l * z;
    }
}
console.log(areaOrPerimeter(l, z));

  let normPrice = 10,
      discount = 10,
      hol = 500;

function dutyFree(normPrice, discount, hol){
  return Math.floor(hol/(normPrice * discount/100)) + (" бут.")
}
console.log(dutyFree(normPrice, discount, hol));
