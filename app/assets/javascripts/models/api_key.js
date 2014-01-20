// for more details see: http://emberjs.com/guides/models/defining-models/

// Ember.Object instead of DS.Model because this will never persist to or query the server
GameTableServer.ApiKey = Ember.Object.extend({
  user: null,
  accessToken: ''
});
