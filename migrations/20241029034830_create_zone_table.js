/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
  return knex.schema.createTable("zone", (table) => {
    table.increments("id").primary();
    table.string("zone").notNullable();
    table.integer("site_coverage").notNullable();
    table.integer("max_height").notNullable();
    table.integer("storeys").notNullable();
    table.string("description", 1000).notNullable();
    table.string("comment", 1000).notNullable();
    table.integer("category_id").unsigned().notNullable();
    table.integer("city_id").unsigned().notNullable();
    table.timestamp("created_at").defaultTo(knex.fn.now());
    table
      .timestamp("updated_at")
      .defaultTo(knex.raw("CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP"));

    table
      .foreign("category_id")
      .references("category.id")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");
    table
      .foreign("city_id")
      .references("city.id")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");
  });
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {
  return knex.schema.dropTable("zone");
}
