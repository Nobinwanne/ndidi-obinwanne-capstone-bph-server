/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
  return knex.schema.createTable("commercial_listings", (table) => {
    table.increments("id").primary();
    table.string("address").notNullable();
    table.string("lot_size").notNullable();
    table.integer("max_height").notNullable();
    table.integer("storeys");
    table.string("description", 1000).notNullable();
    table.string("comment", 1000).notNullable();
    table.timestamp("created_at").defaultTo(knex.fn.now());
    table
      .timestamp("updated_at")
      .defaultTo(knex.raw("CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP"));

    table
      .integer("zone_id")
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
