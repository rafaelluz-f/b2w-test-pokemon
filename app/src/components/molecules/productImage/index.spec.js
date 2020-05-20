import { Provider } from "react-redux";
import store from "../../../store";
import ProductImage from "./";

describe("<ProductImage />", () => {
  const component = (
    <Provider store={store}>
      <ProductImage />
    </Provider>
  );

  const mounted = mount(component);

  it("should mount correctly ProductImage component", () => {
    expect(mounted.find(".productImage")).toHaveLength(2);
    expect(mounted).toMatchSnapshot();
  });

  it("should unmount correctly ProductImage component", () => {
    expect(mounted.unmount()).toEqual({});
  });
});
