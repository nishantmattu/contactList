import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import ContactList from "./components/contacts_list";
import promise from "redux-promise";
import { createStore, applyMiddleware } from "redux";
import reducers from "./reducers";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};
const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

const App = () => (
  <Provider store={createStoreWithMiddleware(reducers)}>
    <ContactList contacts={[]} />
  </Provider>
);
render(<App />, document.getElementById("root"));
// <BrowserRouter>
//   <Switch>
//     <Route exact path="/" component={ContactList} />
//     <Route path="/add" component={ContactAdd} />
//   </Switch>
// </BrowserRouter>
