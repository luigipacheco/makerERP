import { Template } from 'meteor/templating';
import{ Tasks } from '../api/tasks.js';
import './task.html'

Template.task.events({
  'click .toggle-checked'(){
    if (Meteor.user().username == this.username || Meteor.user().username == "luigi"){
    Tasks.update(this._id, {
    $set: { checked: ! this.checked },
  });
  }
},
  'click .delete'(){
    if (Meteor.user().username == "luigi"){
    Tasks.remove(this._id);
  }
  },
});
