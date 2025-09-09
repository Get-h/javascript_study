

const iveMembers =
[
    {
        name: '안유진',
        year: 2001
    },
    {
        name: '가을',
        year: 2002
    },
    {
        name: '레이',
        year: 2004
    },
    {
        name: '장원영',
        year: 2004
    },
    {
        name: '리즈',
        year: 2004
    },
    {
        name: '이서',
        year: 2007
    },
]

const hotTracsMembers = 
[
    {
        name: '순헌',
        year: 1992
    },
    {
        name: '연우',
        year: 1994
    },
    {
        name: '지원',
        year: 1996
    },
    {
        name: '수현',
        year: 1998
    },
    {
        name: '유리',
        year: 1998
    },
    {
        name: '동석',
        year: 1994
    }
]


// 1) Contry 클래스는 나라 이름과 나라에 해당되는 아이돌 그룹 정보를 리스트로 들고 있다. (name, idolGroups)
class Contry
{
    name;
    idolGroups;
    constructor(name,idolGroups)
    {
        this.name = name;
        this.idolGroups = idolGroups;
    }
}

// 2) IdolGroup 클래스는 아이돌 그룹 이름 정보와 멤버 정보를 리스트로 가지고 있다. (name, members)
class IdolGroup
{
    groupName;
    idolMembers;
    constructor(groupName, idolMembers)
    {
        this.groupName = groupName;
        this.idolMembers = idolMembers;
    }
}

// 3) Idol 클래스는 아이돌 이름과 출생년도 정보를 들고 있다. (name, year)

class Idol
{
    name;
    year;
    constructor(name,year)
    {
        this.name = name;
        this.year = year;
    }   
}

// 4) MaleIdol 클래스는 Idol 클래스와 동일하게 name, year 프로퍼티가 존재한다. 
//    추가로 sing() 함수를 실행하면 ${이름} 이 노래를 합니다. 라는 스트링을 반환 

class MaleIdol extends Idol
{
    sing()
    {
        return `${this.name} 이(가) 노래를 합니다.`;
    }
}

// 5) FemaleIdol 클래스는 Idol 클래스와 동일하게 name, year 프로퍼티가 존재한다. 
//    추가로 dance() 함수를 실행하면 ${이름} 이 춤을 춥니다. 라는 스트링을 반환해준다.

class FemaleIdol extends Idol
{
    dance()
    {
        return `${this.name} 이(가) 춤을 춥니다.`;
    }
}

// 문법 ㅈ같다 쉬운거같기도하고 아닌거같기도하고 오늘은 여까지만할란다 
const cIveMembers = iveMembers.map((x) => new FemaleIdol(x['name'], x['year']));
const cHotracsMembers = hotTracsMembers.map((x) => new MaleIdol(x['name'], x['year']));

console.log(cIveMembers);
console.log(cHotracsMembers);
