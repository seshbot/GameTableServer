// for more details see: http://emberjs.com/guides/controllers/

GameTableServer.IndexController = Ember.Controller.extend({
   needs: ['application'],

   isAuthenticated: Em.computed.alias('controllers.application.isAuthenticated'),
});
