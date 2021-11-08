/*
Array 메소드
*/

var colors = ['black', 'white', 'yellow'];
var fruits = ['apple', 'mango', 'banana'];

// concat
var a1 = fruits.concat(colors);
console.log(a1);

// pop, push : stack 지원
var color = colors.pop();
console.log(color);
console.log(colors);

colors.push('red');
console.log(colors);

// join
var str = fruits.join(":");
console.log(str);

// reverse
console.log(fruits);
fruits.reverse();
console.log(fruits);

// shift
var numbers = [1000, 2000, 3000, 4000, 5000];
var number = numbers.shift();
console.log(number, numbers);

// sort
var numbers2 = [1000, 3000, 5000, 2000, 4000];
numbers2.sort();
console.log(numbers2);

// slice
var numbers3 = [1000, 2000, 3000, 4000, 5000, 6000];
var number3 = numbers3.slice(1, 3);
console.log(number3);

// splice
// index부터 count개를 삭제 후 삭제된 요소를 반환
console.log(fruits);
fruits.splice(0, 2) // (index, count)
console.log(fruits, fruits);

var a1 = [0, 1, 2, 3, 4];
var a2 = a1.splice(1, 3, 10);
console.log(a2, a1);

var a1 = [0, 1, 2, 3, 4];
var a2 = a1.splice(1, 1, 10);
console.log(a2, a1);