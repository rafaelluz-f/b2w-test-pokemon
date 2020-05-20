import { Provider } from "react-redux";
import store from "../../../store";
import ProductName from "./";

describe("<ProductName />", () => {
  const component = (
    <Provider store={store}>
      <ProductName />
    </Provider>
  );

  const mounted = mount(component);

  it("should mount correctly ProductName component", () => {
    expect(mounted.find(".productName")).toHaveLength(2);
    expect(mounted).toMatchSnapshot();
  });

  it("should unmount correctly ProductName component", () => {
    expect(mounted.unmount()).toEqual({});
  });
});
