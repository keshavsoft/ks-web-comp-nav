import getLatestVersion from "./bin/commands/steps/getLatestVersion.js";

const load = async (cmd) => {
    const v = getLatestVersion;
    console.log("v : ", v);

    // return (await import(`./bin/commands/template/${v}/index.js`));
    const navDefaults = (await import(`./bin/commands/template/${v}/navDefaults.js`)).default;
    const navUsage = (await import(`./bin/commands/template/${v}/navUsage.js`)).default;

    return {
        navDefaults, navUsage
    };
};

export default load;