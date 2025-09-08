

// dictionary

let mangBung = 
{
    name: '최연우',
    age: 31,
    
    line: function()
    {
        console.log(`${this.name}가 배고프다고 말합니다.`);
    },

    isFavoriteFood: function()
    {
        console.log(`${this.name}의 최애 음식은 닭도리탕 입니다.`);
    }
};

mangBung.name = '촤이연우';

const nameValue = 'name';
console.log(mangBung[nameValue]);


mangBung['favoriteFood'] = '닭도리탕';

console.log(mangBung);

mangBung.isFavoriteFood();


let user = {
  name: "최연우",
  age: 31
};

let key = "age";  // 런타임에 결정되는 키

// 점 표기법은 무조건 "key"라는 이름의 속성에 접근하려고 함
user.key = 99;

console.log(user);

let testArray = Object.keys(mangBung);

console.log(testArray);
console.log(testArray[0]);

console.log(typeof testArray);
