var mbAttr = 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
				'<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
				'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
			mbUrl = 'https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiZWVuYXR0YXlhbmkiLCJhIjoiY2s4bDQ2MmVnMDA2bTNkcXo4NjJvcTloOSJ9.GjPT1P7ZJ--pzDo9IlOMow';

		var satellite = L.tileLayer(mbUrl, {id: 'mapbox/satellite-v9', tileSize: 512, zoomOffset: -1, attribution: mbAttr}),
		    streets   = L.tileLayer(mbUrl, {id: 'mapbox/streets-v11', tileSize: 512, zoomOffset: -1, attribution: mbAttr}),
		    grayscale = L.tileLayer(mbUrl, {id: 'mapbox/streets-v8', tileSize: 512, zoomOffset: -1, attribution: mbAttr});

// var mymap = L.map('mapid').setView([0.35, 109.1], 10);

var tinggi = 30, lebar = 14;

var panen = L.icon({
		iconUrl: 'img/panen.png',
		iconSize: [lebar, tinggi], 
		iconAnchor: [22, 14],
		popupAnchor: [-13, -20]
});

var standingCrop = L.icon({
		iconUrl: 'img/standing-crop.png',
		iconSize: [lebar, tinggi], 
		iconAnchor: [22, 14],
		popupAnchor: [-13, -20]
});

var semai = L.icon({
		iconUrl: 'img/semai.png',
		iconSize: [lebar, tinggi], 
		iconAnchor: [22, 14],
		popupAnchor: [-13, -20]
});



/*var panen = new statusTanaman({iconUrl: 'img/panen.png'}),
	semai = new statusTanaman({iconUrl: 'img/semai.png'}),
	standingCrop = new statusTanaman({iconUrl: 'img/standing-crop.png'});
*/

// token = pk.eyJ1IjoiZWVuYXR0YXlhbmkiLCJhIjoiY2s4bDQ2MmVnMDA2bTNkcXo4NjJvcTloOSJ9.GjPT1P7ZJ--pzDo9IlOMow

/*		L.tileLayer(mbUrl, {
			maxZoom: 18,
			attribution: mbAttr,
			id: 'mapbox/streets-v11',
			tileSize: 512,
			zoomOffset: -1
		}).addTo(mymap);
*/
		var myStyle = {
		    "color": "#75cf7c",
		    "weight": 2,
		    "opacity": 0.65
		};

		


	/*	var geojsonLayer = new L.GeoJSON.AJAX("mempawah.geojson");       
		geojsonLayer.addTo(mymap);
*/
//		L.marker([0.358194, 108.961521]).addTo(mymap).bindPopup("MEMPAWAH");
		var ketSc = "<br> Status: STANDING CROP",
			ketPratanam = "<br> Status: PRA TANAM",
			ketSemai = "<br> Status: SEMAI",
			ketPanen = "<br> Status: SIAP PANEN";
		

		var pratanamJagung = [
			L.marker([0.582265, 109.121017], {icon: semai}).bindPopup("Tanaman: Jagung 1" + ketPratanam), 
			L.marker([0.564413, 109.202728], {icon: semai}).bindPopup("Tanaman: Jagung 2" + ketPratanam),
			L.marker([0.480646, 109.255257], {icon: semai}).bindPopup("Tanaman: Jagung 3" + ketPratanam)
		];

		var scJagung = [
				L.marker([0.368726, 109.001541], {icon: standingCrop}).bindPopup("Tanaman: Jagung 4" + ketSc),
				L.marker([0.362718, 109.008579], {icon: standingCrop}).bindPopup("Tanaman: Jagung 5" + ketSc),
				L.marker([0.36495, 109.047203], {icon: standingCrop}).bindPopup("Tanaman: Jagung 6" + ketSc),
				L.marker([0.368383, 109.082909], {icon: standingCrop}).bindPopup("Tanaman: Jagung 7" + ketSc)
		];

		var panenJagung = [
			L.marker([0.34744, 109.022827], {icon: panen}).bindPopup("Tanaman: Jagung 8" + ketPanen),
			L.marker([0.333708, 109.043083], {icon: panen}).bindPopup("Tanaman: Jagung 9" + ketPanen),
			L.marker([0.327185, 109.126511], {icon: panen}).bindPopup("Tanaman: Jagung 10" + ketPanen),
			L.marker([0.353277, 109.143677], {icon: panen}).bindPopup("Tanaman: Jagung 11" + ketPanen),
			L.marker([0.244788, 109.269333], {icon: panen}).bindPopup("Tanaman: Jagung 12" + ketPanen),
			L.marker([0.247535, 109.316025], {icon: panen}).bindPopup("Tanaman: Jagung 13" + ketPanen)
		];


	
		var semaiPadi = [
			L.marker([0.535427, 108.942233], {icon: semai}).bindPopup("semai satu"), 
			L.marker([0.401943, 108.975573], {icon: semai}).bindPopup("semai dua"),
			L.marker([0.397780, 108.993168], {icon: semai}).bindPopup("semai tiga")
		];

		var scPadi = [
			L.marker([0.510309, 109.148600], {icon: standingCrop}).bindPopup(ketSc + "1"),
			L.marker([0.502515, 109.166013], {icon: standingCrop}).bindPopup("Standing crop 2"),
			L.marker([0.382579, 109.168471], {icon: standingCrop}).bindPopup("Standing crop 3"),
			L.marker([0.374537, 109.200926], {icon: standingCrop}).bindPopup("Standing crop 4")
		];

		var panenPadi = [
			L.marker([0.424216, 109.231414], {icon: panen}).bindPopup("panen satu"),
			L.marker([0.435076, 109.287040], {icon: panen}).bindPopup("panen dua"),
			L.marker([0.229997, 109.152181], {icon: panen}).bindPopup("panen tiga"),
			L.marker([0.215298, 109.168483], {icon: panen}).bindPopup("panen empat"),
			L.marker([0.192768, 109.239114], {icon: panen}).bindPopup("panen lima"),
			L.marker([0.206135, 109.217648], {icon: panen}).bindPopup("panen enam")
		];

		var padiLayerPanen = L.layerGroup(),
		    padiLayerSemai = L.layerGroup(),
		    padiLayerSc	= L.layerGroup(),
		    jagungLayerPratanam = L.layerGroup(),
		    jagungLayerSc = L.layerGroup(),
		    jagungLayerPanen = L.layerGroup();

	    for(var i = 0; i < semaiPadi.length; i++){L.layerGroup([semaiPadi[i]]).addTo(padiLayerSemai);}
	    for(var i = 0; i < panenPadi.length; i++){L.layerGroup([panenPadi[i]]).addTo(padiLayerPanen);}
	    for(var i = 0; i < scPadi.length; i++){L.layerGroup([scPadi[i]]).addTo(padiLayerSc);}

	    for(var i = 0; i < pratanamJagung.length; i++){L.layerGroup([pratanamJagung[i]]).addTo(jagungLayerPratanam);}
	    for(var i = 0; i < panenJagung.length; i++){L.layerGroup([panenJagung[i]]).addTo(jagungLayerPanen);}
	    for(var i = 0; i < scJagung.length; i++){L.layerGroup([scJagung[i]]).addTo(jagungLayerSc);}

		var padi = L.layerGroup([padiLayerPanen, padiLayerSemai, padiLayerSc]),
			jagung = L.layerGroup([jagungLayerPanen, jagungLayerPratanam, jagungLayerSc]);

		var mymap = L.map('mapid', {
		    center: [0.35, 109.1],
		    zoom: 11,
		    layers: [streets, padi]
		});

		var baseMaps = {
		    "Grayscale": grayscale,
		    "Streets": streets,
		    "Satellite": satellite
		};

		var komoditasPadi = {"padi" : padi},
			komoditasJagung = {"jagung" : jagung};

		var statusPadi = {
			"Semai": padiLayerSemai,
		    "Standing Crop" : padiLayerSc,
		    "Panen" : padiLayerPanen
		};

		var statusJagung = {
		    "Pra tanam": jagungLayerPratanam,
		    "Standing Crop" : jagungLayerSc,
		    "Panen" : jagungLayerPanen
		};

		var layerPadi = new L.control.layers(komoditasPadi, statusPadi);
		var layerJagung = new L.control.layers(komoditasJagung, statusJagung);

		//layerKontrol.addTo(mymap);
		//L.control.layers(baseMaps).addTo(mymap);

		

		
		function popUp(f,l){
		    var out = [];
		    if (f.properties){
		        for(key in f.properties){
		            out.push(key+": "+f.properties[key]);
		        }
		        l.bindPopup(out.join("<br />"));
		    }
		}
		var jsonTest = new L.GeoJSON.AJAX(["mempawah.geojson"],{onEachFeature:popUp, style: myStyle}).addTo(mymap);

		var popup = L.popup();

		function onMapClick(e) {
			popup
				.setLatLng(e.latlng)
				.setContent("Koordinat " + e.latlng.toString())
				.openOn(mymap);
		}

		mymap.on('click', onMapClick);

//non leaflet.js HTML
function pilihKomoditas() {
	var komoditas = document.getElementById("komoditas").value;
	var jenisKomoditas = document.getElementById("jenis-komoditas");
	var legendaMerah = document.getElementById("legenda-merah"),
		legendaBiru = document.getElementById("legenda-biru"),
		legendaHijau = document.getElementById("legenda-hijau");


	jenisKomoditas.innerHTML = komoditas;

	console.log(komoditas);

	if (komoditas == "padi"){
		layerJagung.remove(mymap);
		layerPadi.addTo(mymap);
		
		legendaMerah.innerHTML = "= Pengolahan Tanah dan Semai";

		console.log("pilih padi");
	}

	else if(komoditas == "jagung") {
		layerPadi.remove(mymap);
		layerJagung.addTo(mymap);
		
		legendaMerah.innerHTML = "= Pratanam";

		console.log("pilih jagung");
	}
}

