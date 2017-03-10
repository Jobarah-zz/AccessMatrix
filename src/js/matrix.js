export default class Matrix {
	
	constructor() {

		this.matrix = new Array();
		this.matrix.push(new Array());
		this.previousDomains = new Array();
		console.log(this.matrix);
		this.addDomain('admin');
		this.activeDomain = 'admin';
	}

	addObject(object) {

		let domainIndex = this.getDomainIndex(this.getActiveDomain());

		this.matrix[0].push(object);

		let objectIndex = this.getObjectIndex(object);

		this.matrix.map((domain, index) => {
			if (index > 0) {
				if(index === domainIndex || domain[0] === 'admin')
					domain.push('rwx');
				else
					domain.push('-');
			}
		});
	}

	addDomain(domain) {

		let newDomain = new Array();

		newDomain.push(domain);
		this.matrix[0].map(() => newDomain.push('-'));
		this.matrix.push(newDomain);
		console.log(this.matrix);
	}

	getDomainPermissionsForObject(domain, object) {

		const domainIndex = this.getDomainIndex(domain);
		const objectIndex = this.getObjectIndex(object);

		return this.matrix[domainIndex][objectIndex];
	}

	getDomainIndex(domain) {

		let retIndex = -1;

		this.matrix.map((item, index) => {
			if (item[0] == domain)
				retIndex = index;
		});

		return retIndex;
	}

	getObjectIndex(object) {

		let retIndex = -1;

		this.matrix[0].map((item, index) => {
			if (item == object)
				retIndex = index;
		});

		return retIndex;
	}
	
	setActiveDomain(domain) {
		this.activeDomain = domain;
	}

	getActiveDomain() {
		return this.activeDomain;
	}

	getActiveDomainObjects() {

		const index = getDomainIndex(this.activeDomain);
		const domains = this.matrix[index].map((item) => {

			let permissions = this.getDomainPermissionsForObject(this.activeDomain, item);
		})
	}

	switchDomain(domain) {
		if (this.previousDomains[this.previousDomains-2] === domain)
			this.previousDomains.pop();
		else
			this.previousDomains.push(this.getActiveDomain());
		this.activeDomain = domain;
		console.log(this.previousDomains);
	}

	printMatrix() {
		console.log(this.matrix);
	}
}
