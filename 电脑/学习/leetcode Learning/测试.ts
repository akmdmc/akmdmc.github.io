let arr1 = [1, 2, 3, 4, 5, 6];
arr1 = arr1.slice(0, 2);
console.log(arr1);

let arr2 = [1, 2, 3, 4, 5, 6];

function handle(arr) {
  arr = arr.slice(0, 1);
}

handle(arr2);
console.log(arr2);

const arr3 = []
console.log(arr3[0] === undefined);

