// for more details see: http://emberjs.com/guides/controllers/

GameTableServer.UsersController = Ember.ArrayController.extend({
	actions: {
		removeUser: function(user) {
			user.deleteRecord();
			user.save();
		}
	}
});
