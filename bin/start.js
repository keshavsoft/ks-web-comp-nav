import parseInput from "./core/parseInput.js";
import showUsage from './core/showUsage.js';

import commandToRun from "./commands/nav.js";

import pkg from '../package.json' with { type: 'json' };

const version = pkg.version;

const run = async () => {
  const input = parseInput();

  if (input.action === "--help" || input.action === "-h" || input.action === "help") return showUsage(version);

  await commandToRun({
    folderName: input.folderName
  });
};

export default run;