/**
 * 비동기 프로그래밍
 * 
 * 비동기 프로그래밍을 사용하면 자바스크립트의 싱글스레드 프로그래밍이라도 효율적으로 스레드를 사용할 수 있다.
 * 자바 스크립트 코드 동작 중에 다른 스레드를 사용할 수 있기 때문
 */




function longWork(){
    setTimeout(()=>{
        console.log('작업완료');
    }, 2000);
}

console.log('Hello');
longWork();
console.log('World');