
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('actions').del()
    .then(function () {
      // Inserts seed entries
      return knex('actions').insert([
        {project_id:1, name:' update'},
        {project_id:2, name:' Stop'},
        {project_id:3, name:' Start'}
      ]);
    });
};