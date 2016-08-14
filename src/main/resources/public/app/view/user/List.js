Ext.define('AM.view.user.List',{
    extend: 'Ext.grid.Panel',
    alias: 'widget.userlist',
    title: 'All Users',
    store: 'Users',
    height:250,

    initComponent: function(){
       this.selModel = new Ext.selection.CheckboxModel({
        checkOnly: true
       });

       this.columns=[
            {header:'Name', dataIndex:'name', flex:1},
            {header:'Email', dataIndex:'email', flex:1}
        ];
        this.buttons=[{
             text: 'Add',
             action: 'add',
        },{
             text: 'Delete',
             action: 'delete',
        }];
        this.callParent(arguments);
    }

});