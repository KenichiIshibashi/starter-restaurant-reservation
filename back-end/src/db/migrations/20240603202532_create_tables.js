exports.up = function (knex) {
  return knex.schema.createTable("tables", (table) => {
    table.increments("table_id").primary();
    table.string("table_name");
    table.string("capacity");
    table.integer("reservation_id").unsigned();
    table
      .foreign("reservation_id")
      .references("reservation_id")
      .inTable("reservations");
    table.timestamps(true, true);
  });
};

exports.down = async function (knex) {
  const hasTablesTable = await knex.schema.hasTable("tables");
  if (hasTablesTable) {
    return knex.schema.dropTable("tables");
  }
};
