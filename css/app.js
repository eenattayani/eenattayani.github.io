var mymap = L.map('mapid').setView([0.37, -250.85], 11);

var panen = L.icon({
		iconUrl: 'img/panen.png',
		iconSize: [20, 40], 
		iconAnchor: [22, 14],
		popupAnchor: [-13, -20]
});

var standingCrop = L.icon({
		iconUrl: 'img/standing-crop.png',
		iconSize: [20, 40], 
		iconAnchor: [22, 14],
		popupAnchor: [-13, -20]
});

var semai = L.icon({
		iconUrl: 'img/semai.png',
		iconSize: [20, 40], 
		iconAnchor: [22, 14],
		popupAnchor: [-13, -20]
});



/*var panen = new statusTanaman({iconUrl: 'img/panen.png'}),
	semai = new statusTanaman({iconUrl: 'img/semai.png'}),
	standingCrop = new statusTanaman({iconUrl: 'img/standing-crop.png'});
*/
		L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
			maxZoom: 18,
			attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
				'<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
				'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
			id: 'mapbox/streets-v11',
			tileSize: 512,
			zoomOffset: -1
		}).addTo(mymap);

		var geojsonLayer = new L.GeoJSON.AJAX("geojson.json");
		geojsonLayer.addTo(mymap);

		L.marker([0.35, -251.03]).addTo(mymap).bindPopup("MEMPAWAH");

		L.marker([0.527336, -251.066437], {icon: semai}).addTo(mymap).bindPopup("semai");
		L.marker([0.407864, -251.029358], {icon: semai}).addTo(mymap).bindPopup("semai");
		L.marker([0.404431, -251.015625], {icon: semai}).addTo(mymap).bindPopup("semai");
		L.marker([0.215606, -250.844307], {icon: panen}).addTo(mymap).bindPopup("panen");
		L.marker([0.209083, -250.834351], {icon: panen}).addTo(mymap).bindPopup("panen");
		L.marker([0.215606, -250.769806], {icon: panen}).addTo(mymap).bindPopup("panen");
		L.marker([0.199127, -250.74646], {icon: panen}).addTo(mymap).bindPopup("panen");
		L.marker([0.424343, -250.75676], {icon: panen}).addTo(mymap).bindPopup("panen");
		L.marker([0.435329, -250.72998], {icon: panen}).addTo(mymap).bindPopup("panen");
		L.marker([0.499872, -250.848083], {icon: standingCrop}).addTo(mymap).bindPopup("Standing crop");
		L.marker([0.483393, -250.832291], {icon: standingCrop}).addTo(mymap).bindPopup("Standing crop");
		L.marker([0.380056, -250.832977], {icon: standingCrop}).addTo(mymap).bindPopup("Standing crop");
		L.marker([0.382802, -250.818901], {icon: standingCrop}).addTo(mymap).bindPopup("Standing crop");

	/*	L.circle([0.35, -251.036], 500, {
			color: 'red',
			fillColor: '#f03',
			fillOpacity: 0.5
		}).addTo(mymap).bindPopup("I am a circle.");

		L.polygon([
			[0.353, -251.028],
			[0.358, -251.018],
			[0.348, -251.01]
		]).addTo(mymap).bindPopup("I am a polygon.");
	
		var popup = L.popup();

		function onMapClick(e) {
			popup
				.setLatLng(e.latlng)
				.setContent("Koordinat " + e.latlng.toString())
				.openOn(mymap);
		}

		mymap.on('click', onMapClick);
*/