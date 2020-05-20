import ProductPriceTextStrong from "./";

describe("<ProductPriceTextStrong />", () => {
  const component = <ProductPriceTextStrong>Texto</ProductPriceTextStrong>;

  const mounted = mount(component);
  const wrapper = shallow(component);

  it("should mount correctly ProductPriceTextStrong component", () => {
    expect(wrapper.find(".productPriceTextStrong")).toHaveLength(1);
    expect(mounted).toMatchSnapshot();
  });

  it("should unmount correctly ProductPriceTextStrong component", () => {
    expect(mounted.unmount()).toEqual({});
  });

  it("should have a children", () => {
    expect(wrapper.find(".productPriceTextStrong").children()).toHaveLength(1);
  });
});
