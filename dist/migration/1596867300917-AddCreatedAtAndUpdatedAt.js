"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AddCreatedAtAndUpdatedAt1591208065141 = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _typeorm = require("typeorm");

var AddCreatedAtAndUpdatedAt1591208065141 = /*#__PURE__*/function () {
  function AddCreatedAtAndUpdatedAt1591208065141() {
    (0, _classCallCheck2["default"])(this, AddCreatedAtAndUpdatedAt1591208065141);
  }

  (0, _createClass2["default"])(AddCreatedAtAndUpdatedAt1591208065141, [{
    key: "up",
    value: function () {
      var _up = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(queryRunner) {
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return queryRunner.addColumns('users', [new _typeorm.TableColumn({
                  name: 'createdAt',
                  type: 'timestamp',
                  isNullable: false,
                  "default": 'now()'
                }), new _typeorm.TableColumn({
                  name: 'updatedAt',
                  type: 'timestamp',
                  isNullable: false,
                  "default": 'now()'
                })]);

              case 2:
                _context.next = 4;
                return queryRunner.addColumns('posts', [new _typeorm.TableColumn({
                  name: 'createdAt',
                  type: 'timestamp',
                  isNullable: false,
                  "default": 'now()'
                }), new _typeorm.TableColumn({
                  name: 'updatedAt',
                  type: 'timestamp',
                  isNullable: false,
                  "default": 'now()'
                })]);

              case 4:
                _context.next = 6;
                return queryRunner.addColumns('comments', [new _typeorm.TableColumn({
                  name: 'createdAt',
                  type: 'timestamp',
                  isNullable: false,
                  "default": 'now()'
                }), new _typeorm.TableColumn({
                  name: 'updatedAt',
                  type: 'timestamp',
                  isNullable: false,
                  "default": 'now()'
                })]);

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function up(_x) {
        return _up.apply(this, arguments);
      }

      return up;
    }()
  }, {
    key: "down",
    value: function () {
      var _down = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(queryRunner) {
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return queryRunner.dropColumn('users', 'createdAt');

              case 2:
                _context2.next = 4;
                return queryRunner.dropColumn('users', 'updatedAt');

              case 4:
                _context2.next = 6;
                return queryRunner.dropColumn('posts', 'createdAt');

              case 6:
                _context2.next = 8;
                return queryRunner.dropColumn('posts', 'updatedAt');

              case 8:
                _context2.next = 10;
                return queryRunner.dropColumn('comments', 'createdAt');

              case 10:
                _context2.next = 12;
                return queryRunner.dropColumn('comments', 'updatedAt');

              case 12:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function down(_x2) {
        return _down.apply(this, arguments);
      }

      return down;
    }()
  }]);
  return AddCreatedAtAndUpdatedAt1591208065141;
}();

exports.AddCreatedAtAndUpdatedAt1591208065141 = AddCreatedAtAndUpdatedAt1591208065141;