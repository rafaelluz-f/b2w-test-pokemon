import CartButtonEnabled from "./";

describe("<CartButtonEnabled />", () => {
  const image = require("../../../assets/images/pokemonImageNotFound.png");

  const component = <CartButtonEnabled>Texto</CartButtonEnabled>;

  const mounted = mount(component);
  const wrapper = shallow(component);

  it("should mount correctly CartButtonEnabled component", () => {
    expect(wrapper.find(".cartButtonEnabled")).toHaveLength(1);
    expect(mounted).toMatchSnapshot();
  });

  it("should unmount correctly CartButtonEnabled component", () => {
    expect(mounted.unmount()).toEqual({});
  });

  it("should have a children", () => {
    expect(wrapper.find(".cartButtonEnabled").children()).toHaveLength(1);
  });
});
