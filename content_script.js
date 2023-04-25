var button_injected = false;
if (document.URL.endsWith("&dest_lang=rz&mode=translate")) {
	document.addEventListener("click", () => {
		if (!button_injected) {
			let lyrics_original = document.querySelectorAll(
				"div#__next > div:first-of-type > div:first-of-type > div:first-of-type > div:first-of-type > div:first-of-type > div:first-of-type > div:first-of-type > div:nth-child(2) > div:nth-child(2) > div:first-of-type > div:first-of-type > div:first-of-type > div:first-of-type > div:first-of-type > div:first-of-type > div:nth-child(2) > div:first-of-type > div:first-of-type > div:first-of-type > div:not(:first-of-type) > label > div:first-of-type > div:first-of-type > div:first-of-type > div:first-of-type > span"
			);
			let textarea_translation = document.querySelectorAll(
				"div#__next > div:first-of-type > div:first-of-type > div:first-of-type > div:first-of-type > div:first-of-type > div:first-of-type > div:first-of-type > div:nth-child(2) > div:nth-child(2) > div:first-of-type > div:first-of-type > div:first-of-type > div:first-of-type > div:first-of-type > div:first-of-type > div:nth-child(2) > div:first-of-type > div:first-of-type > div:first-of-type > div:not(:first-of-type) > label > div:first-of-type > div:first-of-type > div:first-of-type > div:last-of-type > div:last-of-type > div > textarea"
			);
			let injection_point = document.querySelector(
				"div#__next > div:first-of-type > div:first-of-type > div:first-of-type > div:first-of-type > div:first-of-type > div:first-of-type > div:first-of-type > div:nth-child(2) > div:nth-child(2) > div:first-of-type > div:first-of-type > div:first-of-type > div:first-of-type > div:first-of-type > div:first-of-type > div:nth-child(2) > div:first-of-type > div:first-of-type > div:first-of-type > div:first-of-type > div > div"
			);
            let injection_point_1 = document.querySelector(
				"div#__next > div:first-of-type > div:first-of-type > div:first-of-type > div:first-of-type > div:first-of-type > div:first-of-type > div:first-of-type > div:nth-child(2) > div:nth-child(2) > div:first-of-type > div:first-of-type > div:first-of-type > div:first-of-type > div:first-of-type > div:first-of-type > div:nth-child(2) > div:last-of-type > div > div > div:last-of-type"
			);
			let button = document.createElement("button");
			button.innerHTML = "Jyutping";
			button.addEventListener("click", () => {
				let temp0 = [];
				lyrics_original.forEach((temp1) => temp0.push(temp1.innerHTML));
				browser.runtime.sendMessage(temp0).then((temp1) => {
                    textarea_translation.forEach((temp2, i) => (temp2.value = temp1[i]));
                    textarea_translation.forEach((temp2, i) => (temp2.innerHTML = temp1[i]));
                });
			});
			injection_point_1.appendChild(button);
			button_injected = true;
		}
	});
}
