import CartItemImage from ".";

describe("<CartItemImage />", () => {
  const image = require("../../../assets/images/pokemonImageNotFound.png");

  const component = <CartItemImage alt={"AltText"} src={image} />;

  const mounted = mount(component);
  const wrapper = shallow(component);

  it("should mount correctly CartItemImage component", () => {
    expect(wrapper.find(".cartItemImage")).toHaveLength(1);
    expect(mounted).toMatchSnapshot();
  });

  it("should unmount correctly CartItemImage component", () => {
    expect(mounted.unmount()).toEqual({});
  });

  it("should render correctly alt property", () => {
    expect(wrapper.prop("alt")).toEqual("AltText");
  });

  it("should render correctly alt property", () => {
    expect(wrapper.prop("src")).toEqual(image);
  });
});
