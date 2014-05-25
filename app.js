// @require @packageOverrides
Ext.Loader.setConfig({
    disableCaching: false // see http://stackoverflow.com/questions/18466628/sencha-touch-load-data-into-store-from-html-application-cache
});


Ext.application({
    models: [
        'Location'
    ],
    stores: [
        'Locations'
    ],
    views: [
        'MainView',
        'ListPanel',
        'IntroView'
    ],
    controllers: [
        'MainController'
    ],
    name: 'Stolpersteine',

    launch: function() {

        Ext.create('Stolpersteine.view.MainView', {fullscreen: true});
    }

});
