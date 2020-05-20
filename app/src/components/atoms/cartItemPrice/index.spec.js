import CartItemPrice from "./";

describe("<CartItemPrice />", () => {
  const component = <CartItemPrice>Texto</CartItemPrice>;

  const mounted = mount(component);
  const wrapper = shallow(component);

  it("should mount correctly CartItemPrice component", () => {
    expect(wrapper.find(".cartItemPrice")).toHaveLength(1);
    expect(mounted).toMatchSnapshot();
  });

  it("should unmount correctly CartItemPrice component", () => {
    expect(mounted.unmount()).toEqual({});
  });

  it("should have a children", () => {
    expect(wrapper.find(".cartItemPrice").children()).toHaveLength(1);
  });
});
