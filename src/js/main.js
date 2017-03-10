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

	read(filename) {
		
		let permissions = this.accessControlMatrix.getDomainPermissionsForObject(filename);

		if (permissions.includes('r')) {
			console.log(true);
			return;
		}
		console.log(false);
	}

	edit(filename) {
		
		let permissions = this.accessControlMatrix.getDomainPermissionsForObject(filename);

		if (permissions.includes('w')) {
			console.log(true);
			return;
		}
		console.log(false);
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
			useradd: (username) => { 
				this.useradd(username);
			},
			su: (username) => {
				this.su(username);
			},
			edit: (filename) => {
				this.edit(filename);
			},
			read: (filename) => {
				this.read(filename);
			}
			,
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