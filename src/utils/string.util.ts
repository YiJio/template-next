// may want to use lodash library package

export const StringUtil = {
	reverse(str: string) {
		return str.split('').reverse().join('');
	},
	capitalize(str: string) {
		return str.charAt(0).toUpperCase() + str.slice(1);
	},
	titleCase(str: string) {
		return str.replace(/\w\S*/g, s => s.charAt(0).toUpperCase() + s.substring(1).toLowerCase());
	},
	pascalCase(str: string) {
		return str.replace(/\w\S*/g, s => s.charAt(0).toUpperCase() + s.substring(1).toLowerCase()).replaceAll(' ', '');
	},
	camelCase(str: string) {
		return str.toLowerCase().split(' ').reduce((s, c) => s + (c.charAt(0).toUpperCase() + c.slice(1)));
	},
	kebabCase(str: string) {
		return str.toLowerCase().replaceAll(' ', '-');
	},
	snakeCase(str: string, upper = false) {
		if(!upper) return str.toLowerCase().replaceAll(' ', '_');
		return str.toUpperCase().replaceAll(' ', '_');
	}
}