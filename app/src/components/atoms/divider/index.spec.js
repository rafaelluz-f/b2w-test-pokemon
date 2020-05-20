import Divider from "./";

describe("<Divider />", () => {
  const component = <Divider color="red" width="100%" />;

  const mounted = mount(component);
  const wrapper = shallow(component);

  it("should mount correctly Divider component", () => {
    expect(wrapper.find(".divider")).toHaveLength(1);
    expect(mounted).toMatchSnapshot();
  });

  it("should unmount correctly Divider component", () => {
    expect(mounted.unmount()).toEqual({});
  });

  it("should render correctly color", () => {
    expect(wrapper.prop("color")).toEqual("red");
  });

  it("should render correctly width", () => {
    expect(wrapper.prop("width")).toEqual("100%");
  });
});
