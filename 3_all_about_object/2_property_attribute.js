/**
 * Property Attribute
 * 프로퍼티 속성
 * 
 * 1) 데이터 프로퍼티 - 키와 값으로 형성된 실질적 값을 가지고 있는 프로퍼티
 * 2) 액세서 프로퍼티 - 자체적으로 값을 갖고 있지 않지만 다른 값을 가져오거나 설정할 때 호출되는 함수로 구성된 프로퍼티
 *                    getter, setter 
 */

// 객체를 생성할때 매우 섬세하게 작성하고 싶다면 사용, 

const tt = 
{
    name: '망붕',
    year: 1994,
}

console.log(Object.getOwnPropertyDescriptor(tt, 'name'));
console.log(Object.getOwnPropertyDescriptor(tt, 'year'));


// 오브젝트클래스의 함수를 사용하여 프로퍼티 재정의가 가능
// 스코프 안에 각각의 변수의 값을 설정 해주면 된다. 설정하지 않는다면 전부 기본값인 false, 
// value, writable, enumerable, configurable 
Object.defineProperty(tt, 'height', 
    {
        
    }
)

for(const i in tt)
{
   // console.log(i);
}