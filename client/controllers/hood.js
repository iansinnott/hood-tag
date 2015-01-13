Template.hood.rendered = function() {
  var paper = Raphael("sf-map-container", 680, 580);

  var shapeAttr = {
    "fill": "#69D2E7",
    "stroke": "#A7DBD8",
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
    console.log('hey we made it');
    console.log(hood);
    drawNeighborhood(hood.path, hood.nameX, hood.nameY, hood.name, hood.slug);
  });

  function drawNeighborhood(_path, _nameX, _nameY, _name, _slug) {
    var path = paper.path(_path).attr(shapeAttr),
      name   = paper.text(_nameX, _nameY, _name).attr(nameAttr),
      url    = _slug,
      set    = paper.set();

    set.push(path, name);
    set.attr({ "href": url });

    set.mouseover(function (event) {
      this.attr({ "cursor": "pointer" });
      path.animate({ fill: "#F38630" }, 400);
    });
    set.mouseout(function (event) {
      path.animate({ fill: "#69D2E7" }, 400);
    });
  }

};

