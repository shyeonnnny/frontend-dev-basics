/*
    Arrow Function
*/

const power = function(x) {
    return x * x;
}

let numbers = [1, 2, 3, 4, 5];
numbers.forEach(function(n){ // 배열일때씀 forEach?
    process.stdout.write(`${n}:${power(n)}  `) // process~~는 console.log 대신 쓰는것
});                                            // 디버그 콘솔에서는 안나오고 터미널에서 실행해야 출력됨


console.log("\n-------------------------------\n");
numbers.forEach(function(n){
    // let result = (function(x){
    //     return x * x;
    // })(n);

    // let result = (x => {
    //     return x * x;
    // })(n);

    let result = (x => x * x)(n);

    process.stdout.write(`${n}:${power(n)}  `);
});

// ex02
console.log("\n-------------------------------\n");
numbers.forEach(n => process.stdout.write(`${n }: ${(x => x * x)(n)}\t`));

// ex3 - 여러 행 함수
console.log("\n-----\n");
[5, 3, 15, 1045, 43, 92].forEach(e => {
    if(e % 5 == 0){
        process.stdout.write(`${e}\t`);
    }
});

// ex04
console.log("\n-------\n");
const dooly = {
    name: '둘리',
    friends: ['또치', '마이콜', '도우너', '길동'],
    printFriends: function(){
        // this.friends.forEach(function(f){ // this : 둘리
        //     console.log(`${this.name }의 친구 ${f}`);
        // }.bind(this)); // bind를 안하면 undefined의 친구라고나옴 

        this.friends.forEach(f => console.log(`${this.name }의 친구 ${f}`));
    }
}

dooly.printFriends();