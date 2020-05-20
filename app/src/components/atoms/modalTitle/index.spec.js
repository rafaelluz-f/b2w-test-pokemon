import ModalTitle from "./";

describe("<ModalTitle />", () => {
  const component = <ModalTitle>Texto</ModalTitle>;

  const mounted = mount(component);
  const wrapper = shallow(component);

  it("should mount correctly ModalTitle component", () => {
    expect(wrapper.find(".modalTitle")).toHaveLength(1);
    expect(mounted).toMatchSnapshot();
  });

  it("should unmount correctly ModalTitle component", () => {
    expect(mounted.unmount()).toEqual({});
  });

  it("should have a children", () => {
    expect(wrapper.find(".modalTitle").children()).toHaveLength(1);
  });
});
