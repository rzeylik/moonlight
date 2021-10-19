import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import Layout from ".";
import createStore from "../../redux/store";
import { USER_KEY } from "../../utils/constants";

test("renders layout", () => {
  const userData = localStorage.getItem(USER_KEY);
  let store = createStore({ user: userData });
  render(
    <Provider store={store}>
      <BrowserRouter>
        <Layout />
      </BrowserRouter>
    </Provider>
  );
});
