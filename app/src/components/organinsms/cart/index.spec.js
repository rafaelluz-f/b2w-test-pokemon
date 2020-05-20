import { Provider } from "react-redux";
import store from "../../../store";
import Cart from "./";

describe("<ProductPrice />", () => {
  const component = (
    <Provider store={store}>
      <Cart />
    </Provider>
  );

  const mounted = mount(component);

  it("should mount correctly Cart component", () => {
    expect(mounted.find(".cart")).toHaveLength(2);
    expect(mounted).toMatchSnapshot();
  });

  it("should unmount correctly Cart component", () => {
    expect(mounted.unmount()).toEqual({});
  });
});
