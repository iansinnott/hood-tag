Template.hood.helpers({

  taglines: function() {
    return Taglines.find({ hoodId: Session.get('currentNeighborhood') });
  },

  currentNeighborhood: function() {
    return Neighborhoods.findOne(Session.get('currentNeighborhood'));
  }

});

Template.hood.events({
  'click a': function(e, template) {
    e.preventDefault();
    console.log(template);
    Session.set('currentNeighborhood', $(e.currentTarget).attr('href'));
  }
});

Template.hood.rendered = function() {
  var paper = Raphael("sf-map-container", 680, 580);

  var shapeAttr = {
    "fill": "#7A1E48",
    "stroke": "#111625",
    "stroke-width": "0.6",
    "stroke-linejoin": "round"
  };


  var nameAttr = {
    "fill": "#fff",
    "font-family": "Helvetica",
    "font-size": 11,
    "font-weight": "bold",
    "text-anchor": "start"
  };

  Neighborhoods.find().forEach(function(hood) {
    drawNeighborhood(hood);
  });

  function drawNeighborhood(hood) {
    var path = paper.path(hood.path).attr(shapeAttr),
        name = paper.text(hood.nameX, hood.nameY, hood.name).attr(nameAttr),
        url  = hood.slug,
        set  = paper.set();

    set.push(path, name);
    set.attr({ "href": hood._id });

    set.mouseover(function (event) {
      this.attr({ "cursor": "pointer" });
      path.animate({ fill: "#341931" }, 400);
    });
    set.mouseout(function (event) {
      path.animate({ fill: "#7A1E48" }, 400);
    });
  }

};

