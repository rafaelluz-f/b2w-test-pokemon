import { Provider } from "react-redux";
import store from "../../../store";
import CartButton from "./";

describe("<CartButton />", () => {
  const component = (
    <Provider store={store}>
      <CartButton />
    </Provider>
  );

  const mounted = mount(component);

  it("should mount correctly CartButton component", () => {
    expect(mounted.find(".cartButton")).toHaveLength(2);
    expect(mounted).toMatchSnapshot();
  });

  it("should unmount correctly CartButton component", () => {
    expect(mounted.unmount()).toEqual({});
  });
});
