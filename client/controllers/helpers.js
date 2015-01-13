/**
 * Global Template Helpers
 *
 * Note that 'this' will be set to the context of wherevere the helper is
 * called. See formatDate bellow for more on this.
 */

var Helpers = {

  /**
   * Return a formated date based on the timestamp of the current note.
   *
   * Note: This must be called in the context of a single note ojbect so that
   * created_at is defined and an integer.
   * @return {string} current year (YYYY)
   */
  formatDate: function() {
    return moment(this.created_at).format('MM-DD HH:mm');
  },

  /**
   * Are we in production?
   * @return {bool}
   */
  isProduction: function() {
    return process && process.env.NODE_ENV === 'production';
  },

  // currentNeighborhood: function() {
  //   return Session.get('currentNeighborhood');
  // },

  hasCurrentNeighborhood: function() {
    return Session.get('currentNeighborhood') !== null;
  }

};

// Register all template helpers.
_.each(Helpers, function(func, key) { Template.registerHelper(key, func); });

