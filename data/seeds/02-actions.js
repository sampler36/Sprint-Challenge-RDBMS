

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('actions').del()
    .then(function () {
      // Inserts seed entries
      return knex('actions').insert([
        {name:' update'},
        {name:' Stop'},
        {name:' Start'}
      ]);
    });
};