
import React from 'react';
import PropTypes from 'prop-types';

const Mp3 = props => {
	const { size, color } = props;
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g fill={color} ><path d="M0 2l2-2v48l-2-2h48l-2 2V0l2 2H0zm0-2h48v48H0V0z" fill-rule="nonzero"/><path d="M29.69 21.025V8.935L19.194 10.43v9.72a3.32 3.32 0 0 0-1.063.185c-1.307.45-2.104 1.58-1.78 2.522.325.942 1.648 1.342 2.955.892.995-.343 1.694-1.079 1.828-1.826h.062V16.02l2.766-.428v-1.914l-2.766.429V12.47l6.493-.925v8.252a3.339 3.339 0 0 0-.995.184c-1.307.45-2.104 1.579-1.779 2.522.325.942 1.647 1.341 2.954.891 1.238-.426 2.018-1.46 1.821-2.37zM16 42.619a1 1 0 0 1 .075-.383.916.916 0 0 1 .208-.313 1.024 1.024 0 0 1 .705-.285.984.984 0 0 1 .695.286.984.984 0 0 1 .287.695.993.993 0 0 1-.286.696 1 1 0 0 1-.695.28 1.016 1.016 0 0 1-.706-.28.924.924 0 0 1-.208-.31.992.992 0 0 1-.075-.386zm3.308.884v-6.669h.982c.208 0 .344.097.41.292l.104.495c.117-.13.239-.25.367-.358a2.218 2.218 0 0 1 .877-.465c.167-.045.35-.068.55-.068.42 0 .765.114 1.036.341.271.228.474.53.608.907.104-.221.234-.41.39-.569.156-.158.327-.287.513-.386.187-.1.385-.174.595-.222.21-.047.422-.071.634-.071.368 0 .695.056.982.169.286.113.526.277.721.494.195.217.343.481.445.793.102.312.153.67.153 1.072v4.245H27.07v-4.245c0-.424-.094-.744-.28-.958-.186-.215-.46-.322-.819-.322-.165 0-.317.028-.458.084-.141.057-.265.138-.37.244-.107.106-.19.24-.251.4-.06.16-.091.344-.091.552v4.245h-1.612v-4.245c0-.446-.09-.77-.27-.975-.18-.203-.445-.305-.796-.305-.23 0-.445.057-.647.172a2.178 2.178 0 0 0-.562.471v4.882h-1.606zm10.947 2.178v-8.847h.981a.48.48 0 0 1 .266.072.334.334 0 0 1 .143.22l.13.618c.27-.308.578-.557.927-.748.349-.19.757-.285 1.225-.285.364 0 .697.075.998.227.3.152.56.372.78.66.219.288.388.643.507 1.066.119.422.178.906.178 1.453 0 .498-.067.96-.201 1.384a3.388 3.388 0 0 1-.575 1.105c-.25.312-.55.556-.904.731a2.629 2.629 0 0 1-1.186.263c-.377 0-.697-.057-.959-.172a2.347 2.347 0 0 1-.705-.477v2.73h-1.605zm3.12-7.703c-.334 0-.62.07-.855.211-.236.141-.456.34-.66.595v2.99c.182.225.38.382.595.471.214.09.445.134.692.134.243 0 .463-.046.66-.137a1.28 1.28 0 0 0 .5-.416c.137-.186.242-.421.316-.705a4.03 4.03 0 0 0 .11-1.005c0-.39-.031-.72-.094-.99a1.915 1.915 0 0 0-.27-.66 1.066 1.066 0 0 0-.426-.371 1.328 1.328 0 0 0-.569-.117zM40.81 34c.434 0 .825.062 1.174.185.349.124.646.295.893.514a2.25 2.25 0 0 1 .767 1.726c0 .299-.033.562-.1.79a1.838 1.838 0 0 1-.293.594 1.773 1.773 0 0 1-.468.429 2.838 2.838 0 0 1-.627.293c.563.177.984.448 1.261.812.277.364.416.821.416 1.371 0 .469-.087.882-.26 1.242-.173.36-.407.662-.702.907a3.06 3.06 0 0 1-1.024.556 3.971 3.971 0 0 1-1.232.188c-.472 0-.883-.054-1.235-.163a2.681 2.681 0 0 1-.916-.48 2.905 2.905 0 0 1-.663-.78 5.264 5.264 0 0 1-.468-1.066l.709-.293a.932.932 0 0 1 .37-.078.63.63 0 0 1 .302.072.487.487 0 0 1 .205.207c.078.152.164.302.257.449.093.147.204.278.334.393.13.115.283.208.459.28.175.071.384.107.627.107.273 0 .511-.044.715-.133.204-.09.374-.205.51-.348a1.472 1.472 0 0 0 .406-1.008c0-.225-.023-.43-.071-.614a.91.91 0 0 0-.299-.471c-.152-.13-.37-.232-.653-.305-.284-.074-.664-.111-1.141-.111v-1.144c.394-.004.721-.041.981-.11.26-.07.467-.166.621-.29a.98.98 0 0 0 .322-.445c.06-.173.091-.364.091-.572 0-.446-.121-.783-.364-1.01-.243-.228-.574-.342-.995-.342-.38 0-.697.1-.949.302a1.58 1.58 0 0 0-.526.777c-.052.165-.123.283-.215.354a.562.562 0 0 1-.357.108c-.07 0-.143-.007-.221-.02l-.845-.15c.065-.45.19-.846.377-1.186.186-.34.42-.624.699-.851.28-.228.6-.399.962-.514.362-.115.75-.172 1.166-.172zM0 30h48v15.007A2.99 2.99 0 0 1 44.997 48H3.003A3.006 3.006 0 0 1 0 45.007V30z"/></g></svg>
  );
};

Mp3.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Mp3.defaultProps = {
  color: '#FFFFFF',
  size: '24',
};

export default Mp3;