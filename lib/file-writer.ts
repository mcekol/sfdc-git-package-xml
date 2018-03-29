import * as fs from 'fs';

export class FileWriter {

	public static write(fileString: string, path?: string) {

		if (path === '.') {
			path = './';
		}

		fs.writeFile((path || './') + 'package.xml', fileString, function(err) {
			if (err) {
				return console.log(err);
			}
		});
	}
}