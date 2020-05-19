import AppLogoImage from ".";

describe("<AppLogoImage />", () => {
  const image = require("../../../assets/images/pokemonImageNotFound.png");

  const component = <AppLogoImage alt={"AltText"} src={image} />;

  const mounted = mount(component);
  const wrapper = shallow(component);

  it("should mount correctly AppLogoImage component", () => {
    expect(wrapper.find(".appLogoImage")).toHaveLength(1);
    expect(mounted).toMatchSnapshot();
  });

  it("should unmount correctly AppLogoImage component", () => {
    expect(mounted.unmount()).toEqual({});
  });

  it("should render correctly alt property", () => {
    expect(wrapper.prop("alt")).toEqual("AltText");
  });

  it("should render correctly alt property", () => {
    expect(wrapper.prop("src")).toEqual(image);
  });
});
