var HelloWorld = /** @class */ (function () {
    function HelloWorld(firstName, lastName) {
        this.firstName = '';
        this.firstName = firstName;
        this.lastName = lastName;
    }
    HelloWorld.prototype.greet = function () {
        console.log('Cesar Leon');
    };
    HelloWorld.prototype.showGreet = function () {
        {
            console.log('Hello');
        }
    };
    HelloWorld.prototype.sayHello = function () {
        console.log('Hello World!' + ' My name is ' + this.firstName + ' ' + this.lastName + ".");
    };
    return HelloWorld;
}());
var myHelloClassInstance = new HelloWorld('Cesar', 'Leon');
myHelloClassInstance.sayHello();
