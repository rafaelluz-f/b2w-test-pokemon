import * as themes from "./themes";

const config = (type) => {
  if ("fire" === type) {
    return themes.fire;
  }
  if ("water" === type) {
    return themes.water;
  }
  return themes.ghost;
};

export default config;
