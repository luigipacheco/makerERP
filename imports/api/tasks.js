import { Mongo } from 'meteor/mongo';

export const Tasks = new Mongo.Collection('tasks');
export const Dailies = new Meteor.Collection("dailies");
export const Todos = new Meteor.Collection("todos");
export const Rewards = new Meteor.Collection("rewards");
