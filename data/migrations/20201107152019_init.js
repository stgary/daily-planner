
exports.up = function(knex) {
  return knex.schema
    .createTable('events', tbl => {
      tbl.increments();
      
      tbl.boolean('allDay').defaultTo(false);

      tbl.date('start').notNullable();
      tbl.date('end').notNullable();

      tbl.string('title', 128).notNullable();
      tbl.string('description', 256);

      tbl.timestamp("created_at", {useTz: true}).defaultTo(knex.fn.now());
    })
    .createTable("users", tbl => {
      tbl.increments();

      tbl.string("name", 128).notNullable();
      tbl.string("email", 128).notNullable().unique().index();
      tbl.string("username", 128).notNullable().unique().index();
      tbl.string("password", 256).notNullable();

      tbl.timestamp("created_at", {useTz: true}).defaultTo(knex.fn.now());
  });
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('users')
    .dropTableIfExists('events');
};
