class HelloWorld {

    firstName = '';
    lastName: string;

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }



    greet() {
        console.log('Cesar Leon');

    }

    showGreet() {
        {
            console.log('Hello');
        }
    }

    sayHello() {
        console.log('Hello World!' + ' My name is ' + this.firstName + ' ' + this.lastName + ".");
    }
}

const myHelloClassInstance = new HelloWorld('Cesar', 'Leon');
myHelloClassInstance.sayHello(); 