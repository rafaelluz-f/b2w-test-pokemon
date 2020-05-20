import { BrowserRouter } from "react-router-dom";
import CartFixedButton from "./";

describe("<CartFixedButton />", () => {
  const component = (
    <BrowserRouter>
      <CartFixedButton link="http://www.something.com" />
    </BrowserRouter>
  );

  const mounted = mount(component);
  const wrapper = shallow(component);

  // it("should mount correctly CartFixedButton component", () => {
  //   expect(wrapper.find(".cartFixedButton")).toHaveLength(1);
  //   expect(mounted).toMatchSnapshot();
  // });

  it("should unmount correctly CartFixedButton component", () => {
    expect(mounted.unmount()).toEqual({});
  });
});
