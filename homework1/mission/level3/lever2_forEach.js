const printNames = function () {
    console.log(
        "name : " + this.name + ", nick : " + this.name + ", age " + this.age
    );
}

const group1 = [
    {
        name: '정형일',
        nick: '정형일짱',
        age: 27,
        printName: printNames
    }, {
        name: '신윤재',
        nick: '윤자이',
        age: 26,
        printName: printNames
    }, {
        name: '서영',
        nick: '서영짱',
        age: 26,
        printName: printNames
    }, {
        name: '유영',
        nick: '유영짱',
        age: 26,
        printName: printNames
    }, {
        name: '준엽',
        nick: '준엽',
        age: 26,
        printName: printNames
    }
];

group1.forEach(member => {
    console.log("이름 : " + member.name, ", 별명 : " + member.nick, ", 나이 : " + member.age)
})
