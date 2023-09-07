//JSON

// 1. Object to JSON
//stringify(obj)
/*
    JSON.stringify(value[, replacer[, space]])
    JSON.stringify() 함수는 js의 값이나 객체를 JSON 문자열로 변환합니다.
    선택적으로 replacer를 함수로 전달할 경우 변환전 값을 변형할 수 있고
    배열로 전달할 경우 지정한 속성만 결과에 포함합니다.
    https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify

    value(필수) : JSON 문자열로 변환할 값 또는 객체 
    replacer(optional) : JSON 변경 규칙을 정의할 함수 또는 JSON에 포함될 프로퍼티(속성)을 가지는 배열
    space(optional) : 들여쓰기 공백 갯수 또는 문자열 

*/
let json = JSON.stringify(true);
console.log(json);

json = JSON.stringify(['apple','banana']);
console.log(json);

const rabbit = {
    name : 'tori',
    color : 'white',
    size : null,
    birthDate : new Date(),
    symbol : Symbol('id'),
    jump : () =>{
        console.log(`${name} can jump!`);
    }
}

json = JSON.stringify(rabbit);
console.log(json);

json = JSON.stringify(rabbit, ['name', 'color','size']);
console.log(json);

json = JSON.stringify(rabbit, (key,value)=>{
    //console.log(`key : ${key}, value = ${value}`);
    return key === 'name' ? 'ellie' : value;
});
console.log(json);

// 2. JSON to Object
// parse(json)
console.clear();
json = JSON.stringify(rabbit);
console.log(json);
const obj = JSON.parse(json, (key,value)=>{
    console.log(`key : ${key}, value = ${value}`);
    return key === 'birthDate' ? new Date() : value;

});
console.log(obj);
rabbit.jump();
// obj.jump();


console.log(rabbit.birthDate.getDate())
console.log(obj.birthDate.getDate())