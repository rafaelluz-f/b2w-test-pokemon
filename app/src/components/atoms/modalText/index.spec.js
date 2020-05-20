import ModalText from "./";

describe("<ModalText />", () => {
  const component = <ModalText>Texto</ModalText>;

  const mounted = mount(component);
  const wrapper = shallow(component);

  it("should mount correctly ModalText component", () => {
    expect(wrapper.find(".modalText")).toHaveLength(1);
    expect(mounted).toMatchSnapshot();
  });

  it("should unmount correctly ModalText component", () => {
    expect(mounted.unmount()).toEqual({});
  });

  it("should have a children", () => {
    expect(wrapper.find(".modalText").children()).toHaveLength(1);
  });
});
