exports.up = function(knex, Promise) {
    return knex.schema.createTable('actions', tbl => {
      tbl.increments();
      tbl.string('name',128)
         .notNullable();
  
      tbl
      .integer("project_id")
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
