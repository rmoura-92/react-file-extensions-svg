'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Rmvb = function Rmvb(props) {
  var size = props.size,
      color = props.color;

  return _react2.default.createElement(
    'svg',
    { width: size, height: size, viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg' },
    _react2.default.createElement(
      'g',
      { fill: color },
      _react2.default.createElement('path', { d: 'M0 2l2-2v48l-2-2h48l-2 2V0l2 2H0zm0-2h48v48H0V0z', 'fill-rule': 'nonzero' }),
      _react2.default.createElement('path', { d: 'M12 10h25v12.5H12V10zm11.303 8.724l4.061-2.031c.485-.243.49-.641 0-.886l-4.061-2.03c-.485-.243-.886.005-.886.56v3.827c0 .564.396.804.886.56zM11 42.775a1 1 0 0 1 .075-.383.916.916 0 0 1 .208-.313 1.024 1.024 0 0 1 .705-.285.984.984 0 0 1 .696.286.984.984 0 0 1 .285.695.993.993 0 0 1-.286.696 1 1 0 0 1-.696.28 1.016 1.016 0 0 1-.704-.28.924.924 0 0 1-.208-.31.992.992 0 0 1-.075-.386zm3.309.884V36.99h.942c.165 0 .28.03.345.091.065.06.108.165.13.312l.097.806c.238-.412.518-.737.838-.975.321-.238.68-.357 1.08-.357.329 0 .602.075.819.227l-.208 1.203c-.014.078-.042.133-.085.165a.286.286 0 0 1-.175.049c-.066 0-.154-.015-.267-.046a1.784 1.784 0 0 0-.448-.045c-.334 0-.62.092-.858.276-.239.184-.44.454-.605.81v4.153h-1.605zm5.31 0V36.99h.982c.208 0 .344.097.409.292l.104.495c.117-.13.24-.25.367-.358a2.218 2.218 0 0 1 .878-.465c.167-.045.35-.068.549-.068.42 0 .766.114 1.037.341.27.228.473.53.607.907.105-.221.234-.41.39-.569.157-.158.328-.287.514-.386.186-.1.385-.174.595-.221.21-.048.421-.072.634-.072.368 0 .695.056.981.169.286.113.526.277.721.494.196.217.344.481.446.793.102.312.152.67.152 1.072v4.245H27.38v-4.245c0-.424-.093-.744-.28-.958-.186-.215-.459-.322-.819-.322-.164 0-.317.028-.458.084-.14.057-.264.138-.37.244-.106.106-.19.24-.25.4-.061.16-.091.344-.091.552v4.245H23.5v-4.245c0-.446-.09-.77-.27-.974-.18-.204-.445-.306-.797-.306-.23 0-.445.057-.646.172a2.178 2.178 0 0 0-.563.472v4.881H19.62zm14.053 0h-1.456l-2.652-6.669h1.332c.118 0 .216.028.296.084.08.057.136.128.166.215l1.287 3.562c.074.208.135.412.185.611.05.2.094.399.134.598.039-.2.083-.399.133-.598.05-.2.113-.403.191-.611l1.32-3.562a.44.44 0 0 1 .163-.215.465.465 0 0 1 .279-.084h1.268l-2.646 6.669zm3.614 0V34h1.605v3.809c.265-.282.564-.506.898-.673.333-.167.723-.25 1.17-.25.364 0 .696.075.997.224.301.15.561.367.78.654.22.286.388.639.507 1.059.12.42.179.903.179 1.45 0 .498-.067.96-.201 1.384a3.388 3.388 0 0 1-.576 1.105c-.249.312-.55.556-.903.731a2.629 2.629 0 0 1-1.186.264c-.204 0-.39-.021-.56-.062a1.977 1.977 0 0 1-.461-.172 1.967 1.967 0 0 1-.387-.27 3.318 3.318 0 0 1-.341-.355l-.072.449c-.026.113-.07.193-.133.24a.415.415 0 0 1-.256.072h-1.06zm3.12-5.525c-.334 0-.619.07-.855.211s-.456.34-.66.595v2.99c.183.225.38.382.595.471.215.09.448.133.699.133.243 0 .461-.045.657-.136.195-.091.36-.23.497-.416.136-.186.241-.421.315-.705a4.03 4.03 0 0 0 .11-1.005c0-.39-.03-.72-.094-.99a1.915 1.915 0 0 0-.27-.66 1.066 1.066 0 0 0-.425-.371 1.328 1.328 0 0 0-.569-.117zM0 30h48v15.007A2.99 2.99 0 0 1 44.997 48H3.003A3.006 3.006 0 0 1 0 45.007V30z' })
    )
  );
};

Rmvb.propTypes = {
  color: _propTypes2.default.string,
  size: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number])
};

Rmvb.defaultProps = {
  color: '#FFFFFF',
  size: '24'
};

exports.default = Rmvb;