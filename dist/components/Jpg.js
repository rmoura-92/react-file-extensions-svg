'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Jpg = function Jpg(props) {
  var size = props.size,
      color = props.color;

  return _react2.default.createElement(
    'svg',
    { width: size, height: size, viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg' },
    _react2.default.createElement(
      'g',
      { fill: color },
      _react2.default.createElement('path', { d: 'M0 2l2-2v48l-2-2h48l-2 2V0l2 2H0zm0-2h48v48H0V0z', 'fill-rule': 'nonzero' }),
      _react2.default.createElement('path', { d: 'M11 10.007v12.986A.999.999 0 0 0 9.998 22h28.004a.997.997 0 0 0-1.002.993V10.007c0 .544.446.993 1.002.993H9.998A.997.997 0 0 0 11 10.007zm-2 0C9 9.451 9.447 9 9.998 9h28.004c.551 0 .998.449.998 1.007v12.986c0 .556-.447 1.007-.998 1.007H9.998C9.447 24 9 23.551 9 22.993V10.007zM23.5 17.5l4 4 5-6L38 24H17l6.5-6.5zM17 17a2 2 0 1 0 0-4 2 2 0 0 0 0 4z', 'fill-rule': 'nonzero' }),
      _react2.default.createElement('path', { d: 'M23.974 42.77a1 1 0 0 1 .074-.384.916.916 0 0 1 .208-.312 1.024 1.024 0 0 1 .706-.286.984.984 0 0 1 .695.286.984.984 0 0 1 .286.696.993.993 0 0 1-.286.696 1 1 0 0 1-.695.28 1.016 1.016 0 0 1-.706-.281.924.924 0 0 1-.208-.309.992.992 0 0 1-.074-.386zm5.017-5.786v6.897c0 .29-.037.563-.113.819-.076.256-.197.48-.364.673a1.697 1.697 0 0 1-.657.455c-.27.11-.601.165-.991.165a2.499 2.499 0 0 1-.819-.123l.052-.864c.013-.087.048-.142.104-.166.056-.024.165-.036.325-.036s.296-.016.406-.049c.11-.032.2-.084.267-.156a.613.613 0 0 0 .143-.282c.028-.118.042-.263.042-.436v-6.897h1.605zm.241-1.943a.915.915 0 0 1-.084.39 1.072 1.072 0 0 1-.553.536 1.007 1.007 0 0 1-.796 0 1.042 1.042 0 0 1-.54-.536 1.007 1.007 0 0 1 0-.793 1.031 1.031 0 0 1 .54-.543 1.007 1.007 0 0 1 .796 0 1.048 1.048 0 0 1 .553.543c.056.126.084.26.084.403zm1.547 10.79v-8.847h.982a.48.48 0 0 1 .266.072.334.334 0 0 1 .143.221l.13.617c.269-.307.577-.556.926-.747.35-.19.757-.286 1.226-.286.364 0 .696.076.997.228.301.151.561.371.78.66.22.287.388.643.507 1.065.12.423.179.907.179 1.453 0 .498-.067.96-.201 1.384a3.388 3.388 0 0 1-.576 1.105c-.249.313-.55.556-.903.732a2.629 2.629 0 0 1-1.187.263c-.377 0-.696-.057-.958-.172a2.347 2.347 0 0 1-.706-.478v2.73H30.78zm3.12-7.703c-.334 0-.619.07-.855.212-.236.14-.456.339-.66.594v2.99c.183.226.38.383.595.472.215.089.445.133.693.133.242 0 .462-.045.66-.137a1.28 1.28 0 0 0 .5-.416c.136-.186.241-.42.315-.705a4.03 4.03 0 0 0 .11-1.004c0-.39-.03-.72-.094-.991a1.915 1.915 0 0 0-.27-.66 1.066 1.066 0 0 0-.425-.37 1.328 1.328 0 0 0-.569-.117zm6.539-1.26c.286 0 .555.029.806.087.251.059.481.144.689.257h1.917v.598c0 .1-.025.178-.078.234-.052.056-.14.095-.266.117l-.598.11a2.066 2.066 0 0 1 .136.755c0 .329-.066.627-.198.893a2.003 2.003 0 0 1-.546.68c-.232.186-.507.33-.825.432a3.387 3.387 0 0 1-1.037.153c-.251 0-.496-.024-.735-.072-.208.126-.312.266-.312.422 0 .135.062.233.186.296.123.063.286.107.487.134.202.026.43.042.686.048.256.007.518.02.786.042.27.022.531.06.787.114.256.054.484.14.686.257.201.117.364.276.487.478.124.201.185.46.185.776 0 .295-.072.581-.217.858a2.305 2.305 0 0 1-.63.742 3.293 3.293 0 0 1-1.012.523 4.331 4.331 0 0 1-1.364.198c-.508 0-.947-.049-1.32-.146a3.08 3.08 0 0 1-.926-.39 1.691 1.691 0 0 1-.55-.563 1.318 1.318 0 0 1-.181-.663c0-.312.095-.574.285-.786.191-.212.455-.381.794-.507a1.106 1.106 0 0 1-.397-.364c-.1-.152-.15-.349-.15-.592 0-.1.018-.202.053-.308.034-.106.087-.211.159-.316.071-.104.161-.202.27-.295.108-.093.236-.177.383-.25a2.104 2.104 0 0 1-.796-.728 1.944 1.944 0 0 1-.29-1.066c0-.33.067-.628.199-.894.132-.267.316-.494.552-.683a2.52 2.52 0 0 1 .839-.432c.323-.1.675-.15 1.056-.15zm1.761 7.084a.444.444 0 0 0-.116-.318.769.769 0 0 0-.319-.192 2.356 2.356 0 0 0-.471-.1 8.691 8.691 0 0 0-.572-.05c-.202-.01-.41-.02-.624-.032a7.87 7.87 0 0 1-.621-.055c-.182.1-.328.218-.439.354a.728.728 0 0 0-.166.472c0 .117.03.226.088.328.059.102.152.19.28.263.128.074.293.131.497.172.204.041.453.062.748.062.299 0 .556-.023.773-.068a1.86 1.86 0 0 0 .536-.189.811.811 0 0 0 .309-.286.699.699 0 0 0 .098-.36zm-1.761-3.795c.2 0 .373-.028.52-.082a1.02 1.02 0 0 0 .367-.224.924.924 0 0 0 .221-.344c.05-.135.075-.282.075-.442 0-.33-.099-.59-.296-.784-.197-.193-.493-.289-.887-.289s-.69.096-.887.29c-.197.192-.296.453-.296.783 0 .156.025.3.075.435.05.134.123.25.22.348a.993.993 0 0 0 .371.227c.15.054.322.081.517.081zM0 30h48v15.007A2.99 2.99 0 0 1 44.997 48H3.003A3.006 3.006 0 0 1 0 45.007V30z' })
    )
  );
};

Jpg.propTypes = {
  color: _propTypes2.default.string,
  size: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number])
};

Jpg.defaultProps = {
  color: '#FFFFFF',
  size: '24'
};

exports.default = Jpg;