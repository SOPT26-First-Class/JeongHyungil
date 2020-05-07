class group1_info {
    constructor(name, age, nick) {
        this.name = name;
        this.nick;
        this.age;
    }
}

var group1 = [
    { name: '정형일', nick: '정형일짱', age: 27 },
    { name: '신윤재', nick: '윤자이', age: 26 },
];

function info() {

    console.log('info : ' + JSON.stringify(group1));

}

group1.forEach( 
    info => console.log('이름은 ' + info.name+'이고 '+ info.age+'세이며 별명은 '+info.nick+'입니다.')
    );
