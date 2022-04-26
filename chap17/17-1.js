/*
    생성자 함수에 의한 객체 생성
    
    17.1 Object 생성자 함수 
*/


// 빈 객체 생성
const person = new Object(); //new 연산자와 함께 Object 생성자 함수를 호출하면 빈 객체를 생성하여 반환한다.



//프로퍼티 추가
person.name = 'Lee';
person.sayHello = function() {
    console.log('Hi! MY name is '+ this.name);
}

console.log(person);    // {name :"lee",sayhello:f}
person.sayHello();      // Hi! MY name is Lee