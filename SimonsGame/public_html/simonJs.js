class Simone {

	static init(L) {
		this.coda = [];
		this.max = 3;
		Simone.makeLvl(L);
	}
	/**
	 * Riempie la coda di numeri da 0 a 3
	 * @param {type} N numero di numeri da generare
	 * @returns null
	 */
	static makeLvl(N) {
		Simone.pulisci();

		for (var i = 0; i < N; i++) {
			this.coda.push(Simone.rand(this.max));
		}
	}

	static getAt(i) {
		return this.coda[i];
	}

	static pulisci() {

		for (var i = this.coda.length - 1; i >= 0; i--) {
			delete this.coda[i];
		}

	}

	static rand(max) {
		return Math.floor((Math.random() * max));
	}

	static N() {
		return this.coda.length;
	}

}

class Controller {

	static gen(n,array,last_indice) {

		var indice = Simone.getAt(n);
		Controller.accendi(document.getElementById(array[last_indice]),"lightgoldenrodyellow");
		Controller.accendi(document.getElementById(array[indice]), array[indice]);
		last_indice = indice;

		setTimeout(function () {
				Controller.accendi(document.getElementById(array[last_indice]),"lightgoldenrodyellow");
			}, 400);

		if (n < Simone.N()) {
			
			setTimeout(
				function () {
					Controller.gen(n + 1,array,last_indice);
				}
			, 1000);
		}
	}

	static gioca(L) {
		this.n = 0;
		
		Simone.init(L);

		var array = ["red", "green", "blue"];
		var last_indice = 0;

		Controller.gen(0,array,last_indice);
	}

	static accendi(elemento, colore) {
		elemento.style.backgroundColor = colore;
	}

	static sleep(milliseconds) {
		return new Promise(resolve => setTimeout(resolve, milliseconds));
	}

	static on_click(pos){
		if(Simone.getAt(this.n++)!=pos){
			alert("perso");
		}
		
		if(this.n==Simone.N()){
			Controller.gioca(++this.L);
		}

	}

}
