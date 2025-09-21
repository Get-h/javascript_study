
/**
 * call back 
 * 입력을 하고 나서 나중에 실행이 되는 함수.
 */


function waitAndRun(){
    setTimeout(()=>{
        console.log('종료');}, 1000);
}

waitAndRun();

function waitAndRun(){
    setTimeout(()=>{
        console.log('1번째 콜백 종료');

        setTimeout(()=>{
            console.log('2번째 콜백 종료');    
        },2000)

    }, 1000);
}


/**
 * Promise 
 * 
 */

const timeoutPromise = new Promise((resolve, reject)=>{
    setTimeout(()=> {
        resolve('완료');
    } ,2000);
  
});

timeoutPromise.then((res)=>{console.log('아..')});