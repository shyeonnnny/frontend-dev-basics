/*
변수와 데이터 타입
[기본타입(primitive type), 유사객체]
undefined
number
string
boolean

[객체1] - object type
1. new 생성자함수() 사용해서 생성
        Number() -> object type
        Boolean() -> object type
        String() -> object type
        Object() -> object type
        Array() -> object type

2. null
3. {} (객체 리터럴, JSON)
4. [] (배열 리터럴)

[객체2] - function type
1. new Function(...) 생성
2. var f = function(){} 함수 리터럴1을 사용해서 생성
3. function f(){} 함수 리터럴1을 사용해서 생성
*/

/*
자바스크립트의 객체를 구분하는 또 다른 방법
1. 내장(Built-In, Native, Engine) 객체
   - 자바스크립트 엔진안에 미리 내장되어 있는 객체
   - Number, boolean, Date, RegExp, ... : 생성자 함수
   - parseInt, setTimeout, ...          : 일반 함수
2. 호스트 객체
   - 자바스크립트 엔진이 임베디드된 환경(호스트)의 객체(자바스크립트 접근 가능)
   - 
3. 사용자 객체
*/
console.log("========== 원시 타입 (Primitive Type) =========="); // 데이터
var u = undefined; // var u; 와 동일, 선언과 정의의 구분이 없음
var i = 10;
var s = "Hello World";
var b = true;

console.log("u : " + typeof(u)); // namespace에 없거나 선언해놓고 값 지정안하면 typeof를 써도 undefined 나옴
console.log("i : " + typeof(i));
console.log("s : " + typeof(s));
console.log("b : " + typeof(b));


console.log("========== [객체1] (object type) =========="); // 데이터 + 메소드
var i2 = new Number(1); // 객체 생성
var b2 = new Boolean(false);
var s2 = new String("Hello world");
var o = new Object();
var a = new Array();

var n = null;
var o2 = {}; // 찐오브젝트
var a2 = []; // 찐오브젝트

console.log("i2 : " + typeof(i2));
console.log("b2 : " + typeof(b2));
console.log("s2 : " + typeof(s2));
console.log("o : " + typeof(o));
console.log("a : " + typeof(a));
console.log("o2 : " + typeof(o2));
console.log("a2 : " + typeof(a2));
console.log("n : " + typeof(n));

console.log("========== [객체2] (function type) ==========");
var f = new Function("a", "b", "return a + b");
var f2 = function(a,b){
    return a+b;
}

console.log("f : " + typeof(f));
console.log("f2 : " + typeof(f2));

// console.log(f(10,20));
// console.log(f2(10,20));

console.log("========== 원시타입과 원시타입을 Wrapper 객체는 별 구분없이 사용할 수 있다. ==========");
console.log(i + 12); //  i= 유사객체 ?
console.log(s + s2);

// 원시 타입에 메소드가 호출될 때,
// 임시 Wrapper 객체가 만들어져서 메소드 호출이 일어난 뒤 사라진다.
console.log("========== 원시타입도 메소드 호출이 가능하다. ==========");
console.log(b.valueOf());
console.log(b2.valueOf());