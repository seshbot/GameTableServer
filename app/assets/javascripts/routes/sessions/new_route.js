// For more information see: http://emberjs.com/guides/routing/

GameTableServer.SessionsNewRoute = Ember.Route.extend({
   model: function() {
      return Ember.Object.create();
   }, 

   setupController: function(controller, context) {
      controller.reset();
   },
});
