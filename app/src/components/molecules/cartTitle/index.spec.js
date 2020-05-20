import { Provider } from "react-redux";
import store from "../../../store";
import CartTitle from "./";

describe("<CartTitle />", () => {
  const component = (
    <Provider store={store}>
      <CartTitle />
    </Provider>
  );

  const mounted = mount(component);

  it("should mount correctly CartTitle component", () => {
    expect(mounted.find(".cartTitle")).toHaveLength(2);
    expect(mounted).toMatchSnapshot();
  });

  it("should unmount correctly CartTitle component", () => {
    expect(mounted.unmount()).toEqual({});
  });
});
