import SearchBarInput from ".";

describe("<SearchBarInput />", () => {
  const onChangeMock = jest.fn();

  const component = (
    <SearchBarInput onChange={onChangeMock()} value="ValueText">
      Teste
    </SearchBarInput>
  );

  const mounted = mount(component);
  const wrapper = shallow(component);

  it("should mount correctly SearchBarInput component", () => {
    expect(wrapper.find(".searchBarInput")).toHaveLength(1);
    expect(mounted).toMatchSnapshot();
  });

  it("should unmount correctly SearchBarInput component", () => {
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
