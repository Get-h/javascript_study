// 상속

class BasicUIObject
{
    uiName;
    uiType;

    constructor(uiName, uiType)
    {
        this.uiName = uiName;
        this.uiType = uiType;
    }

    testFunction()
    {
        console.log('상속 확인, 테스트함수');
    }
} 

class selectUI extends BasicUIObject
{
    
}

const testUIObject = new selectUI('선택 UI', '망붕타입');

console.log (testUIObject);
testUIObject.testFunction();

// instanceof 를 활용해서 객체가 해당 클래스를 상속받았는지 확인할 수 있음. 
console.log(testUIObject instanceof BasicUIObject);