import * as yargs from 'yargs';

export interface CliOpts {
	from: string;
	to: string;
	dir: string;
	verbose: boolean;
	help: boolean;
	salesforceVersion: string;
	write: string;
}

export class CmdOptions {

	constructor() {
		yargs
		.usage('Usage: $0 [options]')

		.alias('f', 'from')
		.nargs('f', 1)
		.describe('f', 'A commit sha/branch/tag')

		.alias('t', 'to')
		.nargs('t', 1)
		.describe('t', 'A commit sha/branch/tag')

		.alias('d', 'dir')
		.nargs('d', 1)
		.describe('d', 'Directory of git repository')

		.alias('sv', 'salesforce-version')
		.nargs('sv', 1)
		.describe('sv', 'SalesForce api version')

		.alias('w', 'write')
		.nargs('w', 1)
		.describe('w', 'Writes to file instead of only printing to console')

		.alias('v', 'verbose')
		.nargs('v', 0)
		.describe('v', 'Enables verbose logging')

		.demandOption(['from', 'to', 'dir', 'salesforce-version'])

		.example('$0 --from v1.2 --to v1.3 --dir /my/absolute/dir/path/to/repo ', '')
			.argv;
	}

	public get(): CliOpts {

		const args = yargs.argv;

		return {
			from: args.from || args.f,
			to: args.to || args.t,
			dir: args.dir || args.d,
			verbose: Boolean(args.verbose || args.v),
			help: Boolean(args.help),
			salesforceVersion: args.sv || args['salesforce-version'],
			write: args.w || args.write
		};
	}
}