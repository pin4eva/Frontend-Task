import React from "react";
import Routes from "routes";
import "styles/index.scss";
import { Provider } from "react-redux";
import { store } from "store";

const App = () => {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
};

export default App;
