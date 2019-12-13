var entityBox = new app.singleEntity({
  entityName: "DB",
  entityType: "AppTier",
  isConnected: true,
  count: 2
});

var entityGroup = new app.EntitiesCollection([
  entityBox
]);

var entityGroupView = new app.allEntitiesView({ collection: entityGroup});

$("#allEntities").html(entityGroupView.render().el);

var entityRouter = new app.Router();

Backbone.history.start();