import CardFieldInput from ".";

describe("<CardFieldInput />", () => {
  const onChangeMock = jest.fn();

  const component = (
    <CardFieldInput onChange={onChangeMock()} value="ValueText" />
  );

  const mounted = mount(component);
  const wrapper = shallow(component);

  it("should mount correctly CardFieldInput component", () => {
    expect(wrapper.find(".cardFieldInput")).toHaveLength(1);
    expect(mounted).toMatchSnapshot();
  });

  it("should unmount correctly CardFieldInput component", () => {
    expect(mounted.unmount()).toEqual({});
  });

  it("should render input type checkbox", () => {
    expect(wrapper.find("[type='text']")).toHaveLength(1);
  });

  it("should call onChange function", () => {
    expect(onChangeMock).toHaveBeenCalledTimes(1);
    expect(onChangeMock).toBeCalled();
  });
});
