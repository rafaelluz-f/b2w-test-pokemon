import { Provider } from "react-redux";
import store from "../../../store";
import CartItemList from "./";

describe("<ProductPrice />", () => {
  const component = (
    <Provider store={store}>
      <CartItemList />
    </Provider>
  );

  const mounted = mount(component);

  it("should mount correctly CartItemList component", () => {
    expect(mounted.find(".cartItemList")).toHaveLength(2);
    expect(mounted).toMatchSnapshot();
  });

  it("should unmount correctly CartItemList component", () => {
    expect(mounted.unmount()).toEqual({});
  });
});
