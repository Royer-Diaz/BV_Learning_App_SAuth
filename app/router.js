import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

export default Router.map(function() {
  this.route('login');
  this.route('protected');
  this.route('tracks');
  this.resource('library', function(){
    this.resource('display-lib');
  });
  this.route('support');
  this.route('contact');
  this.route('home');
  this.resource('posts', function(){
     this.resource('new-post', { path: '/new-post'});
  });
  this.resource('post', { path: '/posts/post/:post_id' }, function(){
    this.route('new-comment');
  });
  this.route('my-profile');
  this.route('messages');
});
