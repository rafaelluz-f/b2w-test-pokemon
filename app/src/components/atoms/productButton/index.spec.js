import { Provider } from "react-redux";
import store from "../../../store";
import ProductButton from "./";

describe("<ProductButton />", () => {
  const component = (
    <Provider store={store}>
      <ProductButton />
    </Provider>
  );

  const mounted = mount(component);

  it("should mount correctly ProductButton component", () => {
    expect(mounted.find(".productButton")).toHaveLength(2);
    expect(mounted).toMatchSnapshot();
  });

  it("should unmount correctly ProductButton component", () => {
    expect(mounted.unmount()).toEqual({});
  });
});
