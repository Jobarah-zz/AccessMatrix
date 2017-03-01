export default class Matrix {
	constructor() {
		this.matrix = new Array();
		this.matrix.push(new Array());
	}

	addObject(object) {
		this.matrix[0].push(object);
	}

	addDomain(domain) {
		let newDomain = new Array();
		newDomain.push(domain);
		this.matrix[0].map(() => newDomain.push('-'));
		this.matrix.push(newDomain);
	}

	getDomainPermissions() {

	}

	printMatrix() {
		console.log(this.matrix);
	}
}

let AccessControlMatrix = new Matrix();

AccessControlMatrix.addObject(0);
AccessControlMatrix.addObject(1);
AccessControlMatrix.addObject(2);
AccessControlMatrix.addObject(3);

AccessControlMatrix.addDomain('josue');
AccessControlMatrix.addDomain('daniel');
AccessControlMatrix.addDomain('victor');
AccessControlMatrix.addDomain('jesus');
AccessControlMatrix.addDomain('alex');

AccessControlMatrix.printMatrix();