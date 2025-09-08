function test()
{
    
    // 에러값을 catch 문의 첫번째 파라미터에 받아서 사용할 수 있다. 
    try
    {
        console.log('test');
        throw new Error('오류가 발생하였습니다.');
        console.log('완료');
    }
    catch(error)
    {
        console.log('error catch');
        //error.log();
    }

    // 에러가 발생 했든, 안했든 반드시 실행하는 코드를 작성하면 된다. 
    finally
    {
        console.log('finally');
    }

    
}

test();