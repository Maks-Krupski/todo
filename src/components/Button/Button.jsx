import React from 'react';
import PropTypes from 'prop-types';
import './Button.scss';

export const Button = React.forwardRef(({ children, className, onClick }, ref) => (
  <button className={`button ${className}`} onClick={onClick} ref={ref}>{children}</button>
));

Button.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  className: '',
  onClick: () => null,
};
