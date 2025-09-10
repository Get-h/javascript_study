
/**
 * All about objects
 * 
 * 객체를 선언할 때 사용할 수 있는 방법들
 * 1) object를 생성해서 객체 생성 - 기본기 {}
 * 2) class를 인스턴스화 해서 생성 - class와 oop 
 * 3) function을 사용하여 객체 생성
 */


// 이런 형태의 함수를 생성자 함수라고 부른다. 이런형태로도 객체를 만들어 낼 수 있다는 것을 알아야하고
// 오래된 프로젝트를 보면 이런 형태를 압도적으로 더 많이 확인할 수 있다. 
function IdolFunction(name, year)
{
    this.name = name;
    this.year = year;
    this.sayHello = function()
    {
        console.log('안녕');
    }
}


const testActor = new IdolFunction('TEST ACTOR', 2004);

console.log(testActor);

