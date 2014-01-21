// for more details see: http://emberjs.com/guides/controllers/

GameTableServer.ApplicationController = Ember.Controller.extend({
   currentUser: function() {
      return GameTableServer.AuthManager.get('apiKey.user')
   }.property('GameTableServer.AuthManager.apiKey'),

   isAuthenticated: function() {
      return GameTableServer.AuthManager.isAuthenticated()
   }.property('GameTableServer.AuthManager.apiKey')
});
