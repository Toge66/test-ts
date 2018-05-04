interface Persion {
    name:string;
    age:number
}

function sortByName(a:Persion[]) {
    var result = a.slice(0)
    result.sort((x:Persion,y:Persion):number => {
        return x.name.localeCompare(y.name)
    })
}
