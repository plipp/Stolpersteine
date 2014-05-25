Ext.define('Stolpersteine.store.Locations', {
    extend: 'Ext.data.Store',

    requires: [
        'Stolpersteine.model.Location',
        'Ext.data.proxy.JsonP',
        'Ext.data.reader.Json'
    ],

    config: {
        model: 'Stolpersteine.model.Location',
        storeId: 'Locations',
        sorters: 'nachname',
        grouper: function(record) {return record.get('nachname')[0]},
        proxy: {
            type: 'ajax',
            url: 'stolpersteine.php',
            noCache: false,
            enablePagingParams: false,
//            extraParams: {
//                // http://www.berlin.de/ba-tempelhof-schoeneberg/derbezirk/simple-search-baukasten/index.php/index/all.json?q=&vorname=Richard&nachname=&strasse=&hausnummer=&plz=
//                requrl: "http://www.berlin.de/ba-tempelhof-schoeneberg/derbezirk/simple-search-baukasten/index.php/index/all.json?q="
//            },
            reader: {
                type: 'json',
                rootProperty: 'index'
            }
        }

    }
});