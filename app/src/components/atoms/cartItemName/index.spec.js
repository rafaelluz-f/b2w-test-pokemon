import CartItemName from "./";

describe("<CartItemName />", () => {
  const component = <CartItemName>Texto</CartItemName>;

  const mounted = mount(component);
  const wrapper = shallow(component);

  it("should mount correctly CartItemName component", () => {
    expect(wrapper.find(".cartItemName")).toHaveLength(1);
    expect(mounted).toMatchSnapshot();
  });

  it("should unmount correctly CartItemName component", () => {
    expect(mounted.unmount()).toEqual({});
  });

  it("should have a children", () => {
    expect(wrapper.find(".cartItemName").children()).toHaveLength(1);
  });
});
