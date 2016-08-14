Ext.define('AM.store.Users', {
    extend: 'Ext.data.Store',
    fields: ['name', 'email','active'],
    autoLoad: true,
    proxy: {
        type: 'ajax',
        api: {
            read: 'getUsers',
            update: 'updateUser',
            create: 'createUser',
            destroy: 'removeUser'
        },
        actionMethods: {
            read: 'GET',
            update: 'POST',
            create: 'POST',
            destroy: 'POST'
        },
        reader: {
            type:'json',
            root:'users',
            successProperty: 'success'
        },
        writer: {
            type:'json',
            encode: true,
            root: 'users'
        }
    }

});