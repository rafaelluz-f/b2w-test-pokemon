import { Provider } from "react-redux";
import store from "../../../store";
import SearchBar from "./";

describe("<ProductPrice />", () => {
  const component = (
    <Provider store={store}>
      <SearchBar />
    </Provider>
  );

  const mounted = mount(component);

  it("should mount correctly SearchBar component", () => {
    expect(mounted.find(".searchBar")).toHaveLength(2);
    expect(mounted).toMatchSnapshot();
  });

  it("should unmount correctly SearchBar component", () => {
    expect(mounted.unmount()).toEqual({});
  });
});
