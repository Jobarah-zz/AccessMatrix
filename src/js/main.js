import readlineSync from 'readline-sync';
import fs from 'fs';
import Matrix from './matrix';

export default class Shell {

	readCommand() {
		let command = readlineSync.question('Command: ');
		let args = command.split(' ');
	}

	ls() {

		fs.readdir(__dirname, function(err, files) {
		    if (err) return;
			files.map((item) => {
				console.log(item);
			})
		});
	}

	pwd() {

		console.log(process.cwd());
	}

	mkdir(dirname) {

		fs.mkdirSync(dirname);
	}

	touch(filename) {
		
		fs.closeSync(fs.openSync(filename, 'w'));
	}

	rm(filename) {

	}

	rmdir(dirname) {

		fs.rmdir(dirname);
	}
}

let AccessControlMatrix = new Shell();

//AccessControlMatrix.ls('oa');
AccessControlMatrix.touch('oa');