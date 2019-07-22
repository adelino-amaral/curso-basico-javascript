class Dog {

	constructor(name, color){
		this.name = name;
		this.color = color;
	}

	Mia(){
		return "Miau Miau";
	}

	static sayMiau(){
		return "Miau, Miau, Miau, Miau, Miau, Miau, Miau";
	}
}


// methods getter and setter
class Person {

	get name(){
		return this._name;
	}

	set name(name){
		this._name = name;
	}
}


// herença
class Popi extends Dog {

	constructor(color, age) {
		super(name, color);	// Dog - começa por esta class
		this.name = "Popi";
		this.color = color;
		this.age = age;
	}

	showInformation(){
		return `Olá, my name is ${this.name}, I'm ${this.age} years old.`;
	}


	Mia(){
		// super.Mia() is a method the Dog class
		return `${super.Mia()} está em forma!`;
	}
}