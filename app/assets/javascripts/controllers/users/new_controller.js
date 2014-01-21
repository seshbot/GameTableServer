// for more details see: http://emberjs.com/guides/controllers/

GameTableServer.UsersNewController = Ember.Controller.extend({
   errors: {}, 

   actions: {
      createUser: function() {
         var router = this.get('target');
         var data = this.getProperties('name', 'email', 'username', 'password', 'password_confirmation')
         var controller = this;

         $.post('/users', { user: data }, function(results) {
            GameTableServer.AuthManager.authenticate(results.api_key.access_token, results.api_key.user_id);
            router.transitionTo('index');
         }).fail(function(jqxhr, textStatus, error ) {
            if (jqxhr.status === 422) {
               errs = JSON.parse(jqxhr.responseText)
               controller.set('errors', errs.errors);
            }
         });
      }
   }
});
