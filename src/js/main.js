import readlineSync from 'readline-sync';
import fs from 'fs';
import Matrix from './matrix';

export default class Shell {
	readCommand() {

		let command = readlineSync.question('Command: ');
		let args = command.split(' ');
	}

	ls(path) {
		fs.readdir(__dirname, function(err, files) {
		    if (err) return;
			files.map((item) => {
				console.log(item);
			})
		});
	}

}

let AccessControlMatrix = new Shell();

AccessControlMatrix.ls('oa');