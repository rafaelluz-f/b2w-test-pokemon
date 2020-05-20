import { Provider } from "react-redux";
import store from "../../../store";
import CartFields from "./";

describe("<CartFields />", () => {
  const component = (
    <Provider store={store}>
      <CartFields />
    </Provider>
  );

  const mounted = mount(component);

  it("should mount correctly CartFields component", () => {
    expect(mounted.find(".cartFields")).toHaveLength(2);
    expect(mounted).toMatchSnapshot();
  });

  it("should unmount correctly CartFields component", () => {
    expect(mounted.unmount()).toEqual({});
  });
});
