import { Meteor } from 'meteor/meteor';
import '/imports/api/messages/server/publications.js';
import '/imports/api/messages/methods.js';

Meteor.startup(() => {
  // code to run on server at startup
});
