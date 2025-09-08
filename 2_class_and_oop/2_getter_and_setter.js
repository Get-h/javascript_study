class IdolModel
{
    // 변수명 앞에 #을 붙여준다면 해당 변수의 접근제한 지정자를 private: 로 지정하는 것과 같음. 
    #name;
    year;
    
    constructor(name, year)
    {
        this.#name = name;
        this.year = year;
    }

    
    // c++과 동일하게 클래스 내부의 private 변수의 값을 세팅해주는 용도로 사용,
    // 하지만 자바스크립트에서 이런식으로 접근하는 것이 선호하는 방식은 아니라고 한다. 
    set setName(name)
    {
        this.#name = name;
    }

    // 마찬가지로 get 도 동일하게 사용
    get getName()
    {
        return this.#name;
    }

    get nameAndYear()
    {
        let testArray = [];

        testArray = 
        [
            this.#name,
            this.year
        ]

        return testArray;
    }

}


let yuJin = new IdolModel('유진', 2000);

yuJin.setName = '유진';

console.log(yuJin.nameAndYear);

yuJin.setName = '으익';

console.log(yuJin.nameAndYear);


class MangBung
{
    #name;
    #year;
    
    constructor(name, year)
    {
        this.#name = name;
        this.#year = year;
    }


    get getName()
    {
        return this.#name;
    }

    get getYear()
    {
        return this.#year;
    }
    set setName(name)
    {
        this.#name = name;
    }

    set setYaer(year)
    {
        this.#year = year;
    }

}

const yy = new MangBung();
yy.setName = '망붕이';
yy.setYaer = 1994;

console.log('-------------------');
console.log(yy.getName);
console.log(yy.getYear);

console.log(`${yy.getName}
    ${yy.getYear}
    `);