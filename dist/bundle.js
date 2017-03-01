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
		key: 'getDomainPermissions',
		value: function getDomainPermissions() {}
	}, {
		key: 'printMatrix',
		value: function printMatrix() {
			console.log(this.matrix);
		}
	}]);

	return Matrix;
}();

exports.default = Matrix;


var AccessControlMatrix = new Matrix();

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
//# sourceMappingURL=bundle.js.map
