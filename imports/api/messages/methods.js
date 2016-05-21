import { Meteor } from 'meteor/meteor';
import { Messages } from './messages.js';

Meteor.methods({
	sendMessage(text) {
		if (! Meteor.userId()) {
			throw new Meteor.Error('not-authorized');
		}

		Messages.insert({
			text: text,
			createdAt: new Date(),
			username: Meteor.user().username || Meteor.user().profile.name
		});
	}
});
