Ext.define('Stolpersteine.view.MainView', {
    extend: 'Ext.navigation.View',
    alias: 'widget.mainview',

    requires: [
        'Ext.Panel',
        'Ext.Map',
        'Ext.navigation.Bar',
        'Ext.Button'
    ],

    config: {
        items: [
            {
                xtype: 'panel',
                title: 'Stolpersteine Berlin',
                itemId: 'mapPanel',
                items: [
                    {
                        xtype: 'map',
                        height: '100%',
                        itemId: 'map'

                    }
                ]
            }
        ],
        navigationBar: {
            docked: 'top',
            items: [
                {
                    xtype: 'button',
                    align: 'right',
                    itemId: 'listPinsButton',
                    text: 'Listenansicht'
                },
                {
                    xtype: 'button',
                    align: 'left',
                    itemId: 'infoButton',
                    text: 'Info'
                }
            ]
        }
    }

});