import express from "express";
import * as listingsController from "../controllers/listings-controllers.js";
const router = express.Router();

router
  .route("/")
  .get(listingsController.getListings)
  .post(listingsController.addListings);

router.route("/:id").delete(listingsController.deleteListings);

export default router;
