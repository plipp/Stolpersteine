Ext.define('Stolpersteine.view.IntroView', {
    extend: 'Ext.Container',
    xtype: 'introview',
    config: {
        items: [
            {
                xtype: 'panel',
                style: 'text-align:center; margin: 30px 0 30px 0',
                html: [
                    '<div>',
                    '<img height="300" src="resources/icons/Stolperstein-1-min-300x300.png" />',
                    '</div>'
                ].join(""),
                styleHtmlContent: true
            },
            {
                xtype: 'panel',
                style: 'text-align:center',
                html: [
                    '<div>',
                        '<p>Stolpersteine sind Gedenktafeln, mit denen an "das Schicksal der Menschen erinnert werden soll,<br> ' +
                        'die in der Zeit des Nationalsozialismus verfolgt, ermordet, deportiert, vertrieben oder in den<br> ' +
                        'Suizid getrieben wurden" ... <a href="http://de.wikipedia.org/wiki/Stolpersteine">Wikipedia</a></p>',
                    '</div>'
                ].join(""),
                styleHtmlContent: true
            },
            {
                xtype: 'panel',
                style: 'text-align:right; margin-top: 50px',
                html: [
                    '<div>',
                    '<p>Pat Lipp (pat.dev@alice.de)</p>',
                    '</div>'
                ].join(""),
                styleHtmlContent: true
            }
        ]
    }
})
;