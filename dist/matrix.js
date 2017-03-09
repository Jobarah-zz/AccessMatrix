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
		this.addObject('admin');
		this.activeDomain = 'admin';
	}

	_createClass(Matrix, [{
		key: 'addObject',
		value: function addObject(object) {

			this.matrix[0].push(object);
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
		value: function getDomainPermissionsForObject(domain, object) {

			var domainIndex = this.getDomainIndex(domain);
			var objectIndex = this.getObjectIndex(object);

			return this.matrix[domainIndex][objectIndex];
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
				if (item == object) retIndex = index;
			});

			return retIndex;
		}
	}, {
		key: 'setDomain',
		value: function setDomain(domain) {
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
			if (this.previousDomains[this.previousDomains - 2] === domain) this.previousDomains.pop();else this.previousDomains.push(domain);
			this.activeDomain = domain;
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
