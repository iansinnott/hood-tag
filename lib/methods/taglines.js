Meteor.methods({

  /**
   * Insert a new tagline into the DB for the currently selected neighborhood.
   * Taglines start with an initial rank of zero.
   * Note: currently rank can go negative.
   */
  insertTagline: function(obj) {
    var tagline = _.pick(obj, 'text', 'hoodId');
    tagline.rank = 0;
    return Taglines.insert(tagline);
  },

  /**
   * Rank a tagline by either incrementing or decrementing its 'rank'.
   * Note, increment should always be either 1 or -1
   */
  vote: function(tagline, increment) {
    Taglines.update(tagline, { $inc: { rank: increment }});
  }

});

