exports.up = function(knex, Promise) {
    return knex.schema.createTable('actions', tbl => {
      tbl.increments();
  
      tbl
      .integer("projects_id")
      .unsigned()
      .references("id")
      .inTable("projects")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");

    tbl.timestamps(true, true)
    });
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('actions');
  };
