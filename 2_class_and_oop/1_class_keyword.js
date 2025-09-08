
// 기본적으로 인자를 받아서 사용하는 것은 c++ 과 동일, 약간의 문법 차이
class GirlFriend
{
    name;
    year;

    constructor(name , year)
    {
        this.name = name;
        this.year = year;
    }

    // 클래스 내부 함수의 경우 자바스크립트에서는 반환타입을 따로 지정하지 않아도 된다고 함. 
    testFunction()
    {
        if(this.name != null)
        {
            console.log(`테스트입니다. ${this.name} 이라고 합니다.`);
        }
        else
        {
            console.log('현재 클래스의 name 이 null 입니다.');
        }
    }
}



let mangBung = new GirlFriend();
mangBung.testFunction();

// 클래스는 함수로 인식한다.. 클래스로 생성한 인스턴스는 오브젝트(객체) 다. 
console.log(typeof GirlFriend);
console.log(typeof mangBung);