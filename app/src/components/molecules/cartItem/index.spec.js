import { Provider } from "react-redux";
import store from "../../../store";
import CartItem from "./";

describe("<CartItem />", () => {
  const component = (
    <Provider store={store}>
      <CartItem />
    </Provider>
  );

  const mounted = mount(component);

  it("should mount correctly CartItem component", () => {
    expect(mounted.find(".cartItem")).toHaveLength(2);
    expect(mounted).toMatchSnapshot();
  });

  it("should unmount correctly CartItem component", () => {
    expect(mounted.unmount()).toEqual({});
  });
});
