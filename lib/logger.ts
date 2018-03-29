export class Logger {

	constructor(private verbose: boolean) {}

	public log(what) {
		if (this.verbose) {
			console.log(what);
		}
	}
}