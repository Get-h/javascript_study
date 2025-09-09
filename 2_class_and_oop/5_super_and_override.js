

class BasicUIObject
{
    uiName;
    uiType;

    constructor(uiName, uiType)
    {
        console.log('부모 생성자');

        this.uiName = uiName;
        this.uiType = uiType;
    }

    TestUIFunction()
    {
        console.log(`${this.uiName}라고 한다. 잘부탁한다.`);
    }
}

class selectUIObject extends BasicUIObject
{
    testName;

    constructor(uiName, uiType, testName)
    {
        console.log('자식 생성자');
        super(uiName, uiType);
        this.testName = testName;
    }

    TestUIFunction()
    {
        super.TestUIFunction();
    }
}

const testUIObject = new selectUIObject('테스트 유아이', '테스트 타입','3333');

console.log(testUIObject);
testUIObject.TestUIFunction();