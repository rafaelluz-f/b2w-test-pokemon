import CartTotalPriceText from "./";

describe("<CartTotalPriceText />", () => {
  const component = <CartTotalPriceText>Texto</CartTotalPriceText>;

  const mounted = mount(component);
  const wrapper = shallow(component);

  it("should mount correctly CartTotalPriceText component", () => {
    expect(wrapper.find(".cartTotalPriceText")).toHaveLength(1);
    expect(mounted).toMatchSnapshot();
  });

  it("should unmount correctly CartTotalPriceText component", () => {
    expect(mounted.unmount()).toEqual({});
  });

  it("should have a children", () => {
    expect(wrapper.find(".cartTotalPriceText").children()).toHaveLength(1);
  });
});
