
import React from 'react';
import PropTypes from 'prop-types';

const Pr = props => {
  return (
    <svg width={this.props.width} height={this.props.height}  xmlns="http://www.w3.org/2000/svg"><g fill={this.props.color} fill-rule="evenodd"><path d="M0 2l2-2v48l-2-2h48l-2 2V0l2 2H0zm0-2h48v48H0V0z" fill-rule="nonzero"/><path d="M13 34.37h3.66v-7.62c.48.09 1.11.12 1.8.12 2.61 0 4.92-.69 6.39-2.16 1.14-1.08 1.74-2.67 1.74-4.59 0-1.89-.78-3.48-1.98-4.47-1.29-1.08-3.27-1.65-5.97-1.65-2.49 0-4.32.18-5.64.42v19.95zM16.66 17c.39-.09 1.11-.18 2.13-.18 2.55 0 4.11 1.2 4.11 3.45 0 2.37-1.68 3.72-4.44 3.72-.75 0-1.35-.03-1.8-.15V17zm12.6 17.37h3.69v-7.56c0-.42.06-.81.12-1.14.33-1.65 1.53-2.79 3.3-2.79.45 0 .78.06 1.08.12v-3.48c-.3-.06-.51-.09-.87-.09-1.56 0-3.27 1.05-3.99 3.12h-.12l-.12-2.79h-3.21c.09 1.32.12 2.73.12 4.71v9.9z"/></g></svg>
  );
};

Pr.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Pr.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default Pr;