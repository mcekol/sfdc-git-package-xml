import { TypeParser } from './type-parser';
import { XmlGeneratorService } from './xml-generator-service';

const PACKAGE_XML_TYPES = {
	'classes': 'ApexClass',
	'pages': 'ApexPage',
	'components': 'ApexComponent',
	'triggers': 'ApexTrigger',
	'objects': 'CustomObject',
	'labels': 'CustomLabels',
	'staticresources': 'StaticResource',
	'email': 'EmailTemplate',
	'workflows': 'Workflow',
	'approvalProcesses': 'ApprovalProcess'
};

export class PackageGeneratorService {

	public static generatePackageXml(diff: string, version: string): string {
		let xmlGeneratorService = new XmlGeneratorService();

		let outputArr = diff.split('\n').filter(Boolean);

		Object.keys(PACKAGE_XML_TYPES).forEach(t => {
			let typeValues = TypeParser.parse(outputArr, t);
			if (typeValues && typeValues.length) {
				xmlGeneratorService.addTypes(PACKAGE_XML_TYPES[t], typeValues);
			}
		});

		xmlGeneratorService.setVersion(version);
		return xmlGeneratorService.build();
	}
}