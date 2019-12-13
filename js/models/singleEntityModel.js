
var app = app || {};

app.singleEntity = Backbone.Model.extend({

  defaults: {
    entityName: "name",
    entityType: "type"
  }

});