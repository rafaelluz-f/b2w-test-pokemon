import Loader from ".";

describe("<Loader />", () => {
  const image = require("../../../assets/images/loader.gif");

  const component = <Loader alt="AltText" src={image} width="50px" />;

  const mounted = mount(component);
  const wrapper = shallow(component);

  it("should mount correctly Loader component", () => {
    expect(wrapper.find(".loader")).toHaveLength(1);
    expect(mounted).toMatchSnapshot();
  });

  it("should unmount correctly Loader component", () => {
    expect(mounted.unmount()).toEqual({});
  });

  it("should render correctly alt property", () => {
    expect(wrapper.prop("alt")).toEqual("Loader");
  });

  it("should render correctly src property", () => {
    expect(wrapper.prop("src")).toEqual(image);
  });

  it("should render correctly width property", () => {
    expect(wrapper.prop("width")).toEqual("50px");
  });
});
