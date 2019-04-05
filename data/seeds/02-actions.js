
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('actions').del()
    .then(function () {
      // Inserts seed entries
      return knex('actions').insert([
        {projects_id:1, name:' update'},
        {projects_id:2, name:' Stop'},
        {projects_id:3, name:' Start'}
      ]);
    });
};