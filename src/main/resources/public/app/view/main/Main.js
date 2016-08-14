Ext.define('AM.view.main.Main',{
    extend: 'Ext.tab.Panel',
    alias: 'widget.mainpanel',
    renderTo: document.body,
    items:[{
        title:'Tab1',
        xtype: 'userlist'
    },
    {
        title:'Tab2'
    }]

});