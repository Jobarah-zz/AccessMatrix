'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Matrix = function () {
	function Matrix() {
		_classCallCheck(this, Matrix);

		this.matrix = new Array();
		this.matrix.push(new Array());
		this.previousDomains = new Array();
		this.addDomain('admin');
		this.activeDomain = 'admin';
	}

	_createClass(Matrix, [{
		key: 'addObject',
		value: function addObject(object) {

			var domainIndex = this.getDomainIndex(this.getActiveDomain());

			this.matrix[0].push(object);

			this.matrix.map(function (domain, index) {
				if (index > 0) {
					if (index === domainIndex || domain[0] === 'admin') domain.push('rwx');else domain.push('-');
				}
			});
		}
	}, {
		key: 'addDomain',
		value: function addDomain(domain) {

			var newDomain = new Array();

			newDomain.push(domain);
			this.matrix[0].map(function () {
				return newDomain.push('-');
			});
			this.matrix.push(newDomain);
		}
	}, {
		key: 'getDomainPermissionsForObject',
		value: function getDomainPermissionsForObject(object) {

			var domainIndex = this.getDomainIndex(this.getActiveDomain());
			var objectIndex = this.getObjectIndex(object);
			var permissions = this.matrix[domainIndex][objectIndex + 1];
			var previousDomainIndex = this.getDomainIndex(this.previousDomains[this.previousDomains.length - 1]);
			var previousDomainPermissions = this.matrix[previousDomainIndex][objectIndex + 1];

			if (previousDomainPermissions) {
				permissions += previousDomainPermissions;
			}

			permissions.split("").filter(function (x, n, s) {
				return s.indexOf(x) == n;
			}).join("");

			return permissions;
		}
	}, {
		key: 'getDomainIndex',
		value: function getDomainIndex(domain) {

			var retIndex = -1;

			this.matrix.map(function (item, index) {
				if (item[0] == domain) retIndex = index;
			});

			return retIndex;
		}
	}, {
		key: 'getObjectIndex',
		value: function getObjectIndex(object) {

			var retIndex = -1;

			this.matrix[0].map(function (item, index) {
				if (item == object) {
					retIndex = index;
				}
			});

			return retIndex;
		}
	}, {
		key: 'setActiveDomain',
		value: function setActiveDomain(domain) {
			this.activeDomain = domain;
		}
	}, {
		key: 'getActiveDomain',
		value: function getActiveDomain() {
			return this.activeDomain;
		}
	}, {
		key: 'switchDomain',
		value: function switchDomain(domain) {
			if (this.previousDomains[this.previousDomains.length - 1] === domain) this.previousDomains.pop();else this.previousDomains.push(this.getActiveDomain());
			this.activeDomain = domain;
		}
	}, {
		key: 'grantPermission',
		value: function grantPermission(username, object, permissions) {
			var objectIndex = this.getObjectIndex(object);
			var domainIndex = this.getDomainIndex(username);
			this.matrix[domainIndex][objectIndex + 1] = permissions;
		}
	}, {
		key: 'printMatrix',
		value: function printMatrix() {
			console.log(this.matrix);
		}
	}]);

	return Matrix;
}();

exports.default = Matrix;
//# sourceMappingURL=matrix.js.map
