import CardFieldCheckBox from "./";

describe("<CardFieldCheckBox />", () => {
  const onChangeMock = jest.fn();

  const component = (
    <CardFieldCheckBox
      onChange={onChangeMock()}
      checked={0}
      placeholder="Something"
    />
  );

  const mounted = mount(component);
  const wrapper = shallow(component);

  it("should mount correctly CardFieldCheckBox component", () => {
    expect(mounted).toMatchSnapshot();
  });

  it("should have className cardFieldCheckBox", () => {
    expect(wrapper.find(".cardFieldCheckBox")).toHaveLength(1);
  });

  it("should call onChange function", () => {
    expect(onChangeMock).toHaveBeenCalledTimes(1);
    expect(onChangeMock).toBeCalled();
  });

  it("should render input type checkbox", () => {
    expect(wrapper.find("[type='checkbox']")).toHaveLength(1);
  });

  it("should checked be false", () => {
    expect(wrapper.prop("checked")).toEqual(0);
  });

  it("should render correctly placeholder", () => {
    expect(wrapper.prop("placeholder")).toEqual("Something");
  });
});
