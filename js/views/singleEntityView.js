var app = app || {};

app.singleEntityView = Backbone.View.extend({

  tagName: "article",

  template: _.template( $("#entityElement").html() ),

  render: function() {
    var entityTemplate = this.template(this.model.toJSON());
    this.$el.html(entityTemplate);
    return this;
  }
});