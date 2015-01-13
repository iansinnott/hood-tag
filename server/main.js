// Fixtures. Will need to add all neighborhoods the first time we initialize the
// db.
Meteor.startup(function () {

  if (Neighborhoods.find().count() === 0) {

    // TODO:
    // Add all neighborhoods
    // Neighborhoods.insert();

  }

});

Meteor.publish('taglines');
Meteor.publish('neighborhoods');
