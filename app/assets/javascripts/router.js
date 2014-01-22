// For more information see: http://emberjs.com/guides/routing/

GameTableServer.Router.map(function() {
   this.route('sessions.new');

   this.resource('users', function(){
   	this.resource('user', { path: '/:user_id'});
   })
	this.route('users.new');
});
