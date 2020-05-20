import CartText from "./";

describe("<CartText />", () => {
  const component = <CartText>Texto</CartText>;

  const mounted = mount(component);
  const wrapper = shallow(component);

  it("should mount correctly CartText component", () => {
    expect(wrapper.find(".cartText")).toHaveLength(1);
    expect(mounted).toMatchSnapshot();
  });

  it("should unmount correctly CartText component", () => {
    expect(mounted.unmount()).toEqual({});
  });

  it("should have a children", () => {
    expect(wrapper.find(".cartText").children()).toHaveLength(1);
  });
});
