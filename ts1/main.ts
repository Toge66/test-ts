interface Persion {
    name:string;
    age:number
}

function sortByName(a:Persion[]) {
    var result = a.slice(0)
    result.sort((x:Persion,y:Persion):number => {
        return x.name.localeCompare(y.name)
    })
    return result
}

class Persion1 implements Persion {
    name:string;
    age:number
    constructor(name:string,age:number) {
        this.name = name
        this.age = age
    }
}

const r = sortByName([new Persion1('xiaoming',18),new Persion1('zhangsan',21)])

r.forEach(element => {
    console.log(element);
});



