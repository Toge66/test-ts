// function greeter(person:string):string {
    // return 'hello' + person
// }
// 
// var user = 'taochang'
interface Person {
    firstName:string
    lastName:string
}

function greeter1(person:Person):string {
    return 'hello' + person.firstName + person.lastName
}

var user1 = {firstName:'wu', lastName:'taochang'}


document.body.innerHTML = greeter1(user1)
