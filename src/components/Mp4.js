
import React from 'react';
import PropTypes from 'prop-types';

const Mp4 = props => {
	const { size, color } = props;
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g fill={color} ><path d="M0 2l2-2v48l-2-2h48l-2 2V0l2 2H0zm0-2h48v48H0V0z" fill-rule="nonzero"/><path d="M12 10h25v12.5H12V10zm11.303 8.724l4.061-2.031c.485-.243.49-.641 0-.886l-4.061-2.03c-.485-.243-.886.005-.886.56v3.827c0 .564.396.804.886.56zM16 42.522a1 1 0 0 1 .075-.384.916.916 0 0 1 .208-.312 1.024 1.024 0 0 1 .705-.286.984.984 0 0 1 .695.286.984.984 0 0 1 .287.696.993.993 0 0 1-.286.695 1 1 0 0 1-.695.28 1.016 1.016 0 0 1-.706-.28.924.924 0 0 1-.208-.309.992.992 0 0 1-.075-.386zm3.308.884v-6.67h.982c.208 0 .344.098.41.293l.104.494c.117-.13.239-.25.367-.358a2.218 2.218 0 0 1 .877-.465c.167-.045.35-.068.55-.068.42 0 .765.114 1.036.342.271.227.474.53.608.907.104-.222.234-.411.39-.57.156-.157.327-.286.513-.386.187-.1.385-.173.595-.221.21-.048.422-.072.634-.072.368 0 .695.057.982.17.286.112.526.277.721.493.195.217.343.481.445.794.102.312.153.669.153 1.072v4.245H27.07V39.16c0-.425-.094-.744-.28-.959-.186-.214-.46-.322-.819-.322-.165 0-.317.029-.458.085-.141.056-.265.138-.37.244-.107.106-.19.24-.251.4-.06.16-.091.344-.091.552v4.245h-1.612V39.16c0-.446-.09-.771-.27-.975-.18-.204-.445-.306-.796-.306-.23 0-.445.058-.647.173a2.178 2.178 0 0 0-.562.471v4.882h-1.606zm10.947 2.177v-8.846h.981a.48.48 0 0 1 .267.071.334.334 0 0 1 .142.221l.13.617c.27-.307.578-.556.927-.747.349-.19.757-.286 1.225-.286.364 0 .697.076.998.227.3.152.56.372.78.66.219.288.388.644.507 1.066.119.423.178.907.178 1.453 0 .498-.067.96-.201 1.385a3.388 3.388 0 0 1-.575 1.104c-.25.313-.55.556-.904.732a2.629 2.629 0 0 1-1.186.263c-.377 0-.697-.057-.959-.172a2.347 2.347 0 0 1-.705-.478v2.73h-1.605zm3.12-7.703c-.334 0-.62.07-.855.212-.236.14-.456.339-.66.595v2.99c.182.225.38.382.595.47.214.09.445.134.692.134.243 0 .463-.045.66-.136a1.28 1.28 0 0 0 .5-.417c.137-.186.242-.42.316-.705a4.03 4.03 0 0 0 .11-1.004c0-.39-.031-.72-.094-.991a1.915 1.915 0 0 0-.27-.66 1.066 1.066 0 0 0-.426-.37 1.328 1.328 0 0 0-.569-.117zm9.496 1.983h1.183v.93a.325.325 0 0 1-.085.224c-.056.063-.138.094-.247.094h-.851v2.295h-1.404V41.11h-3.965a.44.44 0 0 1-.286-.1.435.435 0 0 1-.156-.251l-.163-.813L41.35 34h1.521v5.863zm-1.404-3.075a8.342 8.342 0 0 1 .059-.948l-2.919 4.023h2.86v-3.075zM0 30h48v15.007A2.99 2.99 0 0 1 44.997 48H3.003A3.006 3.006 0 0 1 0 45.007V30z"/></g></svg>
  );
};

Mp4.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Mp4.defaultProps = {
  color: '#FFFFFF',
  size: '24',
};

export default Mp4;