

// 주로 사용하는 array 함수, 
let hotMembers =
[
    '허동석',
    '최연우',
    '홍순헌',
    '임유리',
    '박수현',
    '한지원'
];

// push()
// 배열의 뒤쪽에 데이터 추가 후 배열 크기 반환
hotMembers.push('강민수');
console.log(hotMembers);

// pop()
// 배열의 마지막 인덱스의 데이터 반환 후 제거 
hotMembers.pop();
console.log(hotMembers);

// shift()
// 배열의 첫번째 인덱스의 데이터를 반환 후 제거 
hotMembers.shift();
console.log(hotMembers);

// unshift()
// 배열의 시작부분에 데이터 추가 후 배열 크기 반환
hotMembers.unshift('허동석');
console.log(hotMembers);

// splice()
// 첫번째 인자의 인덱스 값 부터 두번째 인자의 인덱스 값 까지 데이터를 반환 후 삭제 
// console.log(hotMembers.splice(0, 2));
console.log(hotMembers);

// 한번 선언한 변수는 수정하지 않는다는 개념으로.. 프로그래밍을 한다라.. 흠  





// 기존 변수를 변경하지 않고 사용하는 함수들 


// concat()
// 기존 배열에 인자의 값을 추가하여 새로운 배열을 반환한다. 
console.log(hotMembers.concat('강민수'));

// slice()
// splice 사용시 기존 배열의 값을 변경하지 않는다고 보면 된다.
// 두번째 인자 -1 까지 잘라서 새로운 배열을 만들어서 반환한다. 
console.log(hotMembers.slice(0,3));

// spread operator 
// 변수의 데이터들을 복사하여 새로운 변수 생성
let hotMembers2 = 
[
    ...hotMembers,
]

console.log(hotMembers2);


// join()
// , 를 기준으로 배열의 모든 값을 합쳐서 반환하는데, 모든 값들을 스트링으로 엮을 때 많이 사용한다.
console.log(hotMembers.join('/'));

// sort() 
// 오름차순으로 정렬, 반환값은 없음 

// reverse() 
// 내림차순 정렬 후 반환 

let testNumbers =
[
    9,7,5,3
];

// map()
// 그냥 외우고 x = n번째 인덱스의 데이터이고, 해당 데이터를 어떤 값으로 치환할지 작성한다고 생각하면 편할 듯? 
// 위처럼 사용할 수도 있고 if문 등을 사용하여 응용 가능하다. 
console.log(hotMembers.map((x) => `핫트랙스: ${x}`));
console.log(hotMembers);
console.log(hotMembers.map((x) => `엿`));

// filter()
// 나머지 연산을 활용하여 짝수만 걸러서 출력하거나 홀수만 걸러서 출력이 가능하다. true를 반환할 경우 해당 값을 반환
console.log(testNumbers.filter((x) => x - 1 === 8));

// find()
// 해당되는 첫번째 값만을 반환
console.log(testNumbers.find((x) => x % 2 === 1 ));

// findIndex()
// 해당되는 값의 인덱스를 반환
console.log(testNumbers.findIndex((x) => x % 2 === 1 ));

// reduce()
// 설명 뭔소린지 이해못하겠어서 그냥 사용할 때 검색해보고 쓴다. 