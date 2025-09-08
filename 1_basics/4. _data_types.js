/**
 * Data Types
 * 
 * 여섯개의 Primitive Type 과 
 * 한개의 오브젝트 타입이 있다.
 * 
 * 1) Number (숫자)
 * 2) String (문자열)
 * 3) Boolean (불리언)
 * 4) undefined (언디파인드) - 정의가 되지 않은 타입, 값을 지정하지 않았을 때 지정되는 값
 * 직접 값을 언디파인드로 초기화 할 경우, 자바스크립트 세계에선 미친놈이라고 한다.
 * 5) null (널) - 정의가 되지 않은 타입, 명시적으로 없는 값으로 초기화 할 때 사용된다. 
 * 6) Symbol (심볼) - 유일무이한 값을 생성할 때 사용한다, 
 * 다른 프리미티브 값들과 다르게 심볼 함수를 호출해서 사용
 * 
 * 7) Object (객체)
 *    Funtion
 *    Array 
 *    Object
 */

const age = Infinity;
console.log(age);


/**
 * Template Literal
 * 
 * 1) newline -> \n
 * 2) tab -> \t
 * 3) 백슬래시를 스트링으로 표현하려면 두번입력 \\ 
 */

let iveYuJin = `아 내얼
굴

오우
`;

console.log(iveYuJin);

if(false == false)
{
    console.log('테에스트');
}

/**
 * Object 타입
 * 
 * Map
 * 키: 밸류 한쌍으로 이루어져 있다.
 * 
 * Array
 * index를 사용하며 c++의 배열과 같다. 문법만 익히면 될듯.
 * 
 */

/**
 * static typing -> 변수 선언 시 어떤 타입의 변수를 선언할 지 명시
 * dynamic typing -> 변수 선언 시 타입을 명시적으로 선언하지 않고 값에 의해 타입을 추론한다.
 * 
 * 자바스크립트의 경우 다이나믹 타이핑, c++의 경우 스태틱 타이핑이다. 
 */



//dictionary

let dictionary = { red: '빨간색', blue: '파란색'};

console.log(dictionary);