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

	mkdir(dirname) {
		this.accessControlMatrix.addObject(dirname);
	}

	touch(filename) {
		this.accessControlMatrix.addObject(filename);
	}

	rm(filename) {
		this.accessControlMatrix.removeObject(filename);
	}

	rmdir(dirname) {
		this.accessControlMatrix.removeObject(filename);
	}

	useradd(username) {
		this.accessControlMatrix.addDomain(username);
	}

	su(username) {
		this.accessControlMatrix.switchDomain(username);		
	}

	run() {

		readlineSync.promptCLLoop({
		  	touch: (target) => {

		    	this.touch(target);
			},
			remove: (target) => {

		    	console.log(target + ' is removed.');
			},
			useradd: (username) => { 
				this.accessControlMatrix.addDomain(username);
			},
			su: (username) => {
				this.su(username);
			},
			printMatrix: () => {
				this.accessControlMatrix.printMatrix();
			},
			exit: function() { 
				return true; 
			}
		});
		console.log('Exited');
	}
}

let userShell = new Shell();

userShell.run();