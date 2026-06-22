// src/header.js
import initNav from "../bin/commands/template/v3/index.js";

(async () => {
    window.KSCompNavVersion = "v3.1";

    window.KSCompNav = initNav;
})();