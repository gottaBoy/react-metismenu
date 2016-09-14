'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Item = require('./Item');

var _Item2 = _interopRequireDefault(_Item);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * src/Container.js
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Author: H.Alper Tuna <halpertuna@gmail.com>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Date: 23.03.2016
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

/**
 * Item Container / Submenu Class
 *
 * Containers are levels of menu, and keep items. Refers to <ul>.
 * Also provides comminication between items to close each other's sub menu levels
 * @extends React.Component
 */
var Container = function (_Component) {
  _inherits(Container, _Component);

  /**
   * Creates item container.
   *
   * Props come from top component
   * @prop {string} props.classNameContainer - Class name for item container (ul)
   * @prop {string} props.classNameContainerVisible - Class name when container is visible
   * @prop {string} props.classNameItem - Class name for items in container (li)
   * @prop {string} props.classNameLink - Class name for links in items (a)
   * @prop {string} props.classNameIcon - Class name for link icons
   * @prop {string} props.classNameStateIcon - Class name for state indicators of submenu
   * @prop {string} props.iconNamePrefix - Prefix for all icon's style class name
   * @prop {string} props.iconNameStateVisible - Icon name for state of collapsed containers
   * @prop {string} props.iconNameStateHidden - Icon name for state of opened containers
   * @prop {React.Component} props.LinkComponent - Handles link components of all items
   *
   * Props come from parent Item
   * @prop {boolean} [props.visible] - State of container visibility
   * @prop {Object[]} props.content - Recursive menu stracture (It also comes from top
   * to first container depth)
   */
  function Container() {
    _classCallCheck(this, Container);

    var _this = _possibleConstructorReturn(this, (Container.__proto__ || Object.getPrototypeOf(Container)).call(this));

    _this.closeChildContainers = _this.closeChildContainers.bind(_this);
    return _this;
  }
  /**
   * Closes all sub containers
   */


  _createClass(Container, [{
    key: 'closeChildContainers',
    value: function closeChildContainers() {
      if (!this.props.content) return;

      this.items.forEach(function (item) {
        item.closeContainer();
      });
    }
    /**
     * Renders container block and menu items of it
     *
     * @return {Object} React component
     */

  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var className = this.props.classNameContainer;
      if (this.props.visible) className += ' ' + this.props.classNameContainerVisible;

      this.items = [];

      return _react2.default.createElement(
        'ul',
        { className: className },
        this.props.content.map(function (item, i) {
          return _react2.default.createElement(_Item2.default, _extends({
            key: i,
            ref: function ref(r) {
              if (r !== null) _this2.items.push(r);
            },
            closePeerContainers: _this2.closeChildContainers,
            classNameContainer: _this2.props.classNameContainer,
            classNameContainerVisible: _this2.props.classNameContainerVisible,
            classNameItem: _this2.props.classNameItem,
            classNameLink: _this2.props.classNameLink,
            classNameIcon: _this2.props.classNameIcon,
            classNameStateIcon: _this2.props.classNameStateIcon,
            iconNamePrefix: _this2.props.iconNamePrefix,
            iconNameStateVisible: _this2.props.iconNameStateVisible,
            iconNameStateHidden: _this2.props.iconNameStateHidden,
            LinkComponent: _this2.props.LinkComponent
          }, item));
        })
      );
    }
  }]);

  return Container;
}(_react.Component);

Container.propTypes = {
  classNameContainer: _react.PropTypes.string.isRequired,
  classNameContainerVisible: _react.PropTypes.string.isRequired,
  classNameItem: _react.PropTypes.string.isRequired,
  classNameLink: _react.PropTypes.string.isRequired,
  classNameIcon: _react.PropTypes.string.isRequired,
  classNameStateIcon: _react.PropTypes.string.isRequired,
  iconNamePrefix: _react.PropTypes.string.isRequired,
  iconNameStateVisible: _react.PropTypes.string.isRequired,
  iconNameStateHidden: _react.PropTypes.string.isRequired,
  LinkComponent: _react.PropTypes.oneOfType([_react.PropTypes.element, _react.PropTypes.func]).isRequired,
  visible: _react.PropTypes.bool,
  content: _react.PropTypes.array.isRequired
};

exports.default = Container;