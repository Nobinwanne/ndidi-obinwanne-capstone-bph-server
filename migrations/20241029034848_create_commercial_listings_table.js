/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
  return knex.schema.createTable("commercial_listings", (table) => {
    table.increments("id").primary();
    table.string("address").notNullable();
    table.string("lot_size").notNullable();
    table.string("price").notNullable();
    table.string("description", 1000).notNullable();
    table.string("type", 50).notNullable();
    table.string("amenities_nearby", 1000).notNullable();
    table.string("realtor_name", 50).notNullable();
    table.string("realtor_number", 50).notNullable();
    table.decimal("longitude", 10, 8).notNullable();
    table.decimal("latitude", 10, 8).notNullable();
    table.integer("zone_id").unsigned().notNullable();
    table.timestamp("created_at").defaultTo(knex.fn.now());
    table
      .timestamp("updated_at")
      .defaultTo(knex.raw("CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP"));

    table
      .foreign("zone_id")
      .references("zone.id")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");
  });
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {
  return knex.schema.dropTable("commercial_listings");
}
