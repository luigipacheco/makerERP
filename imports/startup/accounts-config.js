import {Accounts} from 'meteor/accounts-base';

Accounts.ui.config({
  passwordSignupFields :'USERNAME_ONLY',
});

// Accounts.createUser({
//                             username: "admin",
//                             password :"admin123",
//
//     });

//var adminuser = Accounts.users.findOne({username: "admin"}).username;


//var adminuser = Accounts.users.find({ name: "admin" }).fetch({_id});

//var userid= adminuser._id;

//var adminuser = Accounts.findUserByUsername("admin")._id;

//Roles.addUsersToRoles( adminuser, ['admin'] );
