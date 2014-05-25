Ext.define('Stolpersteine.view.IntroView', {
    extend: 'Ext.form.Panel',
    xtype: 'introview',
    config: {
        items: [
            {
                xtype: 'panel',
                style: 'text-align:center',
                html: [
                    '<div>',
                    '<img height="300" src="resources/icons/Stolperstein-1-min-300x300.png" />',
                    '<p>Stolpersteine sind Gedenktafeln, mit denen an "das Schicksal der Menschen erinnert werden soll,<br> ' +
                        'die in der Zeit des Nationalsozialismus verfolgt, ermordet, deportiert, vertrieben oder in den<br> ' +
                        'Suizid getrieben wurden... <a href="http://de.wikipedia.org/wiki/Stolpersteine">Wikipedia</a></p>',
                    '</div>',
                    '<div>',
                    '<h1>Konzeption und Umsetzung</h1>',
                    '<p>Pat Lipp (pat.dev@alice.de)</p>',
                    '</div>'
                ].join("")
            }
        ]
    }
})
;