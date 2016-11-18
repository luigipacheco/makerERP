import {Accounts} from 'meteor/accounts-base';
import '../imports/api/tasks.js'
//testing
//create an admin user when the server starts if the admin user does not exists
if (!(Meteor.users.findOne({username: "admin"}))) {
  Accounts.createUser({
                              username: "admin",
                              password :"admin123",

      });

  var adminuser = Accounts.findUserByUsername("admin")._id;

  Roles.addUsersToRoles( adminuser, ['admin'] );

};
