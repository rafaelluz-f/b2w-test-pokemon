import { Provider } from "react-redux";
import store from "../../../store";
import CartTotal from "./";

describe("<CartTotal />", () => {
  const component = (
    <Provider store={store}>
      <CartTotal />
    </Provider>
  );

  const mounted = mount(component);

  it("should mount correctly CartTotal component", () => {
    expect(mounted.find(".cartTotal")).toHaveLength(2);
    expect(mounted).toMatchSnapshot();
  });

  it("should unmount correctly CartTotal component", () => {
    expect(mounted.unmount()).toEqual({});
  });
});
