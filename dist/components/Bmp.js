'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Bmp = function Bmp(props) {
    var size = props.size,
        color = props.color;

    return _react2.default.createElement(
        'svg',
        { width: size, height: size, viewBox: '0 0 48 48', version: '1.1', xmlns: 'http://www.w3.org/2000/svg' },
        _react2.default.createElement(
            'g',
            { id: 'Page-1', stroke: 'none', strokeWidth: '1', fill: 'none', fillRule: 'evenodd' },
            _react2.default.createElement(
                'g',
                { id: 'file-type-icon-set', transform: 'translate(-298.000000, -951.000000)', fill: color },
                _react2.default.createElement(
                    'g',
                    { id: '.bmp', transform: 'translate(298.000000, 951.000000)' },
                    _react2.default.createElement('path', { d: 'M0,2 L0,2 L2,0 L2,48 L0,46 L48,46 L46,48 L46,0 L48,2 L0,2 Z M0,0 L48,0 L48,48 L0,48 L0,0 L0,0 Z', id: 'Shape', fillRule: 'nonzero' }),
                    _react2.default.createElement('path', { d: 'M11,10.007484 L11,10.007484 L11,22.992516 C11,22.4492604 10.5542444,22 9.99815369,22 L38.0018463,22 C37.4441921,22 37,22.4481964 37,22.992516 L37,10.007484 C37,10.5507396 37.4457556,11 38.0018463,11 L9.99815369,11 C10.5558079,11 11,10.5518036 11,10.007484 L11,10.007484 Z M9,10.007484 C9,9.45106594 9.44736519,9 9.99815369,9 L38.0018463,9 C38.5531114,9 39,9.44892021 39,10.007484 L39,22.992516 C39,23.5489341 38.5526348,24 38.0018463,24 L9.99815369,24 C9.44688863,24 9,23.5510798 9,22.992516 L9,10.007484 L9,10.007484 Z M23.5,17.5 L27.5,21.5 L32.5,15.5 L38,24 L17,24 L23.5,17.5 Z M17,17 C18.1045695,17 19,16.1045695 19,15 C19,13.8954305 18.1045695,13 17,13 C15.8954305,13 15,13.8954305 15,15 C15,16.1045695 15.8954305,17 17,17 Z', id: 'img', fillRule: 'nonzero' }),
                    _react2.default.createElement('path', { d: 'M15.842,42.9385 C15.842,42.804166 15.8669164,42.6763339 15.91675,42.555 C15.9665836,42.4336661 16.0359162,42.3296671 16.12475,42.243 C16.2135838,42.1563329 16.3186661,42.0870003 16.44,42.035 C16.5613339,41.9829997 16.6913326,41.957 16.83,41.957 C16.964334,41.957 17.0921661,41.9829997 17.2135,42.035 C17.3348339,42.0870003 17.4388329,42.1563329 17.5255,42.243 C17.6121671,42.3296671 17.6814997,42.4336661 17.7335,42.555 C17.7855003,42.6763339 17.8115,42.804166 17.8115,42.9385 C17.8115,43.0771674 17.7855003,43.2060827 17.7335,43.32525 C17.6814997,43.4444173 17.6121671,43.5473329 17.5255,43.634 C17.4388329,43.7206671 17.3348339,43.7889164 17.2135,43.83875 C17.0921661,43.8885836 16.964334,43.9135 16.83,43.9135 C16.6913326,43.9135 16.5613339,43.8885836 16.44,43.83875 C16.3186661,43.7889164 16.2135838,43.7206671 16.12475,43.634 C16.0359162,43.5473329 15.9665836,43.4444173 15.91675,43.32525 C15.8669164,43.2060827 15.842,43.0771674 15.842,42.9385 L15.842,42.9385 Z M19.17,43.8225 L19.17,34.1635 L20.7755,34.1635 L20.7755,37.9725 C21.0398347,37.6908319 21.3388317,37.4665842 21.6725,37.29975 C22.0061683,37.1329158 22.3961644,37.0495 22.8425,37.0495 C23.2065018,37.0495 23.5390818,37.1242493 23.84025,37.27375 C24.1414182,37.4232507 24.4014156,37.6409986 24.62025,37.927 C24.8390844,38.2130014 25.0080827,38.5661646 25.12725,38.9865 C25.2464173,39.4068354 25.306,39.8899973 25.306,40.436 C25.306,40.9343358 25.238834,41.3958312 25.1045,41.8205 C24.970166,42.2451688 24.7784179,42.6134984 24.52925,42.9255 C24.2800821,43.2375016 23.9789184,43.4812491 23.62575,43.65675 C23.2725816,43.8322509 22.8771689,43.92 22.4395,43.92 C22.2358323,43.92 22.0495008,43.8994169 21.8805,43.85825 C21.7114992,43.8170831 21.5576674,43.759667 21.419,43.686 C21.2803326,43.612333 21.1514173,43.5224172 21.03225,43.41625 C20.9130827,43.3100828 20.7993339,43.1920007 20.691,43.062 L20.6195,43.5105 C20.5934999,43.6231672 20.5490836,43.7033331 20.48625,43.751 C20.4234164,43.7986669 20.3378339,43.8225 20.2295,43.8225 L19.17,43.8225 Z M22.29,38.2975 C21.9563317,38.2975 21.6714178,38.367916 21.43525,38.50875 C21.1990822,38.649584 20.9791677,38.8478321 20.7755,39.1035 L20.7755,42.0935 C20.9575009,42.3188345 21.1557489,42.4759162 21.37025,42.56475 C21.5847511,42.6535838 21.8176654,42.698 22.069,42.698 C22.3116679,42.698 22.530499,42.6525005 22.7255,42.5615 C22.920501,42.4704995 23.0862493,42.3318343 23.22275,42.1455 C23.3592507,41.9591657 23.464333,41.7240848 23.538,41.44025 C23.611667,41.1564152 23.6485,40.8216686 23.6485,40.436 C23.6485,40.0459981 23.6170836,39.7155847 23.55425,39.44475 C23.4914164,39.1739153 23.4015006,38.9540008 23.2845,38.785 C23.1674994,38.6159992 23.0255842,38.4925004 22.85875,38.4145 C22.6919158,38.3364996 22.5023344,38.2975 22.29,38.2975 L22.29,38.2975 Z M26.5605,43.8225 L26.5605,37.1535 L27.542,37.1535 C27.750001,37.1535 27.8864997,37.250999 27.9515,37.446 L28.0555,37.94 C28.1725006,37.8099994 28.294916,37.6908339 28.42275,37.5825 C28.550584,37.4741661 28.6870826,37.3810004 28.83225,37.303 C28.9774174,37.2249996 29.1334158,37.1632502 29.30025,37.11775 C29.4670842,37.0722498 29.6501657,37.0495 29.8495,37.0495 C30.2698354,37.0495 30.6154153,37.1632489 30.88625,37.39075 C31.1570847,37.6182511 31.359666,37.9204981 31.494,38.2975 C31.5980005,38.0764989 31.7279992,37.8869175 31.884,37.72875 C32.0400008,37.5705825 32.2111657,37.4416672 32.3975,37.342 C32.5838343,37.2423328 32.7820823,37.1686669 32.99225,37.121 C33.2024177,37.0733331 33.4136656,37.0495 33.626,37.0495 C33.9943352,37.0495 34.3214986,37.1058328 34.6075,37.2185 C34.8935014,37.3311672 35.133999,37.4958323 35.329,37.7125 C35.524001,37.9291678 35.6724162,38.1934984 35.77425,38.5055 C35.8760838,38.8175016 35.927,39.174998 35.927,39.578 L35.927,43.8225 L34.3215,43.8225 L34.3215,39.578 C34.3215,39.1533312 34.2283343,38.8337511 34.042,38.61925 C33.8556657,38.4047489 33.5826685,38.2975 33.223,38.2975 C33.0583325,38.2975 32.905584,38.3256664 32.76475,38.382 C32.623916,38.4383336 32.5004172,38.5195828 32.39425,38.62575 C32.2880828,38.7319172 32.204667,38.8651659 32.144,39.0255 C32.083333,39.1858341 32.053,39.369999 32.053,39.578 L32.053,43.8225 L30.441,43.8225 L30.441,39.578 C30.441,39.1316644 30.3510842,38.8066677 30.17125,38.603 C29.9914158,38.3993323 29.7260018,38.2975 29.375,38.2975 C29.1453322,38.2975 28.929751,38.3549161 28.72825,38.46975 C28.526749,38.5845839 28.3393342,38.7416657 28.166,38.941 L28.166,43.8225 L26.5605,43.8225 Z M37.5065,46 L37.5065,37.1535 L38.488,37.1535 C38.5920005,37.1535 38.680833,37.1773331 38.7545,37.225 C38.828167,37.2726669 38.8758332,37.3463328 38.8975,37.446 L39.0275,38.0635 C39.296168,37.7558318 39.6049149,37.5066676 39.95375,37.316 C40.3025851,37.1253324 40.7109977,37.03 41.179,37.03 C41.5430018,37.03 41.8755818,37.1058326 42.17675,37.2575 C42.4779182,37.4091674 42.7379156,37.6290819 42.95675,37.91725 C43.1755844,38.2054181 43.3445827,38.5607479 43.46375,38.98325 C43.5829173,39.4057521 43.6425,39.8899973 43.6425,40.436 C43.6425,40.9343358 43.575334,41.3958312 43.441,41.8205 C43.306666,42.2451688 43.1149179,42.6134984 42.86575,42.9255 C42.6165821,43.2375016 42.3154184,43.4812491 41.96225,43.65675 C41.6090816,43.8322509 41.2136689,43.92 40.776,43.92 C40.3989981,43.92 40.079418,43.8625839 39.81725,43.74775 C39.555082,43.6329161 39.320001,43.4736677 39.112,43.27 L39.112,46 L37.5065,46 Z M40.6265,38.2975 C40.2928317,38.2975 40.0079178,38.367916 39.77175,38.50875 C39.5355822,38.649584 39.3156677,38.8478321 39.112,39.1035 L39.112,42.0935 C39.2940009,42.3188345 39.4922489,42.4759162 39.70675,42.56475 C39.9212511,42.6535838 40.1519988,42.698 40.399,42.698 C40.6416679,42.698 40.8615823,42.6525005 41.05875,42.5615 C41.2559177,42.4704995 41.4227493,42.3318343 41.55925,42.1455 C41.6957507,41.9591657 41.800833,41.7240848 41.8745,41.44025 C41.948167,41.1564152 41.985,40.8216686 41.985,40.436 C41.985,40.0459981 41.9535836,39.7155847 41.89075,39.44475 C41.8279164,39.1739153 41.7380006,38.9540008 41.621,38.785 C41.5039994,38.6159992 41.3620842,38.4925004 41.19525,38.4145 C41.0284158,38.3364996 40.8388344,38.2975 40.6265,38.2975 L40.6265,38.2975 Z M0,30 L48,30 L48,45.0074602 C48,46.6601943 46.6661074,48 44.997385,48 L3.00261497,48 C1.34431651,48 0,46.6470745 0,45.0074602 L0,30 Z' })
                )
            )
        )
    );
};

Bmp.propTypes = {
    color: _propTypes2.default.string,
    size: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number])
};

Bmp.defaultProps = {
    color: '#FFFFFF',
    size: '24'
};

exports.default = Bmp;