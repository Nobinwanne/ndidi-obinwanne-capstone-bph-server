// import seed data files, arrays of objects
import categoryData from "../seed-data/category.js";
import listingsData from "../seed-data/commercial-listings.js";
import cityData from "../seed-data/city.js";
import zoneData from "../seed-data/zone.js";

export async function seed(knex) {
  await knex("category").del();
  await knex("category").insert(categoryData);
  await knex("city").del();
  await knex("city").insert(cityData);
  await knex("zone").del();
  await knex("zone").insert(zoneData);
  await knex("commercial_listings").del();
  await knex("commercial_listings").insert(listingsData);
}
