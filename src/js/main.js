import readlineSync from 'readline-sync';
import fs from 'fs';
import Matrix from './matrix';

export default class Shell {

	constructor() {
		this.accessControlMatrix = new Matrix();
	}
	readCommand() {
		let command = readlineSync.question(`$${this.accessControlMatrix.getActiveDomain()}: `);
		return command.split(' ');
	}

	ls() {}

	pwd() {}

	mkdir(dirname) {}

	touch(filename) {}

	rm(filename) {}

	rmdir(dirname) {}

	run() {
		readlineSync.promptCLLoop({
		  	add: function(target, into) {
		    	console.log(target + ' is added into ' + into + '.');
		   		// Do something... 
			},
			remove: function(target) {
		    	console.log(target + ' is removed.');
		    	// Do something... 
			},
			bye: function() { return true; },
			ls: () => {console.log(this.accessControlMatrix.getActiveDomainObjects())}
		});
		console.log('Exited');
	}
}

let userShell = new Shell();

userShell.run();