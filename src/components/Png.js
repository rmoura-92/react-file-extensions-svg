
import React from 'react';
import PropTypes from 'prop-types';

const Png = props => {
	const { size, color } = props;
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g fill={color} ><path d="M0 2l2-2v48l-2-2h48l-2 2V0l2 2H0zm0-2h48v48H0V0z" fill-rule="nonzero"/><path d="M11 10.007v12.986A.999.999 0 0 0 9.998 22h28.004a.997.997 0 0 0-1.002.993V10.007c0 .544.446.993 1.002.993H9.998A.997.997 0 0 0 11 10.007zm-2 0C9 9.451 9.447 9 9.998 9h28.004c.551 0 .998.449.998 1.007v12.986c0 .556-.447 1.007-.998 1.007H9.998C9.447 24 9 23.551 9 22.993V10.007zM23.5 17.5l4 4 5-6L38 24H17l6.5-6.5zM17 17a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" fill-rule="nonzero"/><path d="M20.08 42.77a1 1 0 0 1 .075-.384.916.916 0 0 1 .208-.312 1.024 1.024 0 0 1 .705-.286.984.984 0 0 1 .695.286.984.984 0 0 1 .286.696.993.993 0 0 1-.286.696 1 1 0 0 1-.695.28 1.016 1.016 0 0 1-.705-.281.924.924 0 0 1-.208-.309.992.992 0 0 1-.075-.386zm3.309 3.061v-8.847h.981a.48.48 0 0 1 .267.072.334.334 0 0 1 .142.221l.13.617c.27-.307.578-.556.927-.747.349-.19.757-.286 1.225-.286.364 0 .697.076.998.228.3.151.56.371.78.66.219.287.388.643.507 1.065.119.423.178.907.178 1.453 0 .498-.067.96-.201 1.384a3.388 3.388 0 0 1-.575 1.105c-.25.313-.55.556-.904.732a2.629 2.629 0 0 1-1.186.263c-.377 0-.697-.057-.959-.172a2.347 2.347 0 0 1-.705-.478v2.73h-1.605zm3.12-7.703c-.334 0-.62.07-.855.212-.236.14-.456.339-.66.594v2.99c.182.226.38.383.595.472.214.089.445.133.692.133.243 0 .463-.045.66-.137a1.28 1.28 0 0 0 .5-.416c.137-.186.242-.42.316-.705a4.03 4.03 0 0 0 .11-1.004c0-.39-.031-.72-.094-.991a1.915 1.915 0 0 0-.27-.66 1.066 1.066 0 0 0-.426-.37 1.328 1.328 0 0 0-.569-.117zm4.231 5.526v-6.67h.982c.208 0 .344.098.409.293l.11.526c.135-.138.277-.264.426-.377.15-.112.308-.21.475-.292.167-.082.345-.145.536-.188.19-.044.399-.066.624-.066.364 0 .687.062.968.186.282.123.517.297.706.52.188.223.331.49.429.8.097.31.146.65.146 1.023v4.245h-1.605v-4.245c0-.407-.095-.723-.283-.946-.189-.223-.471-.334-.848-.334-.278 0-.538.062-.78.188a2.795 2.795 0 0 0-.69.514v4.822H30.74zm9.698-6.787c.286 0 .555.03.806.088.251.059.481.144.689.257h1.917v.598c0 .1-.025.178-.078.234-.052.056-.14.095-.266.117l-.598.11a2.066 2.066 0 0 1 .136.755c0 .329-.066.627-.198.893a2.003 2.003 0 0 1-.546.68c-.232.186-.507.33-.825.432a3.387 3.387 0 0 1-1.037.153c-.251 0-.496-.024-.735-.072-.208.126-.312.266-.312.422 0 .135.062.233.186.296.123.063.286.107.487.134.202.026.43.042.686.048.256.007.518.02.786.042.27.022.531.06.787.114.256.054.484.14.686.257.201.117.364.276.487.478.124.201.185.46.185.776 0 .295-.072.581-.217.858a2.305 2.305 0 0 1-.63.742 3.293 3.293 0 0 1-1.012.523 4.331 4.331 0 0 1-1.364.198c-.508 0-.947-.049-1.32-.146a3.08 3.08 0 0 1-.926-.39 1.691 1.691 0 0 1-.55-.563 1.318 1.318 0 0 1-.181-.663c0-.312.095-.574.285-.786.191-.212.455-.381.794-.507a1.106 1.106 0 0 1-.397-.364c-.1-.152-.15-.349-.15-.592 0-.1.018-.202.053-.308.034-.106.087-.211.159-.316.071-.104.161-.202.27-.295.108-.093.236-.177.383-.25a2.104 2.104 0 0 1-.796-.728 1.944 1.944 0 0 1-.29-1.066c0-.33.067-.628.199-.894.132-.267.316-.494.552-.683a2.52 2.52 0 0 1 .839-.432c.323-.1.675-.15 1.056-.15zm1.761 7.086a.444.444 0 0 0-.116-.319.769.769 0 0 0-.319-.192 2.356 2.356 0 0 0-.471-.1 8.691 8.691 0 0 0-.572-.05c-.202-.01-.41-.02-.624-.032a7.87 7.87 0 0 1-.621-.055c-.182.1-.328.218-.439.354a.728.728 0 0 0-.166.472c0 .117.03.226.088.328.059.102.152.19.28.263.128.074.293.131.497.172.204.041.453.062.748.062.299 0 .556-.023.773-.068a1.86 1.86 0 0 0 .536-.189.811.811 0 0 0 .309-.286.699.699 0 0 0 .098-.36zm-1.761-3.797c.2 0 .373-.027.52-.08a1.02 1.02 0 0 0 .367-.225.924.924 0 0 0 .221-.344c.05-.135.075-.282.075-.442 0-.33-.099-.59-.296-.784-.197-.193-.493-.289-.887-.289s-.69.096-.887.29c-.197.192-.296.453-.296.783 0 .156.025.3.075.435.05.134.123.25.22.348a.993.993 0 0 0 .371.227c.15.054.322.081.517.081zM0 30h48v15.007A2.99 2.99 0 0 1 44.997 48H3.003A3.006 3.006 0 0 1 0 45.007V30z"/></g></svg>
  );
};

Png.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Png.defaultProps = {
  color: '#FFFFFF',
  size: '24',
};

export default Png;