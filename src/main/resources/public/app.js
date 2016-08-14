Ext.application({
    requires: [
        'Ext.container.Viewport',
        'Ext.layout.container.VBox',
        'Ext.window.Window',
        'Ext.grid.Panel',
        'Ext.form.Panel',
        'AM.store.Users',
        'Ext.grid.column.CheckColumn'
    ],
    name: 'AM',
    appFolder: 'app',

    controllers: [
        'Users'
    ],

    launch:function(){
        Ext.create('Ext.container.Viewport', {
        layout: {
                type: 'vbox',
                align: 'center',
                pack: 'middle'
            },
            renderTo: document.body,
            items: [
            {
                xtype: 'userlist',
                title: 'All Users',
                pack: 'center',
                width: 400,
                height: 250,
                flex: 1
            }]
        });
    }
})