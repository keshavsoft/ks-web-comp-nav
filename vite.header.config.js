import { templateVersion } from "./src/version.js";

export default {
    build: {
        lib: {
            entry: "src/nav.js",
            name: "ksCompNav",
            formats: ["umd"],
            fileName: () => `${templateVersion}/ksCompNav.js`
        },
        outDir: "Public",
        emptyOutDir: false
    }
};