// this is a convenience base route to be used by routes that want:
//  - to verify that the user has been authenticated before routing, 
//    and to be redirected to the 'login' route if not
//  - handle all 'error' actions by redirecting to the 'login' page
//    (note we might want to make this nicer later so it only does this on 401)
GameTableServer.AuthenticatedRoute = Ember.Route.extend({
   beforeModel: function(transition) {
      if (!GameTableServer.AuthManager.isAuthenticated()) {
         this.redirectToLogin(transition);
      }
   },

   // Redirect to the login page and store the current transition so we can
   // run it again after login
   redirectToLogin: function(transition) {
      var sessionNewController = this.controllerFor('sessions.new');
         sessionNewController.set('attemptedTransition', transition);
         this.transitionTo('sessions.new');
   },
  
   actions: {
      error: function(reason, transition) {
         this.redirectToLogin(transition);
      }
   }
});
