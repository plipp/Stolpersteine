Ext.define('Stolpersteine.controller.MainController', {
    extend: 'Ext.app.Controller',

    config: {
        models: [
            'Location'
        ],
        stores: [
            'Locations'
        ],

        refs: {
            mapView: {
                selector: 'mainview #map',
                xtype: 'Ext.Map'
            },
            mainView: {
                selector: 'mainview',
                xtype: 'Ext.navigation.View'
            },
            mapPanel: {
                selector: 'mainview #mapPanel',
                xtype: 'Ext.Panel'
            },
            listPinsButton: {
                selector: 'mainview #listPinsButton',
                xtype: 'Ext.Button'
            },
            infoButton: {
                selector: 'mainview #infoButton',
                xtype: 'Ext.Button'
            }
        },
        markers: {},
        control: {
            "mainview #listPanel list": {
                disclose: 'onLocationTap'
            },
            "mainview #listPinsButton": {
                tap: 'onListPinsTap'
            },
            "mainview #infoButton": {
                tap: 'onInfoTap'
            },
            "mainview": {
                back: 'onBack'
            },
            "map": {
                activate: 'onMapActivate'
            }
        }
    },

    onLocationTap: function (list, record, target, index, e, eOpts) {
        var id = record.get('id'),    // Build the location
            longitude = record.get('longitude')            ,
            map = this.getMapView();              // Find the map

        this.geocode(id, function (result) {
                var location = new google.maps.LatLng(result.result.lat, result.result.lng);
                map.setMapOptions({   // Move to the center
                    center: location,
                    zoom: 15
                });
                new google.maps.event.trigger( markers[id], 'click' );
            },
            function (error) {
                console.error("Couldn't find new Map Center:", error);
            });

        this.getListPinsButton().show();
        this.getInfoButton().show();
        this.getMainView().pop();   // Remove the pin list panel
    },

    onListPinsTap: function (button, e, eOpts) {
        this.getMainView().push({   // Show the list panel view
            xtype: 'listpanel',
            title: 'Stolpersteine nach Namen'
        });

        this.getListPinsButton().hide();
        this.getInfoButton().hide();

    },

    onInfoTap: function (button, e, eOpts) {
        this.getMainView().push({   // Show the list panel view
            xtype: 'introview',
            title: 'Stolpersteine ...'
        });

        this.getListPinsButton().hide();
        this.getInfoButton().hide();

    },

    onBack: function (navigationview, eOpts) {
        this.getListPinsButton().show();
        this.getInfoButton().show();

    },

    geocode: function (id, successCallback, errorCallback) {
        Ext.Ajax.request({
            url: 'geocoding.php',
            method: 'GET',
            disableCaching: false,

            params: {
                id: id
            },

            success: function (response) {
                var jsonString= response.responseText, result, success;
                // console.log(jsonString);
                try {
                    result = JSON.parse(jsonString);

                    if (typeof result.result.lat !== 'undefined') {
                        successCallback(result);
                    } else {
                        errorCallback ("result empty");
                    }
                } catch (err) {
                    errorCallback(err);
                }
            },

            failure: function (err) {
                console.error(err);
                errorCallback(err);
            }
        });
    },

    addStolpersteineOnMap: function (googleMap) {
        function infoWindowTextBy(title, location, description) {
            return Ext.String.format(
                '<div style="line-height:1.35;overflow:hidden;white-space:nowrap;color:black"><b>{0}</b><br/>{1}<br/>{2}</p></div>',
                title, location, description);
        }

        var store = Ext.data.StoreManager.lookup('Locations'),
            me = this;

        store.load(function (records, operation, success) {
            // console.log('loaded records=', records, ' operation=', operation, " success=", success);
            if (success) {
                var marker,
                    infowindow = new google.maps.InfoWindow();

                markers={};
                Ext.each(records, function (stolperstein) {
                    var title = stolperstein.get('vorname') + " " + stolperstein.get('nachname'),
                        ot = stolperstein.get('ortsteil') ? stolperstein.get('ortsteil') + ", " : "",
                        location = ot + stolperstein.get('strasse') + " " + stolperstein.get('hausnummer'),
                        description = "Verlegejahr: " + stolperstein.get('verlegejahr'),
                        id = stolperstein.get('id');

                    me.geocode(id, function (result) {
                            // getting coordinates
                            var lat = result.result.lat,
                                lng = result.result.lng;

                            // create marker
                            marker = new google.maps.Marker({
                                position: new google.maps.LatLng(lat, lng),
                                map: googleMap,
                                icon: "resources/icons/Stolperstein-1-min-30x30.png",
                                title: location
                            });

                            // adding click event to the marker to show info-bubble with data from json
                            google.maps.event.addListener(marker, 'click', (function (marker) {
                                return function () {
                                    infowindow.setContent(infoWindowTextBy(title, location, description));
                                    infowindow.open(googleMap, marker);
                                };
                            })(marker));

                            markers[id] = marker;
                        },
                        function (error) {
                            console.error('Error getting location data for id: ' + id
                                + ", location:" + location
                                + ", error:" + error);
                        });
                });
            } else {
                console.error("Couldn't load locations of Stolpersteins");
            }
        });
    },

    onMapActivate: function (newActiveItem, container, oldActiveItem, eOpts) {
        var map = newActiveItem,
            tempelhof_lat = 52.46954,
            tempelhof_lng = 13.34349,
            me = this;

        map.setMapOptions({
            zoom: 12
        });
        map.setMapCenter({
            latitude: tempelhof_lat,
            longitude: tempelhof_lng
        });

        me.addStolpersteineOnMap(map.getMap());
    }

});