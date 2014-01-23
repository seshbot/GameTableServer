// for more details see: http://emberjs.com/guides/controllers/

GameTableServer.UsersController = Ember.ArrayController.extend({
   sortProperties: ['notAdmin', 'name'],
   sortAscending: true, // false for descending

   notAdmin: function() {
   	return !this.get('admin');
   }.property('admin'),
});
