import { render, screen, waitFor } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import Home from "../Pages/Home";

describe("Test the Home Page", () => {
  const initialState = { output: 10 };
  const mockStore = configureStore();
  let store;
  test("home page testing", async () => {
    store = mockStore(initialState);
    render(
      <Provider store={store}>
        <Home />
      </Provider>
    );
    const inputEl = screen.getByTestId("seacrh-input");
    await waitFor(() => expect(inputEl).toBeInTheDocument());
    console.warn(inputEl);
  });
  test("render the login form with two buttons", async () => {
    render(
      <Provider store={store}>
        <Home />
      </Provider>
    );
    const cardList = screen.getByTestId("card-list");
    await waitFor(() => expect(cardList).toBeInTheDocument());
  });
});
