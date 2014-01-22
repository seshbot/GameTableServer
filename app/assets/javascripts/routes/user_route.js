// For more information see: http://emberjs.com/guides/routing/

GameTableServer.UserRoute = Ember.Route.extend({
	model: function(params){
		return this.store.find('user', params.user_id);
	}
});
