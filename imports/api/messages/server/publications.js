import { Meteor } from 'meteor/meteor';
import { Messages } from '../messages.js';

Meteor.publish('messages', () => {
	return Messages.find({}, {sort: {createdAt: -1}, limit: 5});
});
