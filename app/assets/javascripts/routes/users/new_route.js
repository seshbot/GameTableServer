// For more information see: http://emberjs.com/guides/routing/

GameTableServer.UsersNewRoute = Ember.Route.extend({
   setupController: function(controller, model) {
      controller.set('model', this.store.createRecord('user'));
   }
});
