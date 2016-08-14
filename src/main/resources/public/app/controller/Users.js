Ext.define('AM.controller.Users',{
    extend: 'Ext.app.Controller',
    views: [
        'user.List',
        'user.Edit',
        'main.Main',
        'user.Add'
    ],
    stores: ['Users'],
    models: ['User'],

    init: function(){
        this.control({
            'userlist': {
                itemdblclick: this.editUser
            },
            'useredit button[action=save]':{
                click: this.updateUser
            },
             'userlist button[action=add]':{
                 click: this.addUser
             },
             'useradd button[action=save]':{
                 click:this.createUser
             },
               'userlist button[action=delete]':{
                   click: this.deleteUser
             }
        })
    },

    editUser: function(grid, record){
        var view = Ext.create('widget.useredit');
        view.down('form').loadRecord(record);
    },

    updateUser: function(button){
        var win = button.up('window');
        var form = win.down('form');
        var record = form.getRecord();
        var values = form.getValues();

        record.set(values);
        win.close();

        this.getUsersStore().sync();
    },

     addUser: function(button){
         var view = Ext.create('widget.useradd');
     },

     createUser: function(button){
         var win = button.up('window');
         var form = win.down('form');
         var values = form.getValues();
         //var grid1 = Ext.ComponentQuery.query('userlist')[0];
         //grid1.getStore().add(values);
         this.getUsersStore().add(values);
         win.close();
         this.getUsersStore().sync();


     },

     deleteUser: function(button){

        var grid = button.up('grid');
        console.log(grid);
        grid.getStore().remove(grid.getSelectionModel().getSelection());
        this.getUsersStore().sync();

     }




});