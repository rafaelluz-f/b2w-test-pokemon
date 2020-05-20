import { Provider } from "react-redux";
import store from "../../../store";
import ProductPrice from "./";

describe("<ProductPrice />", () => {
  const component = (
    <Provider store={store}>
      <ProductPrice />
    </Provider>
  );

  const mounted = mount(component);

  it("should mount correctly ProductPrice component", () => {
    expect(mounted.find(".productPrice")).toHaveLength(2);
    expect(mounted).toMatchSnapshot();
  });

  it("should unmount correctly ProductPrice component", () => {
    expect(mounted.unmount()).toEqual({});
  });
});
