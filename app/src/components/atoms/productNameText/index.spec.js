import ProductNameTextStrong from "./";

describe("<ProductNameTextStrong />", () => {
  const component = <ProductNameTextStrong>Texto</ProductNameTextStrong>;

  const mounted = mount(component);
  const wrapper = shallow(component);

  it("should mount correctly ProductNameTextStrong component", () => {
    expect(wrapper.find(".productNameTextStrong")).toHaveLength(1);
    expect(mounted).toMatchSnapshot();
  });

  it("should unmount correctly ProductNameTextStrong component", () => {
    expect(mounted.unmount()).toEqual({});
  });

  it("should have a children", () => {
    expect(wrapper.find(".productNameTextStrong").children()).toHaveLength(1);
  });
});
