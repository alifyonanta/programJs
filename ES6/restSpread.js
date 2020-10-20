//REST

function containsAll(arr, ...nums) {
    for (let num of nums) {
        if (arr.indexOf(num) === -1) {
            return false;
        }
    }
    return true;
}

let x = [2, 4, 6, 7];
console.log(containsAll(x, 2, 4, 7));
console.log(containsAll(x, 6, 4, 20));

function magic(...nums) {
  let sum = 0;
  nums.filter(n => n % 2 == 0).map(el => sum+= el);
  return sum;
}
console.log(magic(1, 2, 3, 4, 5, 6));
//end

//SPREAD
function myFunction(w, x, y, z) {
    console.log(w + x + y + z);
}
var args = [1, 2, 3];
myFunction.apply(null, args.concat(100));

const myFunction = (w, x, y, z) => {
    console.log(w + x + y + z);
};
let args = [1, 2, 3];
myFunction(...args, 4);
