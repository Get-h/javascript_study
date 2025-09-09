


// static 키워드를 사용하면 클래스에 귀속이 되도록... 한다..? 
// static 키워드를 사용하면 클래스 자체에 귀속이 된다. 



// class IdolModel
// {
//     static groupName = '아이브';

//     name;
//     year;

//     constructor(name,year)
//     {
//         this.name = name;
//         this.year = name;
//     }

//     static getGroupName()
//     {
//         return this.groupName;
//     }
// }

// const yuJin = new IdolModel('안유진', 2004);

// console.log(yuJin);
// console.log(IdolModel);
// console.log(IdolModel.getGroupName());

// factory constructor 
class IdolModel
{
    name;
    year;
    
    constructor(name, year)
    {
        this.name = name;
        this.year = year;
    }

    // 이렇게 작성하면.... 뭐가 장점인지 모르겠네. 
    // 어떤 데이터를 입력받아서 객체를 생성할 지 템플릿을 정해둘 수 있다는 장점이 있다고 한다.
    static fromObject(object)
    {
        return new IdolModel(object.name, object.year);
    }
}

const yuJin2 = IdolModel.fromObject({name: '안유진', year: 2004});

console.log(yuJin2);