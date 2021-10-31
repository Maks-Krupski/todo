import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from "react-redux";
import store from "../../store";

function Launcher({ children }) {
  return (
    <React.StrictMode>
      <Provider store={store}>
        { children }
      </Provider>
    </React.StrictMode>
  );
}

Launcher.propTypes = { children: PropTypes.node.isRequired };

export default Launcher;
