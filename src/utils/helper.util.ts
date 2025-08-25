// may want to use lodash library package

export const HelperUtil = {
	range(start: number, end: number): number[] {
		if (start === end) return [start];
		return [start, ...this.range(start + 1, end)];
	},
	normalize(val: number, min: number, max: number) {
		return (val - min) / (max - min);
	},
	randomNumber(min: number, max: number) {
		return Math.floor(Math.random() * (max - min + 1)) + min;
	},
	removeDuplicates(arr: any[]) {
		return [...new Set(arr)];
	},
	isArray(arr: any[]) {
		return Array.isArray(arr);
	},
	isObject(obj: any) {
		return typeof obj === 'object' && obj !== null;
	},
	isFunction(func: any) {
		return typeof func === 'function';
	},
	isEmpty(val: any) {
		return val === null || val == undefined || (typeof val === 'string' && val.trim() === '') || (this.isArray(val) && val.length === 0) || (typeof val === 'object' && Object.keys(val).length === 0);
	},
	deepClone(obj: any) {
		return JSON.parse(JSON.stringify(obj));
	},
	mergeObjects(target: any, source: any) {
		return Object.assign({}, target, source);
	},
	getFromIndex(arr: any[], fieldCheck: string, val: string, returnField = null) {
		const index = arr.findIndex((a) => a[fieldCheck] == val);
		if (returnField) return arr[index][returnField];
		return arr[index];
	},
	parsePlainTextList(punct: string, content: string) {
		const lines = content.trim().split('\n');
		const list = lines.filter(line => line.trim().startsWith(punct)).map(line => line.trim().substring(1).trim());
		return list;
	},
	isCacheValid(timestamp: number, expiry: number) {
		return Date.now() - timestamp < expiry;
	}
}