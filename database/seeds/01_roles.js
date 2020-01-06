exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("roles").insert([
    { id: 1, roleName: "client" },
    { id: 2, roleName: "instructor" }
  ]);
};
