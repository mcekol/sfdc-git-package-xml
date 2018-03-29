export class TypeParser {

	public static parse(arr: string[], elemType: string): string[] {

		return arr.map(it => {
			let regex = new RegExp(`\/${elemType}\/([\\w\/]+).`, 'gi');
			let match = regex.exec(it);
			return match && match[1];
		}).filter(Boolean);
	}
}