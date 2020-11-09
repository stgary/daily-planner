
exports.up = function(knex) {
  return knex.schema
  .createTable("users", tbl => {
    tbl.increments();
    
    tbl.string("name", 128).notNullable();
    tbl.string("email", 128).notNullable().unique().index();
    tbl.string("username", 128).notNullable().unique().index();
    tbl.string("password", 256).notNullable();
    
    tbl.timestamp("created_at", {useTz: true}).defaultTo(knex.fn.now());
  })
  .createTable('events', tbl => {
    tbl.increments();

    tbl.integer('user_id').notNullable()
      .references("users.id")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
    
    tbl.boolean('allDay').defaultTo(false);

    tbl.string('start').notNullable();
    tbl.string('end').notNullable();
    tbl.string('title', 128).notNullable();

    tbl.timestamp("created_at", {useTz: true}).defaultTo(knex.fn.now());
  });
};

exports.down = function(knex) {
  return knex.schema
  .dropTableIfExists('events')
  .dropTableIfExists('users')
};
