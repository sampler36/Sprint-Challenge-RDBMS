exports.up = function(knex, Promise) {
    return knex.schema.createTable('actions', tbl => {
      tbl.increments();
  
      tbl.string('name', 128)
          .notNullable()
          .unique();
      tbl.timestamp(true, true);
    });
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('actions');
  };
