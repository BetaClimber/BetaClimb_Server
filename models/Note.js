const Model = require('objection').Model;

class Note extends Model {
  // Table name is the only required property.
  static get tableName() {
    return 'Note';
  }

  static get relationMappings() {
    return {
      actors: {
        relation: Model.ManyToManyRelation,
        modelClass: __dirname + '/Route',
        join: {
          from: 'Note.id',
          through: {
            from: 'Route_Note.noteId',
            to: 'Route_Note.routeId'
          },
          to: 'Route.id'
        }
      }
    };
  }
}

module.exports = Note;
