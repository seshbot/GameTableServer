// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require jquery.cookie
//= require handlebars
//= require ember
//= require ember-data
//= require_self
//= require game_table_server
//= require auth

// for more details see: http://emberjs.com/guides/application/
GameTableServer = Ember.Application.create({
   LOG_TRANSITIONS: true,  
});
Ember.LOG_BINDINGS = true;
Ember.ENV.RAISE_ON_DEPRECATION = true;
Ember.LOG_STACKTRACE_ON_DEPRECATION = true;

//Ember.onerror = function(error) {
  //Em.$.ajax('/error-notification', 'POST', {
      //stack: error.stack,
      //otherInformation: 'exception message'
   //});                   
//}

//= require_tree .
