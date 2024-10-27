// import seed data files, arrays of objects
import listingsData from "../seed-data/commercial-listings.js";

export async function seed(knex) {
  await knex("commercial_listings").del();
  await knex("commercial_listings").insert(listingsData);
}
