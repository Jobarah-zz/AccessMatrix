export default class Matrix {
	
	constructor() {

		this.matrix = new Array();
		this.matrix.push(new Array());
		this.previousDomains = new Array();
		this.addDomain('admin');
		this.activeDomain = 'admin';
	}

	addObject(object) {

		let domainIndex = this.getDomainIndex(this.getActiveDomain());

		this.matrix[0].push(object);

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
	}

	getDomainPermissionsForObject(object) {

		const domainIndex = this.getDomainIndex(this.getActiveDomain());
		const objectIndex = this.getObjectIndex(object);
		let permissions = this.matrix[domainIndex][objectIndex+1];
		let previousDomainPermissions = this.previousDomains[this.previousDomains.length-1];

		if (previousDomainPermissions) {
			permissions += previousDomainPermissions;
		}

		permissions.split("").filter(function(x, n, s) { return s.indexOf(x) == n }).join("");

		return permissions;
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
			if (item == object) {
				retIndex = index;
			}
		});

		return retIndex;
	}
	
	setActiveDomain(domain) {
		this.activeDomain = domain;
	}

	getActiveDomain() {
		return this.activeDomain;
	}

	switchDomain(domain) {
		if (this.previousDomains[this.previousDomains.length-1] === domain)
			this.previousDomains.pop();
		else
			this.previousDomains.push(this.getActiveDomain());
		this.activeDomain = domain;
	}

	printMatrix() {
		console.log(this.matrix);
	}
}
