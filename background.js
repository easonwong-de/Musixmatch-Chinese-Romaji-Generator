function convert(input, data) {
	if (input.length > 0) {
		let temp0 = [];
		for (let i = 0; i < input.length; i++) {
			let temp1 = input[i];
			let temp2 = data.filter((temp3) => temp3[0] === temp1 && temp3[1] != "");
			if (temp2.length > 0) {
				temp0.push(temp2.map((temp3) => temp3[1]).join("/"));
			} else {
				temp0.push(temp1.replace(" ", ",").replace("，", ","));
			}
		}
		let temp1 = temp0.join(" ");
		let output = `${temp1.charAt(0).toUpperCase()}${temp1.slice(1)}`;
		return output;
	}
}

fetch("https://raw.githubusercontent.com/lshk-org/jyutping-table/master/list.tsv")
	.then((data_jp_raw) => data_jp_raw.text())
	.then((text) => {
		const data_jp = text.split("\n").map((temp0) => {
			let temp1 = temp0.split("\t");
			return [temp1[0], temp1[2]];
		});
		browser.runtime.onMessage.addListener((request, sender, sendResponse) => sendResponse(request.map((temp0) => convert(temp0, data_jp))));
	});
