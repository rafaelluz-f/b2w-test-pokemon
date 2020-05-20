import ProductNameText from "./";

describe("<ProductNameText />", () => {
  const component = <ProductNameText>Texto</ProductNameText>;

  const mounted = mount(component);
  const wrapper = shallow(component);

  it("should mount correctly ProductNameText component", () => {
    expect(wrapper.find(".productNameText")).toHaveLength(1);
    expect(mounted).toMatchSnapshot();
  });

  it("should unmount correctly ProductNameText component", () => {
    expect(mounted.unmount()).toEqual({});
  });

  it("should have a children", () => {
    expect(wrapper.find(".productNameText").children()).toHaveLength(1);
  });
});
