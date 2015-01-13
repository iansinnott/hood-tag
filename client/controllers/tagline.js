Template.tagline.events({

  'click .up': function(e, template) {
    console.log('You upvoded this');
    Meteor.call('vote', template.data, 1);
  },

  'click .down': function(e, template) {
    console.log('You downvoted this');
    Meteor.call('vote', template.data, -1);
  },

  'mouseenter .tagline': function(e, template) {
    $(e.currentTarget).addClass('hover');
  },

  'mouseleave .tagline': function(e, template) {
    $(e.currentTarget).removeClass('hover');
  }

});
