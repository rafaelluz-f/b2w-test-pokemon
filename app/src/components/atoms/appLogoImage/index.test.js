import AppLogoImage from "./";

describe("<AppLogoImage />", () => {
  it("renders without crashing", () => {
    const image = require("../../../assets/images/pokemonImageNotFound.png");
    const div = document.createElement("div");
    ReactDOM.render(<AppLogoImage alt="Title" src={image} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
