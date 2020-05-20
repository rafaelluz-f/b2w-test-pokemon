import CartFixedMessage from "./";

describe("<CartFixedMessage />", () => {
  const component = <CartFixedMessage>Teste</CartFixedMessage>;

  const mounted = mount(component);
  const wrapper = shallow(component);

  it("should mount correctly CartFixedMessage component", () => {
    expect(wrapper.find(".cartFixedMessage")).toHaveLength(1);
    expect(mounted).toMatchSnapshot();
  });

  it("should unmount correctly CartFixedMessage component", () => {
    expect(mounted.unmount()).toEqual({});
  });

  it("should have a children", () => {
    expect(wrapper.find(".cartFixedMessage").children()).toHaveLength(1);
  });
});
