import {helloservice} from './services/hello_service'
export class Hello{
	static inject()  { return [helloservice]; }
	constructor(helloservice) {
		    this.heading = 'Welcome to the Aurelia Navigation App!';
		    this.helloservice = helloservice;
	}

	activate(){
		this.hello = this.helloservice.sayHi();
	}
	canDeactivate() {

	}
}