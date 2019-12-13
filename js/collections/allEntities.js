var app = app || {};

app.EntitiesCollection = Backbone.Collection.extend({

  model: app.singleEntity

});