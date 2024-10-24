import express from "express";
import * as zoneController from "../controllers/zone-controllers.js";
const router = express.Router();

router.route("/").get(zoneController.index);

export default router;
