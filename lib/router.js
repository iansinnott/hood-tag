// Configuration
Router.configure({
  layoutTemplate: 'appLayout',
  loadingTemplate: 'loading',
  waitOn: function() {
    return [
      Meteor.subscribe('neighborhoods'),
      Meteor.subscribe('taglines')
    ];
  }
});

/**
 * ROUTES
 */

// Root/Home
Router.route('/', function() {
  this.layout('landingLayout');
  this.render('landing');
});

// Notes by client
Router.route('/hood/:hoodId', function() {
  var hood = Neighborhoods.find(this.params.hood);

  Session.set('currentNeighborhood', hood._id);

  this.render('hood');
}, { name: 'Neighborhood' });

// Pages
Router.route('/login');
Router.route('/register');
