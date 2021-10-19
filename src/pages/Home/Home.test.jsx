import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import Home from ".";
import createStore from "../../redux/store";
import { USER_KEY } from "../../utils/constants";

test("renders home page", () => {
  const userData = localStorage.getItem(USER_KEY);
  let store = createStore({ user: userData });
  render(
    <Provider store={store}>
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    </Provider>
  );
});
