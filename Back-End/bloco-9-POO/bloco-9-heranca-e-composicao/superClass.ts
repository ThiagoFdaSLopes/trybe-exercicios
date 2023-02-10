class SuperClass {

  constructor(public isSuper: boolean = true) {}

  public sayHello() {
    console.log('Hey')
  }
}

class SubClass extends SuperClass{
  constructor() {
    super(false)
  }
}

const myFunc = (superClass: SuperClass) => {
  console.log(superClass.isSuper)
}

const newSuperClass = new SuperClass();
const newSubClass = new SubClass();

myFunc(newSuperClass);
myFunc(newSubClass);