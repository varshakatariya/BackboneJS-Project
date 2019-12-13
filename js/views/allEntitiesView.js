var app = app || {};

app.allEntitiesView = Backbone.View.extend({

  tagName: "section",

  render: function() {
 	  this.collection.each(this.addEntity, this);
 		return this;
  },

    addEntity: function(entity) {
 		var entityView = new app.singleEntityView ({ model: entity });
 		this.$el.append(entityView.render().el);
 }

});