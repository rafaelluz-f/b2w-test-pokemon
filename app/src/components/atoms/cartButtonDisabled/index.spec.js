import CartButtonDisabled from "./";

describe("<CartButtonDisabled />", () => {
  const image = require("../../../assets/images/pokemonImageNotFound.png");

  const component = <CartButtonDisabled>Texto</CartButtonDisabled>;

  const mounted = mount(component);
  const wrapper = shallow(component);

  it("should mount correctly CartButtonDisabled component", () => {
    expect(wrapper.find(".disabled")).toHaveLength(1);
    expect(mounted).toMatchSnapshot();
  });

  it("should unmount correctly CartButtonDisabled component", () => {
    expect(mounted.unmount()).toEqual({});
  });

  it("should have a children", () => {
    expect(wrapper.find(".disabled").children()).toHaveLength(1);
  });
});
