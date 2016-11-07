import { Template } from 'meteor/templating';
import{ Tasks } from '../api/tasks.js';
import './task.html'
// use  Roles.addUsersToRoles( userId, [ 'roleOne', 'roleTwo', 'roleThree' ] ); to add roles
// use Meteor.users.find().fetch() to check if role was given

Template.task.events({
  'click .toggle-checked'(){
    if (Meteor.user().username == this.username || Roles.userIsInRole( Meteor.userId(), 'admin' )){
    Tasks.update(this._id, {
    $set: { checked: ! this.checked },
  });
  }
},
  'click .delete'(){
    if (Roles.userIsInRole( Meteor.userId(), 'admin' )){
    Tasks.remove(this._id);
  }
  },
});
