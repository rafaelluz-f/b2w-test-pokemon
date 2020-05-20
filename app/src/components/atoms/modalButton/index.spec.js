import ModalButton from "./";

describe("<ModalButton />", () => {
  const onChangeMock = jest.fn();

  const component = <ModalButton onChange={onChangeMock()}>Teste</ModalButton>;

  const mounted = mount(component);
  const wrapper = shallow(component);

  it("should mount correctly ModalButton component", () => {
    expect(mounted).toMatchSnapshot();
  });

  it("should unmount correctly ModalButton component", () => {
    expect(mounted.unmount()).toEqual({});
  });

  it("should have className ModalButton", () => {
    expect(wrapper.find(".modalButton")).toHaveLength(1);
  });

  it("should call onChange function", () => {
    expect(onChangeMock).toHaveBeenCalledTimes(1);
    expect(onChangeMock).toBeCalled();
  });

  it("should have a children", () => {
    expect(wrapper.find(".modalButton").children()).toHaveLength(1);
  });
});
