
import React from 'react';
import PropTypes from 'prop-types';

const Bmp = props => {
  return (
    <svg width={this.props.width} height={this.props.height}  xmlns="http://www.w3.org/2000/svg"><g fill={this.props.color} fill-rule="evenodd"><path d="M0 2l2-2v48l-2-2h48l-2 2V0l2 2H0zm0-2h48v48H0V0z" fill-rule="nonzero"/><path d="M11 10.007v12.986A.999.999 0 0 0 9.998 22h28.004a.997.997 0 0 0-1.002.993V10.007c0 .544.446.993 1.002.993H9.998A.997.997 0 0 0 11 10.007zm-2 0C9 9.451 9.447 9 9.998 9h28.004c.551 0 .998.449.998 1.007v12.986c0 .556-.447 1.007-.998 1.007H9.998C9.447 24 9 23.551 9 22.993V10.007zM23.5 17.5l4 4 5-6L38 24H17l6.5-6.5zM17 17a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" fill-rule="nonzero"/><path d="M15.842 42.938a1 1 0 0 1 .075-.383.916.916 0 0 1 .208-.312 1.024 1.024 0 0 1 .705-.286.984.984 0 0 1 .696.286.984.984 0 0 1 .285.696.993.993 0 0 1-.286.696 1 1 0 0 1-.696.28 1.016 1.016 0 0 1-.704-.281.924.924 0 0 1-.208-.309.992.992 0 0 1-.075-.387zm3.328.884v-9.659h1.605v3.81c.265-.282.564-.506.898-.673.333-.167.723-.25 1.17-.25.364 0 .696.074.997.224.301.15.561.367.78.653.22.286.388.64.507 1.06.12.42.179.903.179 1.449 0 .498-.067.96-.201 1.385a3.388 3.388 0 0 1-.576 1.105c-.249.312-.55.555-.903.73a2.629 2.629 0 0 1-1.187.264c-.203 0-.39-.02-.558-.062a1.977 1.977 0 0 1-.462-.172 1.967 1.967 0 0 1-.387-.27 3.318 3.318 0 0 1-.341-.354l-.072.449c-.026.112-.07.192-.133.24a.415.415 0 0 1-.256.072h-1.06zm3.12-5.525c-.334 0-.619.07-.855.212-.236.14-.456.339-.66.594v2.99c.183.226.38.383.595.472.215.089.448.133.699.133.243 0 .461-.045.657-.136.195-.092.36-.23.497-.416.136-.187.241-.422.315-.706a4.03 4.03 0 0 0 .11-1.004c0-.39-.03-.72-.094-.991a1.915 1.915 0 0 0-.27-.66 1.066 1.066 0 0 0-.425-.37 1.328 1.328 0 0 0-.569-.117zm4.27 5.526v-6.67h.982c.208 0 .344.098.41.293l.103.494c.118-.13.24-.25.368-.357a2.218 2.218 0 0 1 .877-.465c.167-.046.35-.068.55-.068.42 0 .765.113 1.036.34.271.228.474.53.608.907.104-.22.234-.41.39-.568.156-.158.327-.287.514-.387.186-.1.384-.173.594-.221.21-.048.422-.072.634-.072.368 0 .695.057.982.17.286.112.526.277.721.493.195.217.343.481.445.793.102.313.153.67.153 1.073v4.244h-1.605v-4.244c0-.425-.094-.744-.28-.959-.186-.214-.46-.322-.819-.322-.165 0-.317.029-.458.085-.141.056-.265.138-.37.244-.107.106-.19.24-.251.4-.06.16-.091.344-.091.552v4.244h-1.612v-4.244c0-.446-.09-.771-.27-.975-.18-.204-.445-.306-.796-.306-.23 0-.445.058-.647.173a2.178 2.178 0 0 0-.562.471v4.881h-1.605zM37.508 46v-8.846h.981a.48.48 0 0 1 .267.071.334.334 0 0 1 .142.221l.13.617c.27-.307.578-.556.927-.747.349-.19.757-.286 1.225-.286.364 0 .697.076.998.227.3.152.56.372.78.66.219.288.388.644.507 1.066.119.423.178.907.178 1.453 0 .498-.067.96-.201 1.385a3.388 3.388 0 0 1-.575 1.105c-.25.312-.55.555-.904.73a2.629 2.629 0 0 1-1.186.264c-.377 0-.697-.057-.959-.172a2.347 2.347 0 0 1-.705-.478V46h-1.605zm3.12-7.703c-.334 0-.62.07-.855.212-.236.14-.456.339-.66.594v2.99c.182.226.38.383.595.472.214.089.445.133.692.133.243 0 .463-.045.66-.136a1.28 1.28 0 0 0 .5-.416c.137-.187.242-.422.316-.706a4.03 4.03 0 0 0 .11-1.004c0-.39-.031-.72-.094-.991a1.915 1.915 0 0 0-.27-.66 1.066 1.066 0 0 0-.426-.37 1.328 1.328 0 0 0-.569-.117zM0 30h48v15.007A2.99 2.99 0 0 1 44.997 48H3.003A3.006 3.006 0 0 1 0 45.007V30z"/></g></svg>
  );
};

Bmp.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Bmp.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default Bmp;