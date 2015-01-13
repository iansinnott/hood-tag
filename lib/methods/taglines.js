Meteor.methods({

  insertTagline: function(obj) {
    return Taglines.insert(_.pick(obj, 'text', 'hoodId'));
  }

});

