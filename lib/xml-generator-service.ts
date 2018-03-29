import * as xmlbuilder from 'xmlbuilder';

export class XmlGeneratorService {

	private xml;

	constructor() {
		this.xml = xmlbuilder.create('Package',
			{ version: '1.0', encoding: 'UTF-8' },
			{ pubID: null, sysID: null },
			{
				skipNullAttributes: false,
				headless: false, ignoreDecorators: false,
				separateArrayItems: false, noDoubleEncoding: false,
				stringify: {}
			})
		.att('xmlns', 'http://soap.sforce.com/2006/04/metadata')

		return this;
	}

	public addTypes(name: string, members: string[]) {
		let types = this.xml.ele('types');
		members.forEach(val => {
			types.ele('members', val);
		});
		types.ele('name', name);

		return this;
	}

	public setVersion(version: string) {
		let versionNumber = parseInt(version, 10);
		this.xml.ele('version', versionNumber.toFixed(1));

		return this;
	}

	public build() {
		return this.xml.end({ pretty: true });
	}
}