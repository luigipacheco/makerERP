import {Accounts} from 'meteor/accounts-base';

Accounts.ui.config({
  passwordSignupFields :'USERNAME_ONLY',
});

Accounts.createUser({
                            username: "admin",
                            password :"admin123",
    });
//var adminuser = Accounts.findUserByUsername("admin")._id;

//Roles.addUsersToRoles( Accounts.findUserByUsername("admin")._id, ['admin'] );
