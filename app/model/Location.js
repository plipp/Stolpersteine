Ext.define('Stolpersteine.model.Location', {
    extend: 'Ext.data.Model',

    requires: [
        'Ext.data.Field'
    ],

    config: {
        fields: [
            {
                allowNull: false,
                name: 'id'
            },
            {
                allowNull: false,
                name: 'verlegejahr'
            },
            {
                name: 'vorname'
            },
            {
                allowNull: false,
                name: 'nachname'
            },
            {
                allowNull: false,
                name: 'strasse'
            },
            {
                name: 'hausnummer'
            },
            {
                allowNull: false,
                name: 'plz'
            },
            {
                name: 'ortsteil'
            }
        ]
    }
});