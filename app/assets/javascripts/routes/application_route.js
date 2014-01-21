// For more information see: http://emberjs.com/guides/routing/

GameTableServer.ApplicationRoute = Ember.Route.extend({
   init: function() {
      this._super();
      GameTableServer.AuthManager = AuthManager.create();
   },
   actions: {
      logout: function() {
         GameTableServer.AuthManager.reset();
         this.transitionTo('index');
      }
   }
});
