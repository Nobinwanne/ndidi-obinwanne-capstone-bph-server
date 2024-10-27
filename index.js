import express from "express";
import cors from "cors";
import "dotenv/config";

const app = express();

const PORT = process.env.PORT || 3002;

import listingRoutes from "./routes/listings-routes.js";

app.use(cors());

app.use(express.json());

app.use("/listings", listingRoutes);

app.listen(PORT, () => {
  console.log(`running at http://localhost:${PORT}`);
});
