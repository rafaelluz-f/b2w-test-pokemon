import { Provider } from "react-redux";
import store from "../../../store";
import CartFixedContainer from "./";

describe("<CartFixedContainer />", () => {
  const component = (
    <Provider store={store}>
      <CartFixedContainer />
    </Provider>
  );

  const mounted = mount(component);

  it("should mount correctly CartFixedContainer component", () => {
    expect(mounted.find(".cartFixedContainer")).toHaveLength(0);
    expect(mounted).toMatchSnapshot();
  });

  it("should unmount correctly CartFixedContainer component", () => {
    expect(mounted.unmount()).toEqual({});
  });
});
