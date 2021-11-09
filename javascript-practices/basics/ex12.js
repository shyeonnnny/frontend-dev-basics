/*
Array 확장(prototype 기반의 확장) : List 메소드 추가
*/

Array.prototype.insert = function(index, value) {
    if(value instanceof Array){
        // for(var i=0; i<value.length; i++){
        //     this.splice(index++, 0, value[i]);
        // } ----> forEach로 변환하기

        // -----------------------------------------------------
        // this.forEach(function(){
        //     this.splice(index++, 0, 0);
        // }); ---> 이렇게 하면 오류남

        // var _this = this;
        // this.forEach(function(e){
        //     _this.splice(index++, 0, e);
        // }); // 오류 안남

        this.forEach(function(e){
            this.splice(index++, 0, e);
        }.bind(this));
    }else {
    this,splice(index, 0, value);
    }
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

var  f = function(param) {
    console.log(this + ":" + param);
}

//f();
var o = {name: "ktmdgus970807"};
f.call(o, "ktmdgus970807@gmail.com");
f.apply(o);
