'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _readlineSync = require('readline-sync');

var _readlineSync2 = _interopRequireDefault(_readlineSync);

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _matrix = require('./matrix');

var _matrix2 = _interopRequireDefault(_matrix);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Shell = function () {
	function Shell() {
		_classCallCheck(this, Shell);

		this.accessControlMatrix = new _matrix2.default();
	}

	_createClass(Shell, [{
		key: 'readCommand',
		value: function readCommand() {
			var command = _readlineSync2.default.question('$' + this.accessControlMatrix.getActiveDomain() + ': ');
			return command.split(' ');
		}
	}, {
		key: 'ls',
		value: function ls() {}
	}, {
		key: 'pwd',
		value: function pwd() {}
	}, {
		key: 'mkdir',
		value: function mkdir(dirname) {
			this.accessControlMatrix.addObject(dirname);
		}
	}, {
		key: 'touch',
		value: function touch(filename) {
			this.accessControlMatrix.addObject(filename);
		}
	}, {
		key: 'read',
		value: function read(filename) {

			var permissions = this.accessControlMatrix.getDomainPermissionsForObject(filename);

			if (permissions.includes('r')) {
				console.log(true);
				return;
			}
			console.log(false);
		}
	}, {
		key: 'edit',
		value: function edit(filename) {

			var permissions = this.accessControlMatrix.getDomainPermissionsForObject(filename);

			if (permissions.includes('w')) {
				console.log(true);
				return;
			}
			console.log(false);
		}
	}, {
		key: 'useradd',
		value: function useradd(username) {
			this.accessControlMatrix.addDomain(username);
		}
	}, {
		key: 'su',
		value: function su(username) {
			this.accessControlMatrix.switchDomain(username);
		}
	}, {
		key: 'run',
		value: function run() {
			var _this = this;

			_readlineSync2.default.promptCLLoop({
				touch: function touch(target) {

					_this.touch(target);
				},
				useradd: function useradd(username) {
					_this.useradd(username);
				},
				su: function su(username) {
					_this.su(username);
				},
				edit: function edit(filename) {
					_this.edit(filename);
				},
				read: function read(filename) {
					_this.read(filename);
				},

				printMatrix: function printMatrix() {
					_this.accessControlMatrix.printMatrix();
				},
				exit: function exit() {
					return true;
				}
			});
			console.log('Exited');
		}
	}]);

	return Shell;
}();

exports.default = Shell;


var userShell = new Shell();

userShell.run();
//# sourceMappingURL=main.js.map
