/*
 * Copyright 2020 Vasiliy Vdovin
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

class PQLPL {

	constructor() {

		PQLPL.listeners();
	}

	static listeners() {

		window.addEventListener("load", function() {

			document.body.id = "loaded";

			PQLPL.init();

		}, false);
	}

	static daemon() {

		const top = document.body.getBoundingClientRect().top * -1

		Array.prototype.forEach.call(document.getElementsByClassName("ms"), function(ms) {

			const offset = (ms.offsetTop - top) * -1;
			const percent = 1 - Math.abs((ms.offsetTop - top) / ms.clientHeight);

			ms.style.setProperty("--offset", offset + "px");

			if (percent >= 0.25) {

				ms.classList.add("v-25");

			} else {

				ms.classList.remove("v-25");
			}

			if (percent >= 0.50) {

				ms.classList.add("v-50");

			} else {

				ms.classList.remove("v-50");
			}

			if (percent >= 0.75) {

				ms.classList.add("v-75");

			} else {

				ms.classList.remove("v-75");
			}

		});

		requestAnimationFrame(PQLPL.daemon);
	}

	static init() {

		PQLPL.daemon();
	}
}

const pqlp = new PQLPL();