import CartFieldLabel from "./";

describe("<CartFieldLabel />", () => {
  const image = require("../../../assets/images/pokemonImageNotFound.png");

  const component = <CartFieldLabel>Texto</CartFieldLabel>;

  const mounted = mount(component);
  const wrapper = shallow(component);

  it("should mount correctly CartFieldLabel component", () => {
    expect(wrapper.find(".cartFieldLabel")).toHaveLength(1);
    expect(mounted).toMatchSnapshot();
  });

  it("should unmount correctly CartFieldLabel component", () => {
    expect(mounted.unmount()).toEqual({});
  });

  it("should have a children", () => {
    expect(wrapper.find(".cartFieldLabel").children()).toHaveLength(1);
  });
});
