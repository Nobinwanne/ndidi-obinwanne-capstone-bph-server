import initKnex from "knex";
import configuration from "../knexfile.js";
const knex = initKnex(configuration);

const getListings = async (_req, res) => {
  try {
    const listings = await knex("commercial_listings")
      .join("zone", "commercial_listings.zone_id", "zone.id")
      .join("city", "zone.city_id", "zone.id")
      .join("category", "zone.category_id", "zone.id");
    res.status(200).json(listings);
  } catch (error) {
    res.status(400).send(`Unable to retrieve listings ${error}`);
  }
};

const addListings = async (req, res) => {
  if (
    !req.body.address ||
    !req.body.lot_size ||
    !req.body.price ||
    !req.body.description ||
    !req.body.type ||
    !req.body.zone_id ||
    !req.body.amenities_nearby ||
    !req.body.realtor_name ||
    !req.body.realtor_number ||
    !req.body.longitude ||
    !req.body.latitude
  ) {
    return res.status(400).json({
      message:
        "Please provide all relevant data for the listing in the request",
    });
  }

  try {
    const result = await knex("commercial_listings").insert(req.body);

    const newListingId = result[0];
    const createdListing = await knex("commercial_listings").where({
      id: newListingId,
    });

    res.status(201).json(createdListing);
  } catch (error) {
    res.status(500).json({
      message: `Unable to create new listing: ${error}`,
    });
  }
};

const deleteListings = async (req, res) => {
  try {
    const listingsDeleted = await knex("commercial_listings")
      .where({ id: req.params.id })
      .delete();
    if (listingsDeleted === 0) {
      return res
        .status(404)
        .json({ message: `Listing with ID ${req.params.id} not found` });
    }

    res.sendStatus(204);
  } catch (error) {
    res.status(500).json({
      message: `Unable to delete user: ${error}`,
    });
  }
};

export { getListings, addListings, deleteListings };
