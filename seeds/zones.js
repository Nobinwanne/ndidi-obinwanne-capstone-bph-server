// import seed data files, arrays of objects
import zonesData from "../seed-data/zones.js";

export async function seed(knex) {
  await knex("zone").del();
  await knex("zone").insert(zonesData);
}
