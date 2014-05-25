Ext.define('Stolpersteine.view.ListPanel', {
    extend: 'Ext.Panel',
    alias: 'widget.listpanel',

    requires: [
        'Ext.dataview.List',
        'Ext.XTemplate'
    ],

    config: {
        id: 'listPanel',
        items: [
            {
                xtype: 'list',
                height: '100%',
                itemTpl: [      // https://www.google.de/search?q=Stolpersteine+Irene+und+Willy+Bardach+Sch%C3%B6neberg%2C+Schw%C3%A4bische+Stra%C3%9Fe+17&ie=UTF-8&as_sitesearch=www.stolpersteine-berlin.de/de/biografie&lr=lang_de
                    '<div>',
                    '    {nachname}, {vorname}<br>' +
                        '{strasse} {hausnummer}, {ortsteil} ({verlegejahr})',
                    '</div>'
                ],
                store: 'Locations',
                grouped: true,
                indexBar: true,
                onItemDisclosure: true
            }
        ]
    }

});