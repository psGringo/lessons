testArr = ['one', 'two', 'three'];

// --- MY MAP

function myMap (array, func){
  return array.reduce((accumulator, value) => accumulator.concat(func(value)), []);
}

function isArraysEqual(a, b) {
    // if length is not equal
    if (a.length != b.length)
        return "False";
    else {
        // comapring each element of array
        for (let i = 0; i < a.length; i++)
            if (a[i] != b[i])
                return "False";
        return "True";
    }
}

const a = testArr.map(x => x + '_test');
const b = myMap(testArr, (x) => x + '_test');

console.log('isEqual', isArraysEqual(a, b));

// console.log('map', testArr.map(x => x + '_test'));
// console.log('myMap', myMap(testArr, (x) => x + '_test'));

// --- MY REDUCE

/* impossible because map gives an array */