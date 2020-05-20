import ProductPriceText from "./";

describe("<ProductPriceText />", () => {
  const component = <ProductPriceText>Texto</ProductPriceText>;

  const mounted = mount(component);
  const wrapper = shallow(component);

  it("should mount correctly ProductPriceText component", () => {
    expect(wrapper.find(".productPriceText")).toHaveLength(1);
    expect(mounted).toMatchSnapshot();
  });

  it("should unmount correctly ProductPriceText component", () => {
    expect(mounted.unmount()).toEqual({});
  });

  it("should have a children", () => {
    expect(wrapper.find(".productPriceText").children()).toHaveLength(1);
  });
});
