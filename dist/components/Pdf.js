'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Pdf = function Pdf(props) {
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
                { id: 'file-type-icon-set', transform: 'translate(-688.000000, -873.000000)', fill: color },
                _react2.default.createElement(
                    'g',
                    { id: '.pdf', transform: 'translate(688.000000, 873.000000)' },
                    _react2.default.createElement('path', { d: 'M0,2 L0,2 L2,0 L2,48 L0,46 L48,46 L46,48 L46,0 L48,2 L0,2 Z M0,0 L48,0 L48,48 L0,48 L0,0 L0,0 Z', id: 'Shape', fillRule: 'nonzero' }),
                    _react2.default.createElement('path', { d: 'M17,12 L39,12 L39,14 L17,14 L17,12 Z M9,17 L39,17 L39,19 L9,19 L9,17 Z M9,22 L39,22 L39,24 L9,24 L9,22 Z M9,9 L14,9 L14,14 L9,14 L9,9 Z', id: 'text' }),
                    _react2.default.createElement('path', { d: 'M22.2315,42.9385 C22.2315,42.804166 22.2564164,42.6763339 22.30625,42.555 C22.3560836,42.4336661 22.4254162,42.3296671 22.51425,42.243 C22.6030838,42.1563329 22.7081661,42.0870003 22.8295,42.035 C22.9508339,41.9829997 23.0808326,41.957 23.2195,41.957 C23.353834,41.957 23.4816661,41.9829997 23.603,42.035 C23.7243339,42.0870003 23.8283329,42.1563329 23.915,42.243 C24.0016671,42.3296671 24.0709997,42.4336661 24.123,42.555 C24.1750003,42.6763339 24.201,42.804166 24.201,42.9385 C24.201,43.0771674 24.1750003,43.2060827 24.123,43.32525 C24.0709997,43.4444173 24.0016671,43.5473329 23.915,43.634 C23.8283329,43.7206671 23.7243339,43.7889164 23.603,43.83875 C23.4816661,43.8885836 23.353834,43.9135 23.2195,43.9135 C23.0808326,43.9135 22.9508339,43.8885836 22.8295,43.83875 C22.7081661,43.7889164 22.6030838,43.7206671 22.51425,43.634 C22.4254162,43.5473329 22.3560836,43.4444173 22.30625,43.32525 C22.2564164,43.2060827 22.2315,43.0771674 22.2315,42.9385 L22.2315,42.9385 Z M25.54,46 L25.54,37.1535 L26.5215,37.1535 C26.6255005,37.1535 26.714333,37.1773331 26.788,37.225 C26.861667,37.2726669 26.9093332,37.3463328 26.931,37.446 L27.061,38.0635 C27.329668,37.7558318 27.6384149,37.5066676 27.98725,37.316 C28.3360851,37.1253324 28.7444977,37.03 29.2125,37.03 C29.5765018,37.03 29.9090818,37.1058326 30.21025,37.2575 C30.5114182,37.4091674 30.7714156,37.6290819 30.99025,37.91725 C31.2090844,38.2054181 31.3780827,38.5607479 31.49725,38.98325 C31.6164173,39.4057521 31.676,39.8899973 31.676,40.436 C31.676,40.9343358 31.608834,41.3958312 31.4745,41.8205 C31.340166,42.2451688 31.1484179,42.6134984 30.89925,42.9255 C30.6500821,43.2375016 30.3489184,43.4812491 29.99575,43.65675 C29.6425816,43.8322509 29.2471689,43.92 28.8095,43.92 C28.4324981,43.92 28.112918,43.8625839 27.85075,43.74775 C27.588582,43.6329161 27.353501,43.4736677 27.1455,43.27 L27.1455,46 L25.54,46 Z M28.66,38.2975 C28.3263317,38.2975 28.0414178,38.367916 27.80525,38.50875 C27.5690822,38.649584 27.3491677,38.8478321 27.1455,39.1035 L27.1455,42.0935 C27.3275009,42.3188345 27.5257489,42.4759162 27.74025,42.56475 C27.9547511,42.6535838 28.1854988,42.698 28.4325,42.698 C28.6751679,42.698 28.8950823,42.6525005 29.09225,42.5615 C29.2894177,42.4704995 29.4562493,42.3318343 29.59275,42.1455 C29.7292507,41.9591657 29.834333,41.7240848 29.908,41.44025 C29.981667,41.1564152 30.0185,40.8216686 30.0185,40.436 C30.0185,40.045998 29.9870836,39.7155847 29.92425,39.44475 C29.8614164,39.1739153 29.7715006,38.9540008 29.6545,38.785 C29.5374994,38.6159992 29.3955842,38.4925004 29.22875,38.4145 C29.0619158,38.3364996 28.8723344,38.2975 28.66,38.2975 L28.66,38.2975 Z M37.5845,43.8225 C37.376499,43.8225 37.2400003,43.725001 37.175,43.53 L37.045,42.8865 C36.9063326,43.0425008 36.7611674,43.1833327 36.6095,43.309 C36.4578326,43.4346673 36.2942509,43.5429995 36.11875,43.634 C35.9432491,43.7250005 35.754751,43.7954164 35.55325,43.84525 C35.351749,43.8950836 35.1340012,43.92 34.9,43.92 C34.5359982,43.92 34.2023349,43.8441674 33.899,43.6925 C33.5956652,43.5408326 33.3345844,43.3209181 33.11575,43.03275 C32.8969156,42.7445819 32.7279173,42.3881688 32.60875,41.9635 C32.4895827,41.5388312 32.43,41.0535027 32.43,40.5075 C32.43,40.0134975 32.497166,39.5541688 32.6315,39.1295 C32.765834,38.7048312 32.9586654,38.3365016 33.21,38.0245 C33.4613346,37.7124984 33.7624982,37.4687509 34.1135,37.29325 C34.4645018,37.1177491 34.8588311,37.03 35.2965,37.03 C35.6691685,37.03 35.9876653,37.0895827 36.252,37.20875 C36.5163347,37.3279173 36.752499,37.4871657 36.9605,37.6865 L36.9605,34.1635 L38.566,34.1635 L38.566,43.8225 L37.5845,43.8225 Z M35.446,42.646 C35.7796683,42.646 36.0634988,42.5766674 36.2975,42.438 C36.5315012,42.2993326 36.752499,42.1021679 36.9605,41.8465 L36.9605,38.8565 C36.7784991,38.6354989 36.5802511,38.4795005 36.36575,38.3885 C36.1512489,38.2974995 35.9205012,38.252 35.6735,38.252 C35.4308321,38.252 35.2109177,38.2974995 35.01375,38.3885 C34.8165823,38.4795005 34.6497507,38.6170824 34.51325,38.80125 C34.3767493,38.9854176 34.271667,39.2194152 34.198,39.50325 C34.124333,39.7870848 34.0875,40.1218314 34.0875,40.5075 C34.0875,40.8975019 34.1189164,41.2279153 34.18175,41.49875 C34.2445836,41.7695847 34.3344994,41.9905825 34.4515,42.16175 C34.5685006,42.3329175 34.7114992,42.4564163 34.8805,42.53225 C35.0495008,42.6080837 35.237999,42.646 35.446,42.646 L35.446,42.646 Z M40.5875,43.8225 L40.5875,38.3625 L40.009,38.2715 C39.8833327,38.2498332 39.7825837,38.2065003 39.70675,38.1415 C39.6309163,38.0764997 39.593,37.9855006 39.593,37.8685 L39.593,37.212 L40.5875,37.212 L40.5875,36.718 C40.5875,36.3366648 40.6449161,35.9943348 40.75975,35.691 C40.8745839,35.3876651 41.0392489,35.1298344 41.25375,34.9175 C41.4682511,34.7051656 41.7293318,34.5426672 42.037,34.43 C42.3446682,34.3173328 42.6913314,34.261 43.077,34.261 C43.3846682,34.261 43.6706653,34.3021663 43.935,34.3845 L43.9025,35.1905 C43.8938333,35.3161673 43.8353339,35.3941665 43.727,35.4245 C43.6186661,35.4548335 43.4930007,35.47 43.35,35.47 C43.1593324,35.47 42.9892507,35.4905831 42.83975,35.53175 C42.6902493,35.5729169 42.5635005,35.6444162 42.4595,35.74625 C42.3554995,35.8480838 42.2764169,35.9824158 42.22225,36.14925 C42.1680831,36.3160842 42.141,36.5229988 42.141,36.77 L42.141,37.212 L43.8765,37.212 L43.8765,38.356 L42.193,38.356 L42.193,43.8225 L40.5875,43.8225 Z M0,30 L48,30 L48,45.0074602 C48,46.6601943 46.6661074,48 44.997385,48 L3.00261497,48 C1.34431651,48 0,46.6470745 0,45.0074602 L0,30 Z' })
                )
            )
        )
    );
};

Pdf.propTypes = {
    color: _propTypes2.default.string,
    size: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number])
};

Pdf.defaultProps = {
    color: '#FFFFFF',
    size: '24'
};

exports.default = Pdf;