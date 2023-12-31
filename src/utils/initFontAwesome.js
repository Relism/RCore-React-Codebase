import { library } from "@fortawesome/fontawesome-svg-core";
import { faGauge, faLink, faPowerOff, faUser } from "@fortawesome/free-solid-svg-icons";

function initFontAwesome() {
  library.add(faLink);
  library.add(faUser);
  library.add(faPowerOff);
  library.add(faGauge);
}

export default initFontAwesome;
