import { Provider } from "react-redux";
import store from "../../../store";
import ProductCardList from "./";

describe("<ProductPrice />", () => {
  const component = (
    <Provider store={store}>
      <ProductCardList />
    </Provider>
  );

  const mounted = mount(component);

  it("should mount correctly ProductCardList component", () => {
    expect(mounted.find(".productCardList")).toHaveLength(2);
  });

  it("should unmount correctly ProductCardList component", () => {
    expect(mounted.unmount()).toEqual({});
  });
});
