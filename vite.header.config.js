import { templateVersion } from "./src/version.js";

export default {
    build: {
        lib: {
            entry: "src/nav.js",
            name: "KSHeader",
            formats: ["umd"],
            fileName: () => `${templateVersion}/ksheader.js`
        },
        outDir: "Public",
        emptyOutDir: false
    }
};