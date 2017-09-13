const Model = require('objection').Model;
const Note = require('./Note');

class Route extends Model {
  static get tableName() {
    return 'Route';
  }

  static get relationMappings() {
    return {

      notes: {
        relation: Model.ManyToManyRelation,
        modelClass: Note,
        join: {
          from: 'Route.id',
          through: {
            from: 'Route_Note.routeId',
            to: 'Route_Note.noteId'
          },
          to: 'Route.id'
        }
      },

      parent: {
        relation: Model.BelongsToOneRelation,
        modelClass: Route,
        join: {
          from: 'Route.parentId',
          to: 'Route.id'
        }
      }

    };
  };
};

module.exports = Route;
