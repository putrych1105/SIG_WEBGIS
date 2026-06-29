var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_Balai_Pertemuan_1 = new ol.format.GeoJSON();
var features_Balai_Pertemuan_1 = format_Balai_Pertemuan_1.readFeatures(json_Balai_Pertemuan_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Balai_Pertemuan_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Balai_Pertemuan_1.addFeatures(features_Balai_Pertemuan_1);
var lyr_Balai_Pertemuan_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Balai_Pertemuan_1, 
                style: style_Balai_Pertemuan_1,
                popuplayertitle: 'Balai_Pertemuan',
                interactive: true,
                title: '<img src="styles/legend/Balai_Pertemuan_1.png" /> Balai_Pertemuan'
            });
var format_Fasilitas_Kesehatan_2 = new ol.format.GeoJSON();
var features_Fasilitas_Kesehatan_2 = format_Fasilitas_Kesehatan_2.readFeatures(json_Fasilitas_Kesehatan_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Fasilitas_Kesehatan_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Fasilitas_Kesehatan_2.addFeatures(features_Fasilitas_Kesehatan_2);
var lyr_Fasilitas_Kesehatan_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Fasilitas_Kesehatan_2, 
                style: style_Fasilitas_Kesehatan_2,
                popuplayertitle: 'Fasilitas_Kesehatan',
                interactive: true,
                title: '<img src="styles/legend/Fasilitas_Kesehatan_2.png" /> Fasilitas_Kesehatan'
            });
var format_Fasilitas_Pendidikan_3 = new ol.format.GeoJSON();
var features_Fasilitas_Pendidikan_3 = format_Fasilitas_Pendidikan_3.readFeatures(json_Fasilitas_Pendidikan_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Fasilitas_Pendidikan_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Fasilitas_Pendidikan_3.addFeatures(features_Fasilitas_Pendidikan_3);
var lyr_Fasilitas_Pendidikan_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Fasilitas_Pendidikan_3, 
                style: style_Fasilitas_Pendidikan_3,
                popuplayertitle: 'Fasilitas_Pendidikan',
                interactive: true,
                title: '<img src="styles/legend/Fasilitas_Pendidikan_3.png" /> Fasilitas_Pendidikan'
            });
var format_Jalan_4 = new ol.format.GeoJSON();
var features_Jalan_4 = format_Jalan_4.readFeatures(json_Jalan_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Jalan_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Jalan_4.addFeatures(features_Jalan_4);
var lyr_Jalan_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Jalan_4, 
                style: style_Jalan_4,
                popuplayertitle: 'Jalan',
                interactive: true,
                title: '<img src="styles/legend/Jalan_4.png" /> Jalan'
            });
var format_Lampu_Jalan_5 = new ol.format.GeoJSON();
var features_Lampu_Jalan_5 = format_Lampu_Jalan_5.readFeatures(json_Lampu_Jalan_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Lampu_Jalan_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lampu_Jalan_5.addFeatures(features_Lampu_Jalan_5);
var lyr_Lampu_Jalan_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Lampu_Jalan_5, 
                style: style_Lampu_Jalan_5,
                popuplayertitle: 'Lampu_Jalan',
                interactive: true,
                title: '<img src="styles/legend/Lampu_Jalan_5.png" /> Lampu_Jalan'
            });
var format_Layanan_Transportasi_6 = new ol.format.GeoJSON();
var features_Layanan_Transportasi_6 = format_Layanan_Transportasi_6.readFeatures(json_Layanan_Transportasi_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Layanan_Transportasi_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Layanan_Transportasi_6.addFeatures(features_Layanan_Transportasi_6);
var lyr_Layanan_Transportasi_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Layanan_Transportasi_6, 
                style: style_Layanan_Transportasi_6,
                popuplayertitle: 'Layanan_Transportasi',
                interactive: true,
                title: '<img src="styles/legend/Layanan_Transportasi_6.png" /> Layanan_Transportasi'
            });
var format_Rekreasi_7 = new ol.format.GeoJSON();
var features_Rekreasi_7 = format_Rekreasi_7.readFeatures(json_Rekreasi_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Rekreasi_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rekreasi_7.addFeatures(features_Rekreasi_7);
var lyr_Rekreasi_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Rekreasi_7, 
                style: style_Rekreasi_7,
                popuplayertitle: 'Rekreasi',
                interactive: true,
                title: '<img src="styles/legend/Rekreasi_7.png" /> Rekreasi'
            });
var format_Sosial_dan_Kesejahteraan_8 = new ol.format.GeoJSON();
var features_Sosial_dan_Kesejahteraan_8 = format_Sosial_dan_Kesejahteraan_8.readFeatures(json_Sosial_dan_Kesejahteraan_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sosial_dan_Kesejahteraan_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sosial_dan_Kesejahteraan_8.addFeatures(features_Sosial_dan_Kesejahteraan_8);
var lyr_Sosial_dan_Kesejahteraan_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Sosial_dan_Kesejahteraan_8, 
                style: style_Sosial_dan_Kesejahteraan_8,
                popuplayertitle: 'Sosial_dan_Kesejahteraan',
                interactive: true,
                title: '<img src="styles/legend/Sosial_dan_Kesejahteraan_8.png" /> Sosial_dan_Kesejahteraan'
            });
var format_Tiang_Listrik_9 = new ol.format.GeoJSON();
var features_Tiang_Listrik_9 = format_Tiang_Listrik_9.readFeatures(json_Tiang_Listrik_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Tiang_Listrik_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Tiang_Listrik_9.addFeatures(features_Tiang_Listrik_9);
var lyr_Tiang_Listrik_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Tiang_Listrik_9, 
                style: style_Tiang_Listrik_9,
                popuplayertitle: 'Tiang_Listrik',
                interactive: true,
                title: '<img src="styles/legend/Tiang_Listrik_9.png" /> Tiang_Listrik'
            });
var format_Fasilitas_Ibadah_10 = new ol.format.GeoJSON();
var features_Fasilitas_Ibadah_10 = format_Fasilitas_Ibadah_10.readFeatures(json_Fasilitas_Ibadah_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Fasilitas_Ibadah_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Fasilitas_Ibadah_10.addFeatures(features_Fasilitas_Ibadah_10);
var lyr_Fasilitas_Ibadah_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Fasilitas_Ibadah_10, 
                style: style_Fasilitas_Ibadah_10,
                popuplayertitle: 'Fasilitas_Ibadah',
                interactive: true,
                title: '<img src="styles/legend/Fasilitas_Ibadah_10.png" /> Fasilitas_Ibadah'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_Balai_Pertemuan_1.setVisible(true);lyr_Fasilitas_Kesehatan_2.setVisible(true);lyr_Fasilitas_Pendidikan_3.setVisible(true);lyr_Jalan_4.setVisible(true);lyr_Lampu_Jalan_5.setVisible(true);lyr_Layanan_Transportasi_6.setVisible(true);lyr_Rekreasi_7.setVisible(true);lyr_Sosial_dan_Kesejahteraan_8.setVisible(true);lyr_Tiang_Listrik_9.setVisible(true);lyr_Fasilitas_Ibadah_10.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_Balai_Pertemuan_1,lyr_Fasilitas_Kesehatan_2,lyr_Fasilitas_Pendidikan_3,lyr_Jalan_4,lyr_Lampu_Jalan_5,lyr_Layanan_Transportasi_6,lyr_Rekreasi_7,lyr_Sosial_dan_Kesejahteraan_8,lyr_Tiang_Listrik_9,lyr_Fasilitas_Ibadah_10];
lyr_Balai_Pertemuan_1.set('fieldAliases', {'Id': 'Id', 'Nama_Fasos': 'Nama_Fasos', 'X': 'X', 'Y': 'Y', });
lyr_Fasilitas_Kesehatan_2.set('fieldAliases', {'Id': 'Id', 'Nama_Fasos': 'Nama_Fasos', 'X': 'X', 'Y': 'Y', });
lyr_Fasilitas_Pendidikan_3.set('fieldAliases', {'Id': 'Id', 'Nama_Sekol': 'Nama_Sekol', 'X': 'X', 'Y': 'Y', });
lyr_Jalan_4.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'highway': 'highway', 'traffic_si': 'traffic_si', 'traffic__1': 'traffic__1', 'crossing_i': 'crossing_i', 'button_ope': 'button_ope', 'barrier': 'barrier', 'proposed': 'proposed', 'informal': 'informal', 'ramp': 'ramp', 'level': 'level', 'oneway_con': 'oneway_con', 'sidewalk_r': 'sidewalk_r', 'sidewalk_l': 'sidewalk_l', 'ford': 'ford', 'crossing_m': 'crossing_m', 'crossing': 'crossing', 'lit': 'lit', 'email': 'email', 'bike_ride': 'bike_ride', 'name_id': 'name_id', 'operator_t': 'operator_t', 'operator': 'operator', 'capacity': 'capacity', 'descriptio': 'descriptio', 'aeroway': 'aeroway', 'embankment': 'embankment', 'flood_pron': 'flood_pron', 'width': 'width', 'maxspeed_a': 'maxspeed_a', 'maxheight': 'maxheight', 'constructi': 'constructi', 'footway': 'footway', 'public_tra': 'public_tra', 'oneway_mot': 'oneway_mot', 'man_made': 'man_made', 'incline': 'incline', 'cycleway': 'cycleway', 'postal_cod': 'postal_cod', 'key': 'key', 'addr_count': 'addr_count', 'addr_city': 'addr_city', 'maxweight_': 'maxweight_', 'garmin_typ': 'garmin_typ', 'motor_vehi': 'motor_vehi', 'roundabout': 'roundabout', 'wikidata': 'wikidata', 'tunnel': 'tunnel', 'name_en': 'name_en', 'import': 'import', 'tracktype': 'tracktype', 'name_ja': 'name_ja', 'parking_la': 'parking_la', 'bridge_str': 'bridge_str', 'covered': 'covered', 'check_date': 'check_date', 'junction': 'junction', 'service': 'service', 'sidewalk': 'sidewalk', 'bridge_nam': 'bridge_nam', 'horse': 'horse', 'alt_name': 'alt_name', 'lane_marki': 'lane_marki', 'moped': 'moped', 'mofa': 'mofa', 'ref': 'ref', 'lanes': 'lanes', 'layer': 'layer', 'bridge': 'bridge', 'smoothness': 'smoothness', 'surface': 'surface', 'maxspeed': 'maxspeed', 'motorcycle': 'motorcycle', 'motor_ve_1': 'motor_ve_1', 'destinatio': 'destinatio', 'taxi': 'taxi', 'psv': 'psv', 'motorcar': 'motorcar', 'hgv': 'hgv', 'goods': 'goods', 'foot': 'foot', 'emergency': 'emergency', 'bicycle': 'bicycle', 'catmp_Road': 'catmp_Road', 'sport': 'sport', 'access': 'access', 'oneway': 'oneway', 'name': 'name', });
lyr_Lampu_Jalan_5.set('fieldAliases', {'Id': 'Id', 'Nama_fasum': 'Nama_fasum', 'X': 'X', 'Y': 'Y', });
lyr_Layanan_Transportasi_6.set('fieldAliases', {'Id': 'Id', 'Nama_Fasos': 'Nama_Fasos', 'X': 'X', 'Y': 'Y', });
lyr_Rekreasi_7.set('fieldAliases', {'Id': 'Id', 'Nama_Fasos': 'Nama_Fasos', 'X': 'X', 'Y': 'Y', });
lyr_Sosial_dan_Kesejahteraan_8.set('fieldAliases', {'Id': 'Id', 'Nama_Fasos': 'Nama_Fasos', 'X': 'X', 'Y': 'Y', });
lyr_Tiang_Listrik_9.set('fieldAliases', {'Id': 'Id', 'Nama_Fasum': 'Nama_Fasum', 'X': 'X', 'Y': 'Y', });
lyr_Fasilitas_Ibadah_10.set('fieldAliases', {'Id': 'Id', 'Nama_Fasos': 'Nama_Fasos', 'X': 'X', 'Y': 'Y', });
lyr_Balai_Pertemuan_1.set('fieldImages', {'Id': '', 'Nama_Fasos': '', 'X': '', 'Y': '', });
lyr_Fasilitas_Kesehatan_2.set('fieldImages', {'Id': '', 'Nama_Fasos': '', 'X': '', 'Y': '', });
lyr_Fasilitas_Pendidikan_3.set('fieldImages', {'Id': '', 'Nama_Sekol': '', 'X': '', 'Y': '', });
lyr_Jalan_4.set('fieldImages', {'full_id': '', 'osm_id': '', 'osm_type': '', 'highway': '', 'traffic_si': '', 'traffic__1': '', 'crossing_i': '', 'button_ope': '', 'barrier': '', 'proposed': '', 'informal': '', 'ramp': '', 'level': '', 'oneway_con': '', 'sidewalk_r': '', 'sidewalk_l': '', 'ford': '', 'crossing_m': '', 'crossing': '', 'lit': '', 'email': '', 'bike_ride': '', 'name_id': '', 'operator_t': '', 'operator': '', 'capacity': '', 'descriptio': '', 'aeroway': '', 'embankment': '', 'flood_pron': '', 'width': '', 'maxspeed_a': '', 'maxheight': '', 'constructi': '', 'footway': '', 'public_tra': '', 'oneway_mot': '', 'man_made': '', 'incline': '', 'cycleway': '', 'postal_cod': '', 'key': '', 'addr_count': '', 'addr_city': '', 'maxweight_': '', 'garmin_typ': '', 'motor_vehi': '', 'roundabout': '', 'wikidata': '', 'tunnel': '', 'name_en': '', 'import': '', 'tracktype': '', 'name_ja': '', 'parking_la': '', 'bridge_str': '', 'covered': '', 'check_date': '', 'junction': '', 'service': '', 'sidewalk': '', 'bridge_nam': '', 'horse': '', 'alt_name': '', 'lane_marki': '', 'moped': '', 'mofa': '', 'ref': '', 'lanes': '', 'layer': '', 'bridge': '', 'smoothness': '', 'surface': '', 'maxspeed': '', 'motorcycle': '', 'motor_ve_1': '', 'destinatio': '', 'taxi': '', 'psv': '', 'motorcar': '', 'hgv': '', 'goods': '', 'foot': '', 'emergency': '', 'bicycle': '', 'catmp_Road': '', 'sport': '', 'access': '', 'oneway': '', 'name': '', });
lyr_Lampu_Jalan_5.set('fieldImages', {'Id': '', 'Nama_fasum': '', 'X': '', 'Y': '', });
lyr_Layanan_Transportasi_6.set('fieldImages', {'Id': '', 'Nama_Fasos': '', 'X': '', 'Y': '', });
lyr_Rekreasi_7.set('fieldImages', {'Id': '', 'Nama_Fasos': '', 'X': '', 'Y': '', });
lyr_Sosial_dan_Kesejahteraan_8.set('fieldImages', {'Id': '', 'Nama_Fasos': '', 'X': '', 'Y': '', });
lyr_Tiang_Listrik_9.set('fieldImages', {'Id': '', 'Nama_Fasum': '', 'X': '', 'Y': '', });
lyr_Fasilitas_Ibadah_10.set('fieldImages', {'Id': '', 'Nama_Fasos': '', 'X': '', 'Y': '', });
lyr_Balai_Pertemuan_1.set('fieldLabels', {'Id': 'no label', 'Nama_Fasos': 'no label', 'X': 'no label', 'Y': 'no label', });
lyr_Fasilitas_Kesehatan_2.set('fieldLabels', {'Id': 'no label', 'Nama_Fasos': 'no label', 'X': 'no label', 'Y': 'no label', });
lyr_Fasilitas_Pendidikan_3.set('fieldLabels', {'Id': 'no label', 'Nama_Sekol': 'no label', 'X': 'no label', 'Y': 'no label', });
lyr_Jalan_4.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'highway': 'no label', 'traffic_si': 'no label', 'traffic__1': 'no label', 'crossing_i': 'no label', 'button_ope': 'no label', 'barrier': 'no label', 'proposed': 'no label', 'informal': 'no label', 'ramp': 'no label', 'level': 'no label', 'oneway_con': 'no label', 'sidewalk_r': 'no label', 'sidewalk_l': 'no label', 'ford': 'no label', 'crossing_m': 'no label', 'crossing': 'no label', 'lit': 'no label', 'email': 'no label', 'bike_ride': 'no label', 'name_id': 'no label', 'operator_t': 'no label', 'operator': 'no label', 'capacity': 'no label', 'descriptio': 'no label', 'aeroway': 'no label', 'embankment': 'no label', 'flood_pron': 'no label', 'width': 'no label', 'maxspeed_a': 'no label', 'maxheight': 'no label', 'constructi': 'no label', 'footway': 'no label', 'public_tra': 'no label', 'oneway_mot': 'no label', 'man_made': 'no label', 'incline': 'no label', 'cycleway': 'no label', 'postal_cod': 'no label', 'key': 'no label', 'addr_count': 'no label', 'addr_city': 'no label', 'maxweight_': 'no label', 'garmin_typ': 'no label', 'motor_vehi': 'no label', 'roundabout': 'no label', 'wikidata': 'no label', 'tunnel': 'no label', 'name_en': 'no label', 'import': 'no label', 'tracktype': 'no label', 'name_ja': 'no label', 'parking_la': 'no label', 'bridge_str': 'no label', 'covered': 'no label', 'check_date': 'no label', 'junction': 'no label', 'service': 'no label', 'sidewalk': 'no label', 'bridge_nam': 'no label', 'horse': 'no label', 'alt_name': 'no label', 'lane_marki': 'no label', 'moped': 'no label', 'mofa': 'no label', 'ref': 'no label', 'lanes': 'no label', 'layer': 'no label', 'bridge': 'no label', 'smoothness': 'no label', 'surface': 'no label', 'maxspeed': 'no label', 'motorcycle': 'no label', 'motor_ve_1': 'no label', 'destinatio': 'no label', 'taxi': 'no label', 'psv': 'no label', 'motorcar': 'no label', 'hgv': 'no label', 'goods': 'no label', 'foot': 'no label', 'emergency': 'no label', 'bicycle': 'no label', 'catmp_Road': 'no label', 'sport': 'no label', 'access': 'no label', 'oneway': 'no label', 'name': 'no label', });
lyr_Lampu_Jalan_5.set('fieldLabels', {'Id': 'no label', 'Nama_fasum': 'no label', 'X': 'no label', 'Y': 'no label', });
lyr_Layanan_Transportasi_6.set('fieldLabels', {'Id': 'no label', 'Nama_Fasos': 'no label', 'X': 'no label', 'Y': 'no label', });
lyr_Rekreasi_7.set('fieldLabels', {'Id': 'no label', 'Nama_Fasos': 'no label', 'X': 'no label', 'Y': 'no label', });
lyr_Sosial_dan_Kesejahteraan_8.set('fieldLabels', {'Id': 'no label', 'Nama_Fasos': 'no label', 'X': 'no label', 'Y': 'no label', });
lyr_Tiang_Listrik_9.set('fieldLabels', {'Id': 'no label', 'Nama_Fasum': 'no label', 'X': 'no label', 'Y': 'no label', });
lyr_Fasilitas_Ibadah_10.set('fieldLabels', {'Id': 'no label', 'Nama_Fasos': 'no label', 'X': 'no label', 'Y': 'no label', });
lyr_Fasilitas_Ibadah_10.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});