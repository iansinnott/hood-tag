// Session is only defined on the client
if (Meteor.isClient) {

  /**
   * The currently selected neighborhood. Defaults to null, in which case no
   * neighborhood sidebar should be shown.
   */
  Session.setDefault('currentNeighborhood', null);

}
