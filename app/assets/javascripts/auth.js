// taken from http://coderberry.me/blog/2013/07/08/authentication-with-emberjs-part-2/
var AuthManager = Ember.Object.extend({
   // Load the current user if the cookies exist and is valid
   init: function() {
      this._super();
      var accessToken = $.cookie('access_token');
      var authUserId  = $.cookie('auth_user');
      if (!Ember.isEmpty(accessToken) && !Ember.isEmpty(authUserId)) {
         this.authenticate(accessToken, authUserId);
      }
   },

    // Determine if the user is currently authenticated.
    isAuthenticated: function() {
       return !Ember.isEmpty(this.get('apiKey.accessToken')) && !Ember.isEmpty(this.get('apiKey.user'));
    },

    // Authenticate the user. Once they are authenticated, set the access token to be submitted with all
    // future AJAX requests to the server.
    authenticate: function(accessToken, userId) {
       $.ajaxSetup({
          headers: { 'Authorization': 'Bearer ' + accessToken }
       });

       // is this the best way? How else to get the store?
       // (see http://stackoverflow.com/questions/19401087/ember-js-how-to-get-access-to-store-from-app-object)
       var store = GameTableServer.__container__.lookup('store:main')

       var self = this;
       store.find('user', userId).then(function(user) {
          self.set('apiKey', GameTableServer.ApiKey.create({
             accessToken: accessToken,
             user: user
          }));
       });
    },

    // Log out the user
    reset: function() {
       GameTableServer.__container__.lookup("route:application").transitionTo('sessions.new');
       Ember.run.sync();
       Ember.run.next(this, function(){
          this.set('apiKey', null);
          $.ajaxSetup({
             headers: { 'Authorization': 'Bearer none' }
          });
       });
    },

    // Ensure that when the apiKey changes, we store the data in cookies in order for us to load
    // the user when the browser is refreshed.
    apiKeyObserver: function() {
       if (Ember.isEmpty(this.get('apiKey'))) {
          $.removeCookie('access_token');
          $.removeCookie('auth_user');
       } else {
          $.cookie('access_token', this.get('apiKey.accessToken'));
          $.cookie('auth_user', this.get('apiKey.user.id'));
       }
       var accessToken = $.cookie('access_token');
       var authUserId  = $.cookie('auth_user');
    }.observes('apiKey')
});

// Reset the authentication if any ember data request returns a 401 unauthorized error
DS.rejectionHandler = function(reason) {
   if (reason.status === 401) {
      GameTableServer.AuthManager.reset();
   }
   throw reason;
};

