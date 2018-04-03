#!/usr/bin/env node

import { CmdOptions } from './lib/cmd-options';
import * as sh from 'shelljs';
import { PackageGeneratorService } from './lib/package-generator-service';
import { Logger } from './lib/logger';
import { FileWriter } from './lib/file-writer';

const cmdOptions = new CmdOptions();

// get cli flags
const o = cmdOptions.get();

const logger = new Logger(o.verbose);

// navigate to folder
sh.cd(o.dir);
logger.log(`Navigate to: ${o.dir}`);

// execute
let cmd = `git diff --name-only ${o.from} ${o.to} |grep -v 'src/[a-zA-Z0-9_/\\.-]*.xml$' | grep src`;
logger.log(`Executing: ${cmd}`);
let output = sh.exec(cmd);

// generate and print out to console
let xml = PackageGeneratorService.generatePackageXml(output, o.salesforceVersion);
console.log();
console.log(xml);

// write to file
if (o.write) {
	FileWriter.write(xml, o.write);
}
