import { Provider } from "react-redux";
import store from "../../../store";
import FloatFooterBar from "./";

describe("<ProductPrice />", () => {
  const component = (
    <Provider store={store}>
      <FloatFooterBar />
    </Provider>
  );

  const mounted = mount(component);

  it("should mount correctly FloatFooterBar component", () => {
    expect(mounted.find(".floatFooterBar")).toHaveLength(2);
    expect(mounted).toMatchSnapshot();
  });

  it("should unmount correctly FloatFooterBar component", () => {
    expect(mounted.unmount()).toEqual({});
  });
});
