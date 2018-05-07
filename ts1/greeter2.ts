class Student {
    fullName:string;
    constructor(public firstName:string, middleName:string, public lastName:string) {
        this.fullName = firstName + middleName + lastName
    }
}

interface Person {
    firstName:string;
    lastName:string
}

function greeter2(person:Person):string {
    return 'hello, ' + person.firstName + person.lastName
}

const user2 = new Student('Jane','M.','User')

document.body.innerHTML = greeter2(user2)


