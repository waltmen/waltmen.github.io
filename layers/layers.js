var wms_layers = [];

        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap_0',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
                url: 'http://a.tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });var format_2016_VIC_SEIFA_SA1_1 = new ol.format.GeoJSON();
var features_2016_VIC_SEIFA_SA1_1 = format_2016_VIC_SEIFA_SA1_1.readFeatures(json_2016_VIC_SEIFA_SA1_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2016_VIC_SEIFA_SA1_1 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_2016_VIC_SEIFA_SA1_1.addFeatures(features_2016_VIC_SEIFA_SA1_1);var lyr_2016_VIC_SEIFA_SA1_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_2016_VIC_SEIFA_SA1_1, 
                style: style_2016_VIC_SEIFA_SA1_1,
    title: '2016_VIC_SEIFA_SA1<br />\
    <img src="styles/legend/2016_VIC_SEIFA_SA1_1_0.png" /> 1<br />\
    <img src="styles/legend/2016_VIC_SEIFA_SA1_1_1.png" /> 2<br />\
    <img src="styles/legend/2016_VIC_SEIFA_SA1_1_2.png" /> <br />'
        });var format_Conferencesdata1_2 = new ol.format.GeoJSON();
var features_Conferencesdata1_2 = format_Conferencesdata1_2.readFeatures(json_Conferencesdata1_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Conferencesdata1_2 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Conferencesdata1_2.addFeatures(features_Conferencesdata1_2);var lyr_Conferencesdata1_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Conferencesdata1_2, 
                style: style_Conferencesdata1_2,
                title: '<img src="styles/legend/Conferencesdata1_2.png" /> Conferences data (1)'
            });

lyr_2016_VIC_SEIFA_SA1_1.setVisible(true);lyr_Conferencesdata1_2.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_2016_VIC_SEIFA_SA1_1,lyr_Conferencesdata1_2];
lyr_2016_VIC_SEIFA_SA1_1.set('fieldAliases', {'fid': 'fid', 'SA1_MAIN11': 'SA1_MAIN11', 'SA1_7DIG11': 'SA1_7DIG11', 'SA2_MAIN11': 'SA2_MAIN11', 'SA2_5DIG11': 'SA2_5DIG11', 'SA2_NAME11': 'Area Name', 'SA3_CODE11': 'SA3_CODE11', 'SA3_NAME11': 'SA3_NAME11', 'SA4_CODE11': 'SA4_CODE11', 'SA4_NAME11': 'SA4_NAME11', 'GCC_CODE11': 'GCC_CODE11', 'GCC_NAME11': 'GCC_NAME11', 'STE_CODE11': 'STE_CODE11', 'STE_NAME11': 'STE_NAME11', 'ALBERS_SQM': 'ALBERS_SQM', 'orig_ogc_fid': 'orig_ogc_fid', 'SEIFA_SA1_VIC_SA1_7DIG': 'SEIFA_SA1_VIC_SA1_7DIG', 'SEIFA_SA1_VIC_SA1_11DIG': 'SEIFA_SA1_VIC_SA1_11DIG', 'SEIFA_SA1_VIC_2016_Population': 'Neighbourhood Population', 'SEIFA_SA1_VIC_Score': 'SEIFA_SA1_VIC_Score', 'SEIFA_SA1_VIC_Aust_Rank': 'SEIFA_SA1_VIC_Aust_Rank', 'SEIFA_SA1_VIC_Aust_Decile': 'SEIFA_SA1_VIC_Aust_Decile', 'SEIFA_SA1_VIC_Aust_Percentile': 'Top Disadvantage Percentile', 'SEIFA_SA1_VIC_State': 'SEIFA_SA1_VIC_State', 'SEIFA_SA1_VIC_State_Rank': 'SEIFA_SA1_VIC_State_Rank', 'SEIFA_SA1_VIC_State_Decile': 'SEIFA_SA1_VIC_State_Decile', 'SEIFA_SA1_VIC_State_Percentile': 'Top Vic Disadvantage Percentile', });
lyr_Conferencesdata1_2.set('fieldAliases', {'Conference': 'Conference', 'Members': 'Members', 'Associate Members': 'Associate Members', 'Parish': 'Parish', 'Town/Suburb': 'Town/Suburb', 'Postcode': 'Postcode', 'Geocode Query String': 'Geocode Query String', 'Record': 'Record', 'Y': 'Y', 'X': 'X', 'location_type': 'location_type', 'formatted_address': 'formatted_address', 'status': 'status', 'error_message': 'error_message', 'locations': 'locations', 'input_url': 'input_url', 'geocode_dt': 'geocode_dt', });
lyr_2016_VIC_SEIFA_SA1_1.set('fieldImages', {'fid': 'Hidden', 'SA1_MAIN11': 'Hidden', 'SA1_7DIG11': 'Hidden', 'SA2_MAIN11': 'Hidden', 'SA2_5DIG11': 'Hidden', 'SA2_NAME11': 'TextEdit', 'SA3_CODE11': 'Hidden', 'SA3_NAME11': 'Hidden', 'SA4_CODE11': 'Hidden', 'SA4_NAME11': 'Hidden', 'GCC_CODE11': 'Hidden', 'GCC_NAME11': 'Hidden', 'STE_CODE11': 'Hidden', 'STE_NAME11': 'Hidden', 'ALBERS_SQM': 'Hidden', 'orig_ogc_fid': 'Hidden', 'SEIFA_SA1_VIC_SA1_7DIG': 'Hidden', 'SEIFA_SA1_VIC_SA1_11DIG': 'Hidden', 'SEIFA_SA1_VIC_2016_Population': 'Hidden', 'SEIFA_SA1_VIC_Score': 'Hidden', 'SEIFA_SA1_VIC_Aust_Rank': 'Hidden', 'SEIFA_SA1_VIC_Aust_Decile': 'Hidden', 'SEIFA_SA1_VIC_Aust_Percentile': 'Hidden', 'SEIFA_SA1_VIC_State': 'Hidden', 'SEIFA_SA1_VIC_State_Rank': 'Hidden', 'SEIFA_SA1_VIC_State_Decile': 'Hidden', 'SEIFA_SA1_VIC_State_Percentile': 'Range', });
lyr_Conferencesdata1_2.set('fieldImages', {'Conference': 'TextEdit', 'Members': 'Range', 'Associate Members': 'Range', 'Parish': 'TextEdit', 'Town/Suburb': 'Hidden', 'Postcode': 'Hidden', 'Geocode Query String': 'Hidden', 'Record': 'Hidden', 'Y': 'Hidden', 'X': 'Hidden', 'location_type': 'Hidden', 'formatted_address': 'Hidden', 'status': 'Hidden', 'error_message': 'Hidden', 'locations': 'Hidden', 'input_url': 'Hidden', 'geocode_dt': 'Hidden', });
lyr_2016_VIC_SEIFA_SA1_1.set('fieldLabels', {'SA2_NAME11': 'no label', 'SEIFA_SA1_VIC_State_Percentile': 'no label', });
lyr_Conferencesdata1_2.set('fieldLabels', {'Conference': 'header label', 'Members': 'inline label', 'Associate Members': 'inline label', 'Parish': 'inline label', });
lyr_Conferencesdata1_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});