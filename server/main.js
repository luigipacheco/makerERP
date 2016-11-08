import {Accounts} from 'meteor/accounts-base';
import '../imports/api/tasks.js'

//create an admin user when the server starts
Accounts.createUser({
                            username: "admin",
                            password :"admin123",

    });

var adminuser = Accounts.findUserByUsername("admin")._id;

Roles.addUsersToRoles( adminuser, ['admin'] );
