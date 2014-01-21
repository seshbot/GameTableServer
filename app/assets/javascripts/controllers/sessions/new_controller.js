// for more details see: http://emberjs.com/guides/controllers/

GameTableServer.SessionsNewController = Ember.Controller.extend({
   errors: {}, 

   errorMessage: '', 

   attemptedTransition: null,

   reset: function() {
      this.setProperties({
         errors: {}, 
         errorMessage: '',
         username_or_email: '', 
         password: '',
      });
   },

   actions: {
      loginUser: function() {
         var self = this;
         var router = this.get('target');
         var data = this.getProperties('username_or_email', 'password');
         var attemptedTrans = this.get('attemptedTransition');
         var controller = this;

         controller.set('errorMessage', '');
         controller.set('errors', {});

         $.post('/session', data, function(results) {
            GameTableServer.AuthManager.authenticate(results.api_key.access_token, results.api_key.user_id);
            if (attemptedTrans) {
               attemptedTrans.retry();
               self.set('attemptedTransition', null);
            } else {
               router.transitionTo('index');
            }
         }).fail(function(jqxhr, textStatus, error ) {
            if (jqxhr.responseText) {
               errs = JSON.parse(jqxhr.responseText);
               if (errs.message) {
                  controller.set('errorMessage', errs.message);
               }

               if (jqxhr.status === 401) {
                  controller.set('errors', errs.errors);
               }
            }
         });
      }
   }
});
