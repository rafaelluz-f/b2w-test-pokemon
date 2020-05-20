import CartTotalText from "./";

describe("<CartTotalText />", () => {
  const component = <CartTotalText>Texto</CartTotalText>;

  const mounted = mount(component);
  const wrapper = shallow(component);

  it("should mount correctly CartTotalText component", () => {
    expect(wrapper.find(".cartTotalText")).toHaveLength(1);
    expect(mounted).toMatchSnapshot();
  });

  it("should unmount correctly CartTotalText component", () => {
    expect(mounted.unmount()).toEqual({});
  });

  it("should have a children", () => {
    expect(wrapper.find(".cartTotalText").children()).toHaveLength(1);
  });
});
