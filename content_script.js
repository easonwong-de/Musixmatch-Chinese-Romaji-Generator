var jp_shown = false;
if (document.URL.endsWith("&dest_lang=rz&mode=translate")) {
	document.addEventListener("click", () => {
		if (!document.querySelector("input#jp_toggle")) {
			let lyrics = document.querySelectorAll(
				"div#__next > div:first-of-type > div:first-of-type > div:first-of-type > div:first-of-type > div:first-of-type > div:first-of-type > div:first-of-type > div:nth-child(2) > div:nth-child(2) > div:first-of-type > div:first-of-type > div:first-of-type > div:first-of-type > div:first-of-type > div:first-of-type > div:nth-child(2) > div:first-of-type > div:first-of-type > div:first-of-type > div:not(:first-of-type) > label > div:first-of-type > div:first-of-type > div:first-of-type > div:first-of-type > span"
			);
			let injection_point = document.querySelector(
				"div#__next > div:first-of-type > div:first-of-type > div:first-of-type > div:first-of-type > div:first-of-type > div:first-of-type > div:first-of-type > div:nth-child(2) > div:nth-child(2) > div:first-of-type > div:first-of-type > div:first-of-type > div:first-of-type > div:first-of-type > div:first-of-type > div:nth-child(2) > div:last-of-type > div > div > div:last-of-type"
			);
			let toggle_wrapper = document.createElement("label");
			toggle_wrapper.htmlFor = "jp_toggle";
			toggle_wrapper.style.marginBlockStart = "16px";
			let toggle = document.createElement("input");
			toggle.type = "checkbox";
			toggle.id = "jp_toggle";
			toggle.checked = jp_shown;
			toggle.addEventListener("change", () => {
				if (toggle.checked) {
					let temp0 = [];
					lyrics.forEach((temp1) => temp0.push(temp1.innerHTML));
					browser.runtime.sendMessage(temp0).then((temp1) => {
						lyrics.forEach((temp2, i) => {
							let temp3 = document.createElement("span");
							temp3.className = "jp_span";
							temp3.innerHTML = `<br><small>${temp1[i]}</small>`;
							temp2.parentNode.appendChild(temp3);
						});
						jp_shown = true;
					});
				} else {
					document.querySelectorAll("span.jp_span").forEach((temp0) => temp0.remove());
					jp_shown = false;
				}
			});
			let toggle_text = document.createElement("span");
			toggle_text.innerHTML = "Show Jyutping";
			toggle_text.style.fontFamily = "gordita-bold";
			toggle_text.style.fontSize = "14px";
			toggle_text.style.color = "white";
			toggle_wrapper.appendChild(toggle);
			toggle_wrapper.appendChild(toggle_text);
			injection_point.appendChild(toggle_wrapper);
		}
	});
}
