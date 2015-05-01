import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource('products', function() {});

  this.resource('pages', function() {
    this.route('about', {path: '/about'});
    this.route('opportunity', {path: '/opportunity'});
    this.route('contact', {path: '/contact'});
  });


  this.resource('blogs', function() {
    this.route('show', {path: '/:blog_id'})
  });
});

export default Router;
