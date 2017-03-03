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
	}

	_createClass(Shell, [{
		key: 'readCommand',
		value: function readCommand() {

			var command = _readlineSync2.default.question('Command: ');
			var args = command.split(' ');
		}
	}, {
		key: 'ls',
		value: function ls(path) {
			_fs2.default.readdir(__dirname, function (err, files) {
				if (err) return;
				files.map(function (item) {
					console.log(item);
				});
			});
		}
	}]);

	return Shell;
}();

exports.default = Shell;


var AccessControlMatrix = new Shell();

AccessControlMatrix.ls('oa');
//# sourceMappingURL=main.js.map
