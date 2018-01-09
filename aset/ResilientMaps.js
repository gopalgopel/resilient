function IsJsonString(str) {try {JSON.parse(str)}catch (e) {return false}return true}

// MAP LAIN MAP LAIN MAP LAIN MAP LAIN MAP LAIN
// MAP LAIN MAP LAIN MAP LAIN MAP LAIN MAP LAIN
// MAP LAIN MAP LAIN MAP LAIN MAP LAIN MAP LAIN
// var Esri_OceanBasemap = L.tileLayer('http://server.arcgisonline.com/ArcGIS/rest/services/Ocean_Basemap/MapServer/tile/{z}/{y}/{x}', {maxZoom: 13});
var CartoDB_DarkMatter = L.tileLayer('http://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png', {maxZoom: 19});
var standard = L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {maxZoom: 18,});
var primar = L.tileLayer.wms("http://primar.ecc.no/primar/wms_session", {    layers: 'cells',    format: 'image/png',    noWrap: true,    transparent: true    });
var navtoniv = L.tileLayer('https://backend.navionics.io/tile/{z}/{x}/{y}?LAYERS=config_1_20.00_1&TRANSPARENT=FALSE&UGC=TRUE&navtoken=eyJrZXkiOiJOYXZpb25pY3NfaW50ZXJuYWxwdXJwb3NlXzAwMDAxIiwia2V5RG9tYWluIjoid2ViYXBwLm5hdmlvbmljcy5jb20iLCJyZWZlcmVyIjoid2ViYXBwLm5hdmlvbmljcy5jb20iLCJyYW5kb20iOjM2Mjc4fQ');
  
var gray = L.esri.basemapLayer('Gray');//.addTo(map);
var streets = L.esri.basemapLayer('Streets');//.addTo(map);
var topo = L.esri.basemapLayer('Topographic');//.addTo(map);
var nationalgeo = L.esri.basemapLayer('NationalGeographic');//.addTo(map);
var ocean = L.esri.basemapLayer('Oceans');//.addTo(map);
var darkgray = L.esri.basemapLayer('DarkGray');//.addTo(map);
var image = L.esri.basemapLayer('Imagery');//.addTo(map);
var shade = L.esri.basemapLayer('ShadedRelief');//.addTo(map);
var terain = L.esri.basemapLayer('Terrain');//.addTo(map);
var usa = L.esri.basemapLayer('USATopo');//.addTo(map);

// var mid = L.esri.Vector.basemap('MidCentury');//.addTo(map);
// var news = L.esri.Vector.basemap('Newspaper');//.addTo(map);
// var spring = L.esri.Vector.basemap('Spring');//.addTo(map);

var dishidros = L.esri.dynamicMapLayer({url: 'http://hdc.pushidrosal.id/arcgis/rest/services/enc_indonesia/MapServer/exts/MaritimeChartService/MapServer', opacity: 0.6, f:'image'});
// var topoindo = L.esri.dynamicMapLayer({url: 'http://hdc.dishidros.go.id/arcgis/rest/services/enc_indonesia/MapServer/exts/Maritime%20Chart%20Service/MapServer', opacity: 0.6, f:'image'});
var topoindo = L.tileLayer('https://a.tile.thunderforest.com/landscape/{z}/{x}/{y}.png?apikey=a5dd6a2f1c934394bce6b0fb077203eb', {maxZoom: 19});

// list of topologi map from opencycle free
// https://a.tile.thunderforest.com/cycle/{z}/{x}/{y}.png
// https://a.tile.thunderforest.com/outdoors/{z}/{x}/{y}.png
// https://a.tile.thunderforest.com/transport-dark/{z}/{x}/{y}.png
// https://a.tile.thunderforest.com/landscape/{z}/{x}/{y}.png
// https://a.tile.thunderforest.com/cycle/{z}/{x}/{y}.png
// https://a.tile.thunderforest.com/cycle/{z}/{x}/{y}.png


var udaraindo= L.esri.dynamicMapLayer({url: 'http://hdc.dishidros.go.id/arcgis/rest/services/enc_indonesia/MapServer/exts/Maritime%20Chart%20Service/MapServer', opacity: 0.6, f:'image'});
// var dishidrost = L.esri.dynamicMapLayer({url: 'http://hdc.dishidros.go.id/arcgis/rest/services/enc_indonesia/MapServer/exts/Maritime%20Chart%20Service/MapServer', opacity: 0.6, 
//   f:'image', format:'jpeg', frames_on:false, 
//   display_params:{"ECDISParameters":{"version":"1.0","StaticParameters":{"Parameter":[{"name":"AreaSymbolizationType","value":2},{"name":"PointSymbolizationType","value":2}]},"DynamicParameters":{"Parameter":[{"name":"ColorScheme","value":1},{"name":"DisplayDepthUnits","value":1},{"name":"TwoDepthShades","value":1},{"name":"DisplayNOBJNM","value":2},{"name":"HonorScamin","value":2},{"name":"ShallowDepthPattern","value":1},{"name":"ShallowContour","value":2},{"name":"SafetyContour","value":10},{"name":"DeepContour","value":30},{"name":"DisplayCategory","value":"1,2,4"}]}}}
// });

var migas = L.esri.dynamicMapLayer({url: 'http://webgis.den.go.id/arcgis/rest/services/Pipa_Hulu_Migas/MapServer', opacity: 0.9, f:'image'});
var rapingla = L.esri.dynamicMapLayer({url: 'http://hdc.dishidros.tnial.mil.id/arcgis/rest/services/raplingla/MapServer', opacity: 0.7, f:'image'});
var pasut = L.esri.dynamicMapLayer({url: 'http://hdc.dishidros.tnial.mil.id/arcgis/rest/services/Pasut/MapServer', opacity: 0.7, f:'image'});

var kkp = L.esri.dynamicMapLayer({
  url: 'http://www.ppk-kp3k.kkp.go.id/ArcGIS/rest/services/kkp/Kawasan/MapServer', 
  opacity: 1,
  useCors : false,
  f:'image'
});

// var ais = L.esri.featureLayer({
var ais = L.esri.Cluster.featureLayer({
    url: 'http://geoeventsample1.esri.com:6080/arcgis/rest/services/Hosted/exactEarthCurrent/FeatureServer/0',
    opacity:1,
    pointToLayer: //setInterval(function(geojson, latlng){
      function (geojson, latlng){   
        console.log(geojson);
        return L.marker(latlng, {rotationAngle: geojson.properties.cog, icon: aiscon})
           .bindPopup("<table width=100% style='font-size:11px'><tr>"+
                      "<td>Nama kapal </td><td>: "+geojson.properties.vessel_name+"</td>"+
                      "</tr><tr>"+
                      "<td>Type kapal </td><td>: "+geojson.properties.vessel_type+"</td>"+
                      "</tr><tr>"+
                      "<td>Kelas Kapal </td><td>: "+geojson.properties.vessel_class+"</td>"+
                      "</tr><tr>"+
                      "<td>Callsign </td><td>: "+geojson.properties.callsign+"</td>"+
                      "</tr><tr>"+
                      "<td>Status </td><td>: "+geojson.properties.nav_status+"</td>"+
                      "</tr><tr>"+
                      "<td>Latitude </td><td>: "+geojson.properties.latitude+"</td>"+
                      "</tr><tr>"+
                      "<td>longitude </td><td>: "+geojson.properties.longitude+"</td>"+
                      "</tr><tr>"+
                      "<td>MMSI </td><td>: "+geojson.properties.mmsi+"</td>"+
                      "</tr><tr>"+
                      "<td>COG </td><td>: "+geojson.properties.cog+"</td>"+
                      "</tr><tr>"+
                      "<td>SOG </td><td>: "+geojson.properties.sog+"</td>"+
                      "</tr><tr>"+
                      "<td>Flag </td><td>: "+geojson.properties.flag+"</td>"+
                      "</tr><tr>"+
                      "<td>Destination </td><td>: "+geojson.properties.destination+"</td>"+
                      "</tr><tr>"+
                      "<td>Draught </td><td>: "+geojson.properties.draught+" m</td>"+
                      "</tr><tr>"+
                      "<td>Panjang </td><td>: "+geojson.properties.length+" m</td>"+
                      "</tr><tr>"+
                      "<td> Lebar </td><td>: "+geojson.properties.width+" m</td>"+
                      "</tr></table>"
                      );
      }
    // }, 5000)
});


/////////////////////

var KRI, LANAL, SATGAS, MARINIR, PANGKALAN, LANUD,LANAD, KODAM, AJENDAM, BandaraM, BandaraS;
KRI = L.layerGroup([]);
LANAL = L.layerGroup([]);
MARINIR = L.layerGroup([]);
SATGAS = L.layerGroup([]);
PANGKALAN = L.layerGroup([]);
LANUD = L.layerGroup([]);
LANAD = L.layerGroup([]);
KODAM = L.layerGroup([]);
AJENDAM = L.layerGroup([]);
BandaraM = L.layerGroup([]);
BandaraS = L.layerGroup([]);
var tni = {
	"Peta Militer":{
		"Peta TNI AL" : dishidros,
        "Peta TNI AD" : topoindo,
        "Peta TNI AU" : udaraindo,
	},
	"Kekuatan TNI AL":{
		"KRI": KRI,
        "Lanal" : LANAL,
        "Marinir" : MARINIR,
        "Satgas" : SATGAS,
	},
	"Kekuatan TNI AD":{
		"Kodam" : KODAM,
        "Lanad" : LANAD,
        "Ajendam": AJENDAM,
	},
	"Kekuatan TNI AU":{
		"Pangkalan " : PANGKALAN,
        "Bandara Militer": BandaraM,
        "Bandara Sipil": BandaraS,
        "Lanud": LANUD
	}
};
// layerControl2 = L.control.layers(tni).addTo(map);

// control layer lainnya
// control layer lainnya
// control layer lainnya


// INIT MAP INIT MAP INIT MAP INIT MAP INIT MAP
// INIT MAP INIT MAP INIT MAP INIT MAP INIT MAP
// INIT MAP INIT MAP INIT MAP INIT MAP INIT MAP
var map;
var overlays, baseMaps, bsm, layerControl1, layerControl2;
var configMap = {
        latCenter : 6-(6-(-11))/2,
        lonCenter : 95+(141-95)/2,
        zoom :5,
        mapUrl : 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
        mapStyleId : 22677
};

// var minimal   = L.tileLayer(configMap.mapUrl,{styleId: configMap.mapStyleId});  

map = new L.map('map', {
  // drawControl: true,
  center: [configMap.latCenter, configMap.lonCenter],
  zoom: configMap.zoom,
  layers: [standard],
  maxZoom : 18,
  minZoom : 3
  // worldCopyJump : true
});

// ICON ICON ICON
var ikanpari = L.icon({
  iconUrl: 'aset/img/paripari.png',      
  iconSize:     [40, 40], 
  iconAnchor:   [20, 20], 
});
var ikanbiru = L.icon({
  iconUrl: 'aset/img/ikanbiru.png',      
  iconSize:     [40, 40], 
  iconAnchor:   [20, 20], 
});
var ikanmerah = L.icon({
  iconUrl: 'aset/img/ikanmerah.png',      
  iconSize:     [40, 40], 
  iconAnchor:   [20, 20], 
});
var ikanoren = L.icon({
  iconUrl: 'aset/img/ikanoren.png',      
  iconSize:     [40, 40], 
  iconAnchor:   [20, 20], 
});
var ikanpink = L.icon({
  iconUrl: 'aset/img/ikanpink.png',      
  iconSize:     [40, 40], 
  iconAnchor:   [20, 20], 
});
var ikanhiu = L.icon({
  iconUrl: 'aset/img/hiuhiu.png',      
  iconSize:     [40, 40], 
  iconAnchor:   [20, 20], 
});
var ikanpaus = L.icon({
  iconUrl: 'aset/img/pauspaus.png',      
  iconSize:     [40, 40], 
  iconAnchor:   [20, 20], 
});
var kepitingicon = L.icon({
  iconUrl: 'aset/img/kepiting.png',      
  iconSize:     [40, 40], 
  iconAnchor:   [20, 20], 
});
var udangicon = L.icon({
  iconUrl: 'aset/img/udangudang.png',      
  iconSize:     [40, 40], 
  iconAnchor:   [20, 20], 
});
var cumiicon = L.icon({
  iconUrl: 'aset/img/cumicumi.png',      
  iconSize:     [40, 40], 
  iconAnchor:   [20, 20], 
});
var lobstericon = L.icon({
  iconUrl: 'aset/img/lobterlobster.png',      
  iconSize:     [40, 40], 
  iconAnchor:   [20, 20], 
});
var gmpaIcon = L.icon({
  iconUrl: 'aset/img/epic.gif',      
  iconSize:     [50, 50], 
  iconAnchor:   [25, 25], 
});
var aiscon = L.icon({
  iconUrl: 'aset/img/v.png',      
  iconSize:     [24, 24], 
  iconAnchor:   [12, 12], 
});


// INIT IKAN INIT IKAN INIT IKAN INIT IKAN INIT IKAN 
// INIT IKAN INIT IKAN INIT IKAN INIT IKAN INIT IKAN 
var tuna= L.layerGroup([]), pari= L.layerGroup([]), hiu= L.layerGroup([]), cakalang= L.layerGroup([]), tongkol= L.layerGroup([]), makarel= L.layerGroup([]), paus= L.layerGroup([]), cumi= L.layerGroup([]), udang= L.layerGroup([]), lobster= L.layerGroup([]), kepiting= L.layerGroup([]); 

$.ajax({
  type: 'GET',        
  url: 'aset/ikan.json',        
  success:function(ikan){
  	console.log(ikan);
  	for(var i=0; i<ikan.length; i++){
  		if(ikan[i].ikan === "tuna"){
  			var mark = L.marker([ikan[i].koor.lat, ikan[i].koor.lon], {icon:ikanmerah})
  			.bindPopup("<table width=100% style='font-size:11px'><tr>"+
                      "<td>Ikan </td><td>: "+ikan[i].ikan+"</td>"+
                      "</tr><tr>"+
                      "<td>Keterangan </td><td>: "+ikan[i].desc+"</td>"+
                      "</tr><tr>"+
                      "<td>Prediksi muncul </td><td>: "+ikan[i].tgl+"</td>"+
                      "</tr><tr>"+
                      "<td>Jam muncul </td><td>: "+ikan[i].jam+"</td>"+
                      "</tr><tr>"+
                      "<td>Lokasi </td><td>: "+ikan[i].koor.lat+", "+ikan[i].koor.lon+"</td>"+
                      "</tr></table>"
                      );
  			tuna.addLayer(mark);
  		}
  		if(ikan[i].ikan === "pari"){
  			var mark = L.marker([ikan[i].koor.lat, ikan[i].koor.lon], {icon:ikanpari})
  			.bindPopup("<table width=100% style='font-size:11px'><tr>"+
                      "<td>Ikan </td><td>: "+ikan[i].ikan+"</td>"+
                      "</tr><tr>"+
                      "<td>Keterangan </td><td>: "+ikan[i].desc+"</td>"+
                      "</tr><tr>"+
                      "<td>Prediksi muncul </td><td>: "+ikan[i].tgl+"</td>"+
                      "</tr><tr>"+
                      "<td>Jam muncul </td><td>: "+ikan[i].jam+"</td>"+
                      "</tr><tr>"+
                      "<td>Lokasi </td><td>: "+ikan[i].koor.lat+", "+ikan[i].koor.lon+"</td>"+
                      "</tr></table>"
                      );
  			pari.addLayer(mark);
  		}
  		if(ikan[i].ikan === "hiu"){
  			var mark = L.marker([ikan[i].koor.lat, ikan[i].koor.lon], {icon:ikanhiu})
  			.bindPopup("<table width=100% style='font-size:11px'><tr>"+
                      "<td>Ikan </td><td>: "+ikan[i].ikan+"</td>"+
                      "</tr><tr>"+
                      "<td>Keterangan </td><td>: "+ikan[i].desc+"</td>"+
                      "</tr><tr>"+
                      "<td>Prediksi muncul </td><td>: "+ikan[i].tgl+"</td>"+
                      "</tr><tr>"+
                      "<td>Jam muncul </td><td>: "+ikan[i].jam+"</td>"+
                      "</tr><tr>"+
                      "<td>Lokasi </td><td>: "+ikan[i].koor.lat+", "+ikan[i].koor.lon+"</td>"+
                      "</tr></table>"
                      );
  			hiu.addLayer(mark);
  		}
  		if(ikan[i].ikan === "paus"){
  			var mark = L.marker([ikan[i].koor.lat, ikan[i].koor.lon], {icon:ikanpaus})
  			.bindPopup("<table width=100% style='font-size:11px'><tr>"+
                      "<td>Ikan </td><td>: "+ikan[i].ikan+"</td>"+
                      "</tr><tr>"+
                      "<td>Keterangan </td><td>: "+ikan[i].desc+"</td>"+
                      "</tr><tr>"+
                      "<td>Prediksi muncul </td><td>: "+ikan[i].tgl+"</td>"+
                      "</tr><tr>"+
                      "<td>Jam muncul </td><td>: "+ikan[i].jam+"</td>"+
                      "</tr><tr>"+
                      "<td>Lokasi </td><td>: "+ikan[i].koor.lat+", "+ikan[i].koor.lon+"</td>"+
                      "</tr></table>"
                      );
  			paus.addLayer(mark);
  		}
  		if(ikan[i].ikan === "cakalang"){
  			var mark = L.marker([ikan[i].koor.lat, ikan[i].koor.lon], {icon:ikanbiru})
  			.bindPopup("<table width=100% style='font-size:11px'><tr>"+
                      "<td>Ikan </td><td>: "+ikan[i].ikan+"</td>"+
                      "</tr><tr>"+
                      "<td>Keterangan </td><td>: "+ikan[i].desc+"</td>"+
                      "</tr><tr>"+
                      "<td>Prediksi muncul </td><td>: "+ikan[i].tgl+"</td>"+
                      "</tr><tr>"+
                      "<td>Jam muncul </td><td>: "+ikan[i].jam+"</td>"+
                      "</tr><tr>"+
                      "<td>Lokasi </td><td>: "+ikan[i].koor.lat+", "+ikan[i].koor.lon+"</td>"+
                      "</tr></table>"
                      );
  			cakalang.addLayer(mark);
  		}
  		if(ikan[i].ikan === "tongkol"){
  			var mark = L.marker([ikan[i].koor.lat, ikan[i].koor.lon], {icon:ikanoren})
  			.bindPopup("<table width=100% style='font-size:11px'><tr>"+
                      "<td>Ikan </td><td>: "+ikan[i].ikan+"</td>"+
                      "</tr><tr>"+
                      "<td>Keterangan </td><td>: "+ikan[i].desc+"</td>"+
                      "</tr><tr>"+
                      "<td>Prediksi muncul </td><td>: "+ikan[i].tgl+"</td>"+
                      "</tr><tr>"+
                      "<td>Jam muncul </td><td>: "+ikan[i].jam+"</td>"+
                      "</tr><tr>"+
                      "<td>Lokasi </td><td>: "+ikan[i].koor.lat+", "+ikan[i].koor.lon+"</td>"+
                      "</tr></table>"
                      );
  			tongkol.addLayer(mark);
  		}
  		if(ikan[i].ikan === "makarel"){
  			var mark = L.marker([ikan[i].koor.lat, ikan[i].koor.lon], {icon:ikanpink})
  			.bindPopup("<table width=100% style='font-size:11px'><tr>"+
                      "<td>Ikan </td><td>: "+ikan[i].ikan+"</td>"+
                      "</tr><tr>"+
                      "<td>Keterangan </td><td>: "+ikan[i].desc+"</td>"+
                      "</tr><tr>"+
                      "<td>Prediksi muncul </td><td>: "+ikan[i].tgl+"</td>"+
                      "</tr><tr>"+
                      "<td>Jam muncul </td><td>: "+ikan[i].jam+"</td>"+
                      "</tr><tr>"+
                      "<td>Lokasi </td><td>: "+ikan[i].koor.lat+", "+ikan[i].koor.lon+"</td>"+
                      "</tr></table>"
                      );
  			makarel.addLayer(mark);
  		}
  		if(ikan[i].ikan === "cumi"){
  			var mark = L.marker([ikan[i].koor.lat, ikan[i].koor.lon], {icon:cumiicon})
  			.bindPopup("<table width=100% style='font-size:11px'><tr>"+
                      "<td>Ikan </td><td>: "+ikan[i].ikan+"</td>"+
                      "</tr><tr>"+
                      "<td>Keterangan </td><td>: "+ikan[i].desc+"</td>"+
                      "</tr><tr>"+
                      "<td>Prediksi muncul </td><td>: "+ikan[i].tgl+"</td>"+
                      "</tr><tr>"+
                      "<td>Jam muncul </td><td>: "+ikan[i].jam+"</td>"+
                      "</tr><tr>"+
                      "<td>Lokasi </td><td>: "+ikan[i].koor.lat+", "+ikan[i].koor.lon+"</td>"+
                      "</tr></table>"
                      );
  			cumi.addLayer(mark);
  		}
  		if(ikan[i].ikan === "udang"){
  			var mark = L.marker([ikan[i].koor.lat, ikan[i].koor.lon], {icon:udangicon})
  			.bindPopup("<table width=100% style='font-size:11px'><tr>"+
                      "<td>Ikan </td><td>: "+ikan[i].ikan+"</td>"+
                      "</tr><tr>"+
                      "<td>Keterangan </td><td>: "+ikan[i].desc+"</td>"+
                      "</tr><tr>"+
                      "<td>Prediksi muncul </td><td>: "+ikan[i].tgl+"</td>"+
                      "</tr><tr>"+
                      "<td>Jam muncul </td><td>: "+ikan[i].jam+"</td>"+
                      "</tr><tr>"+
                      "<td>Lokasi </td><td>: "+ikan[i].koor.lat+", "+ikan[i].koor.lon+"</td>"+
                      "</tr></table>"
                      );
  			udang.addLayer(mark);
  		}
  		if(ikan[i].ikan === "kepiting"){
  			var mark = L.marker([ikan[i].koor.lat, ikan[i].koor.lon], {icon:kepitingicon})
  			.bindPopup("<table width=100% style='font-size:11px'><tr>"+
                      "<td>Ikan </td><td>: "+ikan[i].ikan+"</td>"+
                      "</tr><tr>"+
                      "<td>Keterangan </td><td>: "+ikan[i].desc+"</td>"+
                      "</tr><tr>"+
                      "<td>Prediksi muncul </td><td>: "+ikan[i].tgl+"</td>"+
                      "</tr><tr>"+
                      "<td>Jam muncul </td><td>: "+ikan[i].jam+"</td>"+
                      "</tr><tr>"+
                      "<td>Lokasi </td><td>: "+ikan[i].koor.lat+", "+ikan[i].koor.lon+"</td>"+
                      "</tr></table>"
                      );
  			kepiting.addLayer(mark);
  		}
  		if(ikan[i].ikan === "lobster"){
  			var mark = L.marker([ikan[i].koor.lat, ikan[i].koor.lon], {icon:lobstericon})
  			.bindPopup("<table width=100% style='font-size:11px'><tr>"+
                      "<td>Ikan </td><td>: "+ikan[i].ikan+"</td>"+
                      "</tr><tr>"+
                      "<td>Keterangan </td><td>: "+ikan[i].desc+"</td>"+
                      "</tr><tr>"+
                      "<td>Prediksi muncul </td><td>: "+ikan[i].tgl+"</td>"+
                      "</tr><tr>"+
                      "<td>Jam muncul </td><td>: "+ikan[i].jam+"</td>"+
                      "</tr><tr>"+
                      "<td>Lokasi </td><td>: "+ikan[i].koor.lat+", "+ikan[i].koor.lon+"</td>"+
                      "</tr></table>"
                      );
  			lobster.addLayer(mark);
  		}
  	}

  }, error:function(e){
  	console.log(e);
  }
});

var ikan = {
	"Prediksi Ikan <br>3 hari kedepan ":{
		"<font color='red'>Tuna</font>" : tuna,
        "<font color='#009999'>Pari " : pari,
        "<font color='#006600'>Hiu " : hiu,
        "<font color='#0066ff'>Cakalang " : cakalang,
        "<font color='#ff6600'>Tongkol " : tongkol,
        "<font color='#cc0099'>Makarel " : makarel,
        "<font color='#0099ff'>Paus " : paus
	},
	"Lainnya":{
		"Cumi": cumi,
        "<font color='#ff6600'>Udang" : udang,
        "<font color='#6600ff'>Lobster " : lobster,
        "<font color='#339966'>Kepiting " : kepiting
	}
};

    
// draw and edit control    
    var drawnItems = L.featureGroup().addTo(map);
    // L.control.layers(null, { 'drawlayer': drawnItems }, { position: 'topleft'}).addTo(map);
    var ldraw = new L.Control.Draw({
        edit: {
            featureGroup: drawnItems,
            poly: {
                allowIntersection: false  
                // shapeOptions:{showMeasurements: true}
                // selectedPathOptions:{showMeasurements: true}
                // edit:{selectedPathOptions:{updateMeasurements: true}}
                // showMeasurements: true
            }
            // edit:{selectedPathOptions:{updateMeasurements: true}}
        },
        draw: {
            polygon: {
                allowIntersection: false,
                shapeOptions:{showMeasurements: true},
                showArea: true
            },
            // polygonabu: {
            //     allowIntersection: false,
            //     shapeOptions:{color: "#808080",showMeasurements: true},
            //     showArea: true
            // },
            // polygonmerah: {
            //     allowIntersection: false,
            //     shapeOptions:{color: "#ff0000",showMeasurements: true},
            //     showArea: true
            // },
            // polygonbiru: {
            //     allowIntersection: false,
            //     shapeOptions:{color: "#0066ff",showMeasurements: true},
            //     showArea: true
            // },
            // polygonkuning: {
            //     allowIntersection: false,
            //     shapeOptions:{color: "#ffff00",showMeasurements: true},
            //     showArea: true
            // },
            // polygonhijau: {
            //     allowIntersection: false,
            //     shapeOptions:{color: "#00ff00",showMeasurements: true},
            //     showArea: true
            // },
            // polygonungu: {
            //     allowIntersection: false,
            //     shapeOptions:{color: "#cc00cc",showMeasurements: true},
            //     showArea: true
            // },
            polyline: {
                shapeOptions:{
                  showMeasurements: true
                }
            },
            rectangle: {
                showRadius: true,
                shapeOptions:{showMeasurements: true}
            },
            // markermerah: {
            //     icon: new L.icon({
            //               iconUrl: 'aset/img/iconmerah.png',
            //               iconSize: [10, 10],
            //               iconAnchor: [5, 5],
            //               popupAnchor: [5,5]
            //           })
            // },
            // markerhijau: {
            //     icon: new L.icon({
            //               iconUrl: 'aset/img/iconhijau.png',
            //               iconSize: [10, 10],
            //               iconAnchor: [5, 5],
            //               popupAnchor: [5,5]
            //           })
            // },
            // markerbiru: {
            //     icon: new L.icon({
            //               iconUrl: 'aset/img/iconbiru.png',
            //               iconSize: [10, 10],
            //               iconAnchor: [5, 5],
            //               popupAnchor: [5,5]
            //           })
            // },
            // markerungu: {
            //     icon: new L.icon({
            //               iconUrl: 'aset/img/iconungu.png',
            //               iconSize: [10, 10],
            //               iconAnchor: [5, 5],
            //               popupAnchor: [5,5]
            //           })
            // },
            // markerabu: {
            //     icon: new L.icon({
            //               iconUrl: 'aset/img/iconabu.png',
            //               iconSize: [10, 10],
            //               iconAnchor: [5, 5],
            //               popupAnchor: [5,5]
            //           })
            // },
            circle: {
                shapeOptions:{showMeasurements: true}
            }
        }
    });
    ldraw.addTo(map);
    
    map.on(L.Draw.Event.CREATED, function (event) {
        var layer = event.layer;
        // drawnItems.bindPopup('hahahaha');
        // console.log(event);
        myBindPopUp(layer);
        
        drawnItems.addLayer(layer); 
    });

// window prompt, asking bindpopup!    
function myBindPopUp(objek) {
    var popup = prompt("Masukan deskripsi dari gambar / marker", "");
    
    if (popup != null) {
        objek.bindPopup(popup);
    }
}
//window prompt, asking bindpopup!


// menu easy button
// var helloPopup = L.popup().setContent('munculin sesuatu');
// L.easyButton('fa-tree', function(btn, map){
//     helloPopup.setLatLng(map.getCenter()).openOn(map);
// }).addTo(map);

//menu custom button
// L.control.custom({
//     position: 'topright',
//     content : //'<button type="button" class="btn btn-default">'+
//               // '    <i class="fa fa-crosshairs"></i>'+
//               // '</button>'+
//               // '<button type="button" class="btn btn-info">'+
//               // '    <i class="fa fa-compass"></i>'+
//               // '</button>'+
//               // '<button type="button" class="btn btn-primary">'+
//               // '    <i class="fa fa-spinner fa-pulse fa-fw"></i>'+
//               // '</button>'+
//               // '<button type="button" class="btn btn-danger">'+
//               // '    <i class="fa fa-times"></i>'+
//               // '</button>'+
//               // '<a href="backend.html">'+
//               '<button type="button" class="btn btn-success">'+
//               '    <i class="fa fa-gears"></i>'+
//               '    Menu Pengaturan! '+
//               // '</a>'+
//               // '    <i class="fa fa-check"></i>'+
//               // '</button>'+
//               // '<button type="button" class="btn btn-warning">'+
//               // '    <i class="fa fa-exclamation-triangle"></i>'+
//               '</button>',
//     // classes : 'btn-group-vertical btn-group-sm',
//     classes : 'btn-group btn-group-sm',
//     style   :
//     {
//         // margin: '10px',
//         // padding: '0px 0 0 0',
//         // marginLeft: '-90px',
//         // marginTop: '10px',
//         cursor: 'pointer',
//         // position: 'absolute',
    
//     },
//     datas   :
//     {
//         'foo': 'bar',
//     },
//     events:
//     {
//         click: function(data)
//         {
//             console.log('wrapper div element clicked');
//             console.log(data);
//             window.location.href = "backend.html";
//         },
//         dblclick: function(data)
//         {
//             console.log('wrapper div element dblclicked');
//             console.log(data);
//         },
//         contextmenu: function(data)
//         {
//             console.log('wrapper div element contextmenu');
//             console.log(data);
//         },
//     }
// })
// .addTo(map);

// LEAFLET search
map.addControl( new L.Control.Search({
    url: 'http://nominatim.openstreetmap.org/search?format=json&q={s}',
    jsonpParam: 'json_callback',
    propertyName: 'display_name',
    propertyLoc: ['lat','lon'],
    marker: L.circleMarker([0,0],{radius:20}),
    // autoCollapse: true,
    autoType: false,
    position: 'topright',
    collapsed: false,
    // autoCollapse: false,
    // hideMarkerOnCollapse: true,
    minLength: 2
  }) );

// L.polyline([
//         [57.67, 11.85],
//         [57.677, 11.86],
//         [57.68, 11.85],
//         [57.69, 11.86],
//     ], {showMeasurements: true, measurementOptions: {imperial:true}})
//     .addTo(map);


baseMaps = {
  "Navtonic": navtoniv,
  "Black": CartoDB_DarkMatter,
  "OSM Standard": standard,
  "Gray": gray, 
  "Streets": streets,
  "Topo": topo,
  "NatGeo": nationalgeo,
  "Ocean": ocean,
  "DarkGry": darkgray,
  "Imagy": image,
  "Shade": shade,
  "Terain": terain,
  "USA topo": usa,
  "TNI AD":topoindo
  // "Mid": mid,
  // "Spring" : spring,
  // "News": news
};

bsm = {
  // "Black": CartoDB_DarkMatter,
  "Open Street": standard,
  // "Gray": gray, 
  "Streets": streets,
  "Topo": topo,
  "NatGeo": nationalgeo,
  "Ocean": ocean,
  // "DarkGry": darkgray,
  "Imagy": image,
  "Shade": shade,
  // "Terain": terain
  // "USA topo": usa
  // "Mid": mid,
  // "Spring" : spring,
  // "News": news
};
        
// CUACA GEMPA CUACA GEMPA CUACA GEMPA CUACA GEMPA
// CUACA GEMPA CUACA GEMPA CUACA GEMPA CUACA GEMPA
// CUACA GEMPA CUACA GEMPA CUACA GEMPA CUACA GEMPA
var listGempa = [];
var gempa = L.layerGroup(listGempa);
var angin = L.layerGroup();
var gelombang = L.layerGroup();
var awan = L.layerGroup();
var hujan = L.layerGroup();

var bas = "http://localhost/getcuaca/bin/hasil/"; 
// var bas = "http://192.168.1.118/getcuaca/bin/hasil/"; 
var bmkg = bas+"gempaterkini.xml"; 
// var bmkg = bas+"gempaauto.xml";
var tgl,jam,lat,lon,mag,ked,wil,pot,cek7hr;
var koor = [];

$.ajax({
  type: 'GET',        
  url: bmkg,
  dataType: "xml",
  success:function(xml){
    $(xml).find('Infogempa').each(function(){
      $(this).find("gempa").each(function(){

        info = $(this).text(); 
        $(this).find("Tanggal").each(function(){
          tgl = $(this).text();                   
          var d = new Date();
          d.setDate(d.getDate() - 7); // disini diset brp hari yg lalu, misal 7 hari yg lalu jadinya - 7
          if (d - new Date(tgl) <= 0){cek7hr = true} else cek7hr = false;
        });
        $(this).find("Jam").each(function(){jam = $(this).text()});
        $(this).find("point").each(function(){
          $(this).find("coordinates").each(function(){koor = $(this).text().split(",")}); 
        });
        $(this).find("Lintang").each(function(){lat = $(this).text()});
        $(this).find("Bujur").each(function(){lon = $(this).text()});
        $(this).find("Magnitude").each(function(){mag = $(this).text()});
        $(this).find("Kedalaman").each(function(){ked = $(this).text()});
        $(this).find("Wilayah").each(function(){wil = $(this).text()}); 
        
        // cek ini 2hr lalu ga?
        if (cek7hr){
          // bikin icon
          var gmpa = L.marker([koor[1],koor[0]], {icon: gmpaIcon})
            .bindTooltip("<table  style='font-size:10px'><tr>"+
                          "<td>Tanggal </td><td>: "+tgl+"</td>"+
                        "</tr><tr>"+
                          "<td>Jam </td><td>: "+jam+"</td>"+
                        "</tr><tr>"+
                          "<td>Lintang </td><td>: "+lat+"</td>"+
                        "</tr><tr>"+
                          "<td>Bujur </td><td>: "+lon+"</td>"+
                        "</tr><tr>"+
                          "<td>Magnitude </td><td>: "+mag+"</td>"+
                        "</tr><tr>"+
                          "<td>Kedalaman </td><td>: "+ked+"</td>"+
                        "</tr><tr>"+
                          "<td>Wilayah </td><td>: "+wil+"</td>"+
                        "</tr></table>",
                {opacity:0.8, sticky:true});
          listGempa.push(gmpa);                   
        }// end of cek (if)

      });
    });
    gempa = L.layerGroup(listGempa);
  }
}); 

  
// INIT BATAS INIT BATAS INIT BATAS INIT BATAS
// INIT BATAS INIT BATAS INIT BATAS INIT BATAS
// INIT BATAS INIT BATAS INIT BATAS INIT BATAS
var tik, terline1,terline2,terline3,terline4, pklline1,pklline2,pklline3, tmbline1,tmbline2,tmbline3,tmbline4,tmbline5, zeeline1,zeeline2,zeeline3,zeeline4,zeeline5,zeeline6;
var teri, zee, tmbline, pklline, konline, stline;
var urlbatasL = 'aset/batasline.json';  

$.ajax({
  type: 'GET',        
  url: urlbatasL,        
  success:function(response){
    // console.log('batas',response);
    var teritorialList1 =[]; var teritorialList2 =[]; var teritorialList3 =[]; var teritorialList4 =[];
    var pangkalList1 = []; var pangkalList2 = []; var pangkalList3 = [];
    var tambahanList1 = []; var tambahanList2 = []; var tambahanList3 = []; var tambahanList4 = []; var tambahanList5 = [];
    var zeeList1 = []; var zeeList2 = []; var zeeList3 = []; var zeeList4 = []; var zeeList5 = []; var zeeList6 = [];
    var kontinenList = []; var stList = [];         

    for (i = 0; i < response.features.length; i++) { 
      for (ii = 0; ii < response.features[i].latlon.length; ii++) { 
        if (response.features[i].tag == "ter1"){ tik = new L.LatLng(response.features[i].latlon[ii][1], response.features[i].latlon[ii][0]); teritorialList1.push(tik); }
        if (response.features[i].tag == "ter2"){ tik = new L.LatLng(response.features[i].latlon[ii][1], response.features[i].latlon[ii][0]); teritorialList2.push(tik); }
        if (response.features[i].tag == "ter3"){ tik = new L.LatLng(response.features[i].latlon[ii][1], response.features[i].latlon[ii][0]); teritorialList3.push(tik); }
        if (response.features[i].tag == "ter4"){ tik = new L.LatLng(response.features[i].latlon[ii][1], response.features[i].latlon[ii][0]); teritorialList4.push(tik); }

        if (response.features[i].tag == "pkl1"){ tik = new L.LatLng(response.features[i].latlon[ii][1], response.features[i].latlon[ii][0]); pangkalList1.push(tik); }
        if (response.features[i].tag == "pkl2"){ tik = new L.LatLng(response.features[i].latlon[ii][1], response.features[i].latlon[ii][0]); pangkalList2.push(tik); }
        if (response.features[i].tag == "pkl3"){ tik = new L.LatLng(response.features[i].latlon[ii][1], response.features[i].latlon[ii][0]); pangkalList3.push(tik); }

        if (response.features[i].tag == "tmb1"){ tik = new L.LatLng(response.features[i].latlon[ii][1], response.features[i].latlon[ii][0]); tambahanList1.push(tik); }
        if (response.features[i].tag == "tmb2"){ tik = new L.LatLng(response.features[i].latlon[ii][1], response.features[i].latlon[ii][0]); tambahanList2.push(tik); }
        if (response.features[i].tag == "tmb3"){ tik = new L.LatLng(response.features[i].latlon[ii][1], response.features[i].latlon[ii][0]); tambahanList3.push(tik); }
        if (response.features[i].tag == "tmb4"){ tik = new L.LatLng(response.features[i].latlon[ii][1], response.features[i].latlon[ii][0]); tambahanList4.push(tik); }
        if (response.features[i].tag == "tmb5"){ tik = new L.LatLng(response.features[i].latlon[ii][1], response.features[i].latlon[ii][0]); tambahanList5.push(tik); }

        if (response.features[i].tag == "zee1"){ tik = new L.LatLng(response.features[i].latlon[ii][1], response.features[i].latlon[ii][0]); zeeList1.push(tik); }
        if (response.features[i].tag == "zee2"){ tik = new L.LatLng(response.features[i].latlon[ii][1], response.features[i].latlon[ii][0]); zeeList2.push(tik); }
        if (response.features[i].tag == "zee3"){ tik = new L.LatLng(response.features[i].latlon[ii][1], response.features[i].latlon[ii][0]); zeeList3.push(tik); }
        if (response.features[i].tag == "zee4"){ tik = new L.LatLng(response.features[i].latlon[ii][1], response.features[i].latlon[ii][0]); zeeList4.push(tik); }
        if (response.features[i].tag == "zee5"){ tik = new L.LatLng(response.features[i].latlon[ii][1], response.features[i].latlon[ii][0]); zeeList5.push(tik); }
        if (response.features[i].tag == "zee6"){ tik = new L.LatLng(response.features[i].latlon[ii][1], response.features[i].latlon[ii][0]); zeeList6.push(tik); }

        if (response.features[i].tag == "kon"){ tik = new L.LatLng(response.features[i].latlon[ii][1], response.features[i].latlon[ii][0]); kontinenList.push(tik); }
        if (response.features[i].tag == "197"){ tik = new L.LatLng(response.features[i].latlon[ii][1], response.features[i].latlon[ii][0]); stList.push(tik); }         
      }
    }
    
    terline1 = new L.polyline(teritorialList1, {color: "#7700ff", weight: 2, opacity: 1, smoothFactor: 1, dashArray: '3, 4'}).bindTooltip('batas teritorial', { noHide: true }); //.addTo(map);
    terline2 = new L.polyline(teritorialList2, {color: "#7700ff", weight: 2, opacity: 1, smoothFactor: 1, dashArray: '3, 4'}).bindTooltip('batas teritorial', { noHide: true }); //.addTo(map);
    terline3 = new L.polyline(teritorialList3, {color: "#7700ff", weight: 2, opacity: 1, smoothFactor: 1, dashArray: '3, 4'}).bindTooltip('batas teritorial', { noHide: true }); //.addTo(map);
    terline4 = new L.polyline(teritorialList4, {color: "#7700ff", weight: 2, opacity: 1, smoothFactor: 1, dashArray: '3, 4'}).bindTooltip('batas teritorial', { noHide: true }); //.addTo(map);

    pklline1 = new L.polyline(pangkalList1, {color: 'red', weight: 2, opacity: 1, smoothFactor: 1, dashArray: '3, 4'}).bindTooltip('garis pangkal', { noHide: true }); //.addTo(map);
    pklline2 = new L.polyline(pangkalList2, {color: 'red', weight: 2, opacity: 1, smoothFactor: 1, dashArray: '3, 4'}).bindTooltip('garis pangkal', { noHide: true }); //.addTo(map);
    pklline3 = new L.polyline(pangkalList3, {color: 'red', weight: 2, opacity: 1, smoothFactor: 1, dashArray: '3, 4'}).bindTooltip('garis pangkal', { noHide: true }); //.addTo(map);

    tmbline1 = new L.polyline(tambahanList1, {color: "#DBA901", weight: 2, opacity: 1, smoothFactor: 1, dashArray: '3, 4'}).bindTooltip('zona tambahan', { noHide: true }); //.addTo(map);
    tmbline2 = new L.polyline(tambahanList2, {color: "#DBA901", weight: 2, opacity: 1, smoothFactor: 1, dashArray: '3, 4'}).bindTooltip('zona tambahan', { noHide: true }); //.addTo(map);
    tmbline3 = new L.polyline(tambahanList3, {color: "#DBA901", weight: 2, opacity: 1, smoothFactor: 1, dashArray: '3, 4'}).bindTooltip('zona tambahan', { noHide: true }); //.addTo(map);
    tmbline4 = new L.polyline(tambahanList4, {color: "#DBA901", weight: 2, opacity: 1, smoothFactor: 1, dashArray: '3, 4'}).bindTooltip('zona tambahan', { noHide: true }); //.addTo(map);
    tmbline5 = new L.polyline(tambahanList5, {color: "#DBA901", weight: 2, opacity: 1, smoothFactor: 1, dashArray: '3, 4'}).bindTooltip('zona tambahan', { noHide: true }); //.addTo(map);

    zeeline1 = new L.polyline(zeeList1, {color: "#088A08", weight: 2, opacity: 1, smoothFactor: 1, dashArray: '3, 4'}).bindTooltip('ZEE', { noHide: true }); //.addTo(map);
    zeeline2 = new L.polyline(zeeList2, {color: "#088A08", weight: 2, opacity: 1, smoothFactor: 1, dashArray: '3, 4'}).bindTooltip('ZEE', { noHide: true }); //.addTo(map);
    zeeline3 = new L.polyline(zeeList3, {color: "#088A08", weight: 2, opacity: 1, smoothFactor: 1, dashArray: '3, 4'}).bindTooltip('ZEE', { noHide: true }); //.addTo(map);
    zeeline4 = new L.polyline(zeeList4, {color: "#088A08", weight: 2, opacity: 1, smoothFactor: 1, dashArray: '3, 4'}).bindTooltip('ZEE', { noHide: true }); //.addTo(map);
    zeeline5 = new L.polyline(zeeList5, {color: "#088A08", weight: 2, opacity: 1, smoothFactor: 1, dashArray: '3, 4'}).bindTooltip('ZEE', { noHide: true }); //.addTo(map);
    zeeline6 = new L.polyline(zeeList6, {color: "#088A08", weight: 2, opacity: 1, smoothFactor: 1, dashArray: '3, 4'}).bindTooltip('ZEE', { noHide: true }); //.addTo(map);

    konline = new L.polyline(kontinenList, {color: "#2E9AFE", weight: 2, opacity: 1, smoothFactor: 1, dashArray: '3, 4'}).bindTooltip('landas kontinent', { noHide: true }); //.addTo(map);
    stline = new L.polyline(stList, {color: "#0901ff", weight: 2, opacity: 1, smoothFactor: 1, dashArray: '3, 4'}).bindTooltip('perjanjian 1997', { noHide: true }); //.addTo(map);

    teri = L.layerGroup([terline1, terline2, terline3, terline4]);
    zee = L.layerGroup([zeeline1, zeeline2, zeeline3, zeeline4, zeeline5, zeeline6]);
    tmbline = L.layerGroup([tmbline1, tmbline2, tmbline3, tmbline4, tmbline5]);
    pklline = L.layerGroup([pklline1, pklline2, pklline3]);
    
    //masukin semua overlays disini
    overlays = {
        // "Batas Wilayah":{
        	// "<font color='#2E9AFE'>Landas Kontinent</font>": konline, 
        	// "<font color='#0901ff'>Perjanjian 1997</font>": stline, 
        	"<font color='red'>Garis Batas</font>": pklline,
	        "<font color='#7700ff'>Teritorial</font>": teri,
	        "<font color='#DBA901'>Zona Plus</font>": tmbline, 
	        "<font color='#088A08'>ZEE</font><br><br><b>Peta Tambahan :</b>": zee,
        // },
        // "Peta Tambahan":{
        	"Dishidros" : dishidros,
	        // "DishidrosT" : dishidrost,
	        "AIS": ais,
	        "KKP wilayah" : kkp,
	        "Hulu Migas" : migas,
	        "Rapingla" : rapingla,
	        "Pasut <br><br><b>Cuaca & Gempa:</b>" : pasut,
        // },
        // "Cuaca & Gempa":{
        	"Gempa 7hr": gempa,
	        "Angin": angin,
	        "Gelombang": gelombang,
	        "Awan": awan,
	        "Hujan": hujan
        // }
    };

    layerControl1 = L.control.layers(baseMaps, overlays).addTo(map);
    layerControl2 = L.control.groupedLayers(null,tni, {position:'topright'}).addTo(map);
    var layerControl3 = L.control.groupedLayers(null,ikan, {position:'topright'}).addTo(map);
  },
  error: function() {
    console.log("Error json request"); 
    window.confirm("Data batas gagal diload");
  }
}); 

// LAIN LAIN LAIN LAIN LAIN LAIN LAIN LAIN LAIN
// LAIN LAIN LAIN LAIN LAIN LAIN LAIN LAIN LAIN
// LAIN LAIN LAIN LAIN LAIN LAIN LAIN LAIN LAIN


var attrib = new L.Control.Attribution;
map.addControl(attrib); 
attrib.setPrefix('Koordinat : ');
map.on('mousemove', function(e) {
  attrib.setPrefix('Koordinat : '+e.latlng.lat+", "+e.latlng.lng+'. Zoom:'+map.getZoom()+'. Created by Gopal, 2017');
});

// var locateControl = L.control.locate({
//   position: "bottomright",
//   drawCircle: true,
//   follow: true,
//   setView: true,
//   keepCurrentZoomLevel: true,
//   markerStyle: {
//     weight: 1,
//     opacity: 0.8,
//     fillOpacity: 0.8
//   },
//   circleStyle: {
//     weight: 1,
//     clickable: false
//   },
//   icon: "fa fa-location-arrow",
//   metric: false,
//   strings: {
//     title: "My location",
//     popup: "You are within {distance} {unit} from this point",
//     outsideMapBoundsMsg: "You seem located outside the boundaries of the map"
//   },
//   locateOptions: {
//     maxZoom: 18,
//     watch: true,
//     enableHighAccuracy: true,
//     maximumAge: 10000,
//     timeout: 10000
//   }
// }).addTo(map);

var EDITSTAT, DRAWSTAT;
map.on('draw:editstart', function(e) {
       EDITSTAT = true;       
});
map.on('draw:editstop', function() {
  EDITSTAT = false;
});
map.on('draw:drawstart', function(e) {
  var type = e.layerType;
  if (type === 'polyline' || type === 'polygon')
       DRAWSTAT = true;
});
map.on('draw:drawstop', function() {
  DRAWSTAT = false;
});
// calculate_bearing(awal,new L.LatLng(lat,lon));

// function calculate_bearing(start_pos,stop_pos){
//   var lat1 = Geo.parseDMS(start_pos.lat);
//   var lon1 = Geo.parseDMS(start_pos.lng);
//   var lat2 = Geo.parseDMS(stop_pos.lat);
//   var lon2 = Geo.parseDMS(stop_pos.lng);
//   var p1 = new LatLon(lat1, lon1);
//   var p2 = new LatLon(lat2, lon2);
//   lat1=null;lat2=null;lon1=null;lon2=null;
//   return Geo.toBrng(p1.bearingTo(p2),'dm');
//   p1=null;p2=null;
// }


// L.control.scale().addTo(map);
// L.control.betterscale().addTo(map);

map.addControl(new L.Control.ScaleNautic({
                metric: true,
                imperial: true,
                nautic: true
            }));


// adding test data
   // var geojson1 = L.geoJson(JSON.parse(data1),opts1).addTo(map);
   // var geojson2= L.geoJson(JSON.parse(data2),opts2).addTo(map);

//     .addTo(map);


   // setting options 
   // var options = {geodesic: true};

   //input parameter is Array of layers
   // var layers = [polygon,bulat];

   // initialize control
   // var control = L.Control.measureAreaControl(options, layers, {collapsed:false}).addTo(map);



// var polygon = L.polygon([
//         [48.10804729138659, 17.106292247772217],
//         [48.10853443729303, 17.106292247772217],
//         [48.10853443729303, 17.1071720123291],
//         [48.10804729138659, 17.1071720123291],
//         [48.10804729138659, 17.106292247772217]
//     ]).addTo(map);
//     control.addLayer(polygon);
   // polygon.enableEdit();
        // map.on('editable:vertex:drag editable:vertex:deleted', polygon.updateMeasurements, polygon);


// L.polyline([
//         [57.67, 11.85],
//         [57.677, 11.86],
//         [57.68, 11.85],
//         [57.69, 11.86],
//     ], {showMeasurements: true, measurementOptions: {imperial:true}})
//     .addTo(map);

// L.circle([57.694, 11.94], 1000, {showMeasurements: true})
//     .addTo(map);

// L.circle([57.705, 11.92], 750, {showMeasurements: true, measurementOptions: {imperial:true}})
//     .addTo(map);

// polygon.enableEdit();
// map.on('editable:vertex:drag editable:vertex:deleted', polygon.updateMeasurements, polygon);



// var drawnItems = baseLayers.overlays.draw;
//         map.on('draw:created', function (e) {
//           var layer = e.layer;
//           drawnItems.addLayer(layer);
//           console.log(JSON.stringify(layer.toGeoJSON()));
//         });


//pke default map esri gray (ga detil)
  // var map = L.map('map').setView([37.71, -99.88], 4);
  // L.esri.basemapLayer('Gray').addTo(map);

//klo mau overlay lgsg dgn map lain. opacitynya aja diatur  
  // L.esri.dynamicMapLayer({
  //   url: 'http://hdc.dishidros.go.id/arcgis/rest/services/enc_indonesia/MapServer/exts/Maritime%20Chart%20Service/MapServer',
  //   opacity: 0.8,
  //   f:'image'
  // }).addTo(map);

$("#sidebar-hide-btn").click(function() {
	// console.log("aaaaaaaa");
  animateSidebar();
  return false;
});

$("#list-btn").click(function() {
  animateSidebar();
  return false;
});

$("#logout").click(function() {
  window.location.href = "login.html";
});

$("#backend").click(function() {
  window.location.href = "backend.html";
});

function animateSidebar() {
  $("#sidebar").animate({
    width: "toggle"
  }, 350, function() {
    map.invalidateSize();
  });
}
animateSidebar();