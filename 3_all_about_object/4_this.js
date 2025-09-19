/**
 * this
 * 
 * JS는 Lexical Scope 를 사용하기 때문에 함수의 상위 스코프가 정의 시점에 평가된다. 
 * 즉, 선언이 어디에 되었냐에 따라서 변수를... 
 * 
 * 하지만 this 키워드는 바인딩이 객체가 생성되는 시점에 결정된다. 
 * 
 * this 키워드가 어떤걸 가르키냐는 세가지만 기억하면 된다.
 * 
 * 1번을 제외하고는 나머지는 c++과 거의 동일한 것 같다. 
 * 
 * 1) 일반 함수 호출 시에는 this 는 최상위 객체(global 또는 window)를 가리킨다.
 * 2) 메서드로 호출 시에는 호출된 객체를 가리킨다.
 * 3) new 키워드를 사용해서 객체를 생성했을 땐 객체를 가리킨다. 
 */


/**
 * 
 * 원하는 this 값으로 매핑하는 방법
 * 
 * 각각의 차이를 알아두자. 
 * 1) apply() 아규먼트(인수)를 리스트로 입력해야 한다. (함수의 2번인자를 배열로 넣어주면 되고)
 * 2) call()  컴마를 기반으로 아규먼트(인수)를 순서대로 넘겨준다. 
 *            (함수 1번인자에 this에 바인딩할 변수 넣어주면 되고 그냥 순서대로 인자를 넣어주면 된다.)
 * 
 * 3) bind()  this에 바인딩만 해두고 실행자체는 나중에 할 수 있다. 
 *    변수에 this를 지정함과 동시에 인자를 입력해서 특정 함수를 바인딩해주고 해당 변수를 이후에 사용할 수 있음. 
 */

function returnName()
{
    return this.name;
}

const mangBung = {
    name :'최연우',
    year : 1994,
}

// console.log(returnName());
// console.log(returnName.call(mangBung));

// bind 
const testReturnName = returnName.bind(mangBung);

console.log(testReturnName());

