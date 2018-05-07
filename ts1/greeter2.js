var Student = /** @class */ (function () {
    function Student(firstName, middleName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.fullName = firstName + middleName + lastName;
    }
    return Student;
}());
function greeter2(person) {
    return 'hello, ' + person.firstName + person.lastName;
}
var user2 = new Student('Jane', 'M.', 'User');
document.body.innerHTML = greeter2(user2);
