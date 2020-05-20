import ProductImageLoaded from ".";

describe("<ProductImageLoaded />", () => {
  const image = require("../../../assets/images/pokemonImageNotFound.png");

  const component = <ProductImageLoaded alt={"AltText"} src={image} />;

  const mounted = mount(component);
  const wrapper = shallow(component);

  it("should mount correctly ProductImageLoaded component", () => {
    expect(wrapper.find(".productImageLoaded")).toHaveLength(1);
    expect(mounted).toMatchSnapshot();
  });

  it("should unmount correctly ProductImageLoaded component", () => {
    expect(mounted.unmount()).toEqual({});
  });

  it("should render correctly alt property", () => {
    expect(wrapper.prop("alt")).toEqual("AltText");
  });

  it("should render correctly alt property", () => {
    expect(wrapper.prop("src")).toEqual(image);
  });
});
