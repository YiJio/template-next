// expand on chroma-js OR
// use chroma-js functions for better naming of functions OR
// reduce package size and not use chroma-js

// recheck the below sometime later
 
export const ColorUtil = {
	getContrastingTextColor(color: string) {
		if(!color) return '#000000';
		let rgb = this.hexToRgb(color);
		const luminance = 0.299 * rgb!.r + 0.587 * rgb!.g + 0.114 * rgb!.b;
		return luminance > 182 ? '#000000' : '#ffffff';
	},
	hexToRgb(hex: string) {
		var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
		return result ? {
			r: parseInt(result[1], 16),
			g: parseInt(result[2], 16),
			b: parseInt(result[3], 16)
		} : null;
	},
	
}