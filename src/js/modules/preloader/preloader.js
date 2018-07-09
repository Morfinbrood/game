export default class Preloader {
	constructor() {
		this.createPreloader();
	}

	createPreloader() {
		const loader = document.createElement('div');
		loader.className = 'loader';
		const loader_inner = document.createElement('div');
		loader_inner.className = 'loader_inner';
		loader.appendChild(loader_inner);
		const sk_cube_grid = document.createElement('div');
		sk_cube_grid.className = 'sk-cube-grid';
		loader_inner.appendChild(sk_cube_grid);
		const DIV_QUANTITY = 9;
		for (let i = 1; i <= DIV_QUANTITY; i++) {
			let div = document.createElement('div');
			div.className = `sk-cube sk-cube${[i]}`;
			sk_cube_grid.appendChild(div);
		}
		document.body.appendChild(loader);
	}

	static showLoader() {
		document.querySelector('.loader').style.display = 'block';
	}

	static hideLoader() {
		const delayBeforeHide = 400;
		setTimeout(() => {
			document.querySelector('.loader').style.display = 'none';
		}, delayBeforeHide);
	}
}
