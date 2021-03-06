exports.up = function(knex, Promise) {
    return knex.schema.createTable('projects', tbl => {
      tbl.increments();
  
      tbl.string('name', 128)
          .notNullable()
          .unique();
      tbl.string('description', 520)
          .notNullable()
          .unique();
      tbl.timestamp(true, true);
    });

  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('projects');
  };
