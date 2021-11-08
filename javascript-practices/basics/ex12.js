/*
Array 확장(prototype 기반의 확장) : List 메소드 추가
*/

Array.prototype.insert = function(index, value) {
    this,splice(index, 0, value);
}

Array.prototype.remove = function(index) {
    this.splice(index, 1);
}

// List로 사용하기
var a = [1, 2, 4];

console.log(a);

a.insert(2, 3);
console.log(a);

a.remove(3);
console.log(a);

a.insert(2, ['a', 'b', 'c']); // 기대 : [1, 2, 'a', 'b', 'c']
console.log(a);               // 결과 : [1, 2, ['a', 'b', 'c'], 3]