import { Provider } from "react-redux";
import store from "../../../store";
import ProductCard from "./";

describe("<ProductCard />", () => {
  const component = (
    <Provider store={store}>
      <ProductCard />
    </Provider>
  );

  const mounted = mount(component);

  it("should mount correctly ProductCard component", () => {
    expect(mounted.find(".productCard")).toHaveLength(2);
  });

  it("should unmount correctly ProductCard component", () => {
    expect(mounted.unmount()).toEqual({});
  });
});
