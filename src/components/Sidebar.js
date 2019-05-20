import React from 'react';
import PropTypes from 'prop-types';
import style from './Sidebar.css';

function Sidebar({ children }) {
  return (
    <nav className={style.Sidebar}>
      {children}
    </nav>
  );
}

Sidebar.propTypes = {
  children: PropTypes.node
};

export default Sidebar;
