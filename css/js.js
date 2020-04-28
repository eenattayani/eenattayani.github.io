var tanggal = new Date();
var bulan = ["jan","feb","mar","apr","mei","jun","jul","agu","sep","okt","nov","des"];
document.getElementById("tanggal").innerHTML = tanggal.getDate() + " " + bulan[tanggal.getMonth()] + " " + tanggal.getFullYear();

const body = document.querySelector('body');

const select = document.querySelector('#komoditas');

const berita = document.querySelector('header marquee');

const markPadi = document.querySelectorAll('[class=mark-padi]');
const markJagung = document.querySelectorAll('[class=mark-jagung]');
markJagung[0].style.display = "none";
markPadi[0].style.display = "none";

const padi0 = document.querySelector('input[name=padi0]');
const padi1 = document.querySelector('input[name=padi1]');
const padi2 = document.querySelector('input[name=padi2]');

const jagung0 = document.querySelector('input[name=jagung0]');
const jagung1 = document.querySelector('input[name=jagung1]');
const jagung2 = document.querySelector('input[name=jagung2]');

body.onload = pilihKomoditas;

select.onchange = pilihKomoditas;

berita.onmouseover = berita.stop;
berita.onmouseout = berita.start;


padi0.addEventListener('change', function() {
	if(this.checked) {
		for (var i = semaiPadi.length - 1; i >= 0; i--) {
			semaiPadi[i].addTo(mymap);
		}
	} else {
		for (var i = semaiPadi.length - 1; i >= 0; i--) {
			semaiPadi[i].remove(mymap);
		}
	}
});

padi1.addEventListener('change', function() {
	if(this.checked) {
		for (var i = scPadi.length - 1; i >= 0; i--) {
			scPadi[i].addTo(mymap);
		}
	} else {
		for (var i = scPadi.length - 1; i >= 0; i--) {
			scPadi[i].remove(mymap);
		}
	}
});

padi2.addEventListener('change', function() {
	if(this.checked) {
		for (var i = panenPadi.length - 1; i >= 0; i--) {
			panenPadi[i].addTo(mymap);
		}
	} else {
		for (var i = panenPadi.length - 1; i >= 0; i--) {
			panenPadi[i].remove(mymap);
		}
	}
});

jagung0.addEventListener('change', function() {
	if(this.checked) {
		for (var i = 0; i < pratanamJagung.length; i++) {
			pratanamJagung[i].addTo(mymap);
		}
	} else {
		for (var i = 0; i < pratanamJagung.length; i++) {
			pratanamJagung[i].remove(mymap);
		}
	}
});

jagung1.addEventListener('change', function() {
	if(this.checked) {
		for (var i = 0; i < scJagung.length; i++) {
			scJagung[i].addTo(mymap);
		}
	} else {
		for (var i = 0; i < scJagung.length; i++) {
			scJagung[i].remove(mymap);
		}
	}
});

jagung2.addEventListener('change', function() {
	if(this.checked) {
		for (var i = 0; i < panenJagung.length; i++) {
			panenJagung[i].addTo(mymap);
		}
	} else {
		for (var i = 0; i < panenJagung.length; i++) {
			panenJagung[i].remove(mymap);
		}
	}
});

// fungsi-fungsi

function checkJagung() {
	jagung0.checked = true;
	jagung1.checked = true;
	jagung2.checked = true;
}

function checkPadi() {
	padi0.checked = true;
	padi1.checked = true;
	padi2.checked = true;
}

function cleanMap() {
	jagung.remove(mymap);
	padi.remove(mymap);
}

function pilihKomoditas() {
	var komoditas = document.getElementById("komoditas").value;
	var jenisKomoditas = document.getElementById("jenis-komoditas");
	var legendaMerah = document.getElementById("legenda-merah"),
		legendaBiru = document.getElementById("legenda-biru"),
		legendaHijau = document.getElementById("legenda-hijau");


	jenisKomoditas.innerHTML = komoditas;

	console.log(komoditas);

	if (komoditas == "padi"){
		jagung.remove(mymap);
		padi.addTo(mymap);
		legendaMerah.innerHTML = "= Pengolahan Tanah dan Semai";
		markPadi[0].style.display = "inline";
		markJagung[0].style.display = "none";

		checkPadi();

		console.log("pilih padi");
	}

	else if(komoditas == "jagung") {
		padi.remove(mymap);
		jagung.addTo(mymap);
		legendaMerah.innerHTML = "= Pratanam";
		markJagung[0].style.display = "inline";
		markPadi[0].style.display = "none";

		checkJagung();

		console.log("pilih jagung");
	}

	else {
		cleanMap();
	}
}