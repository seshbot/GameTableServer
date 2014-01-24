// for more details see: http://emberjs.com/guides/controllers/

GameTableServer.UserController = Ember.ObjectController.extend({
	needs: ['application', 'users'],

	currentUser: Ember.computed.alias("controllers.application.currentUser"),
	users: Ember.computed.alias("controllers.users"),

	userMailtoHref: function() {
		var currentUserName = this.get('currentUser.name');
		var currentUserEmail = this.get('currentUser.email');
		return 'mailto:' 
			+ this.get('model.email') 
			+ '?cc=' + currentUserEmail
			+ '&Subject=Message%20from%20' + currentUserName;
	}.property('model.email'),

	userCanBeRemoved: function() {
		return this.get('currentUser') !== this.get('model');
	}.property('model', 'currentUser'),
});
