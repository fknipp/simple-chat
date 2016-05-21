import { Template } from 'meteor/templating';
import { Messages } from '/imports/api/messages/messages.js';
import { Accounts } from 'meteor/accounts-base';

import './main.html';

Template.messages.onCreated(function() {
	this.autorun(() => {
		this.subscribe('messages');
	});
});

Template.messages.helpers({
	messages() {
		return Messages.find({}, {sort: {createdAt: 1}});
	}
});

Template.footer.events({
	'submit .new-message'(e) {
		const text = e.target.text.value;
		Meteor.call('sendMessage', text);

		e.target.text.value = '';
		return false;
	}
});

Accounts.ui.config({
	passwordSignupFields: 'USERNAME_ONLY'
});
