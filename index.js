import express from "express";
import cors from "cors";

const app = express();

const PORT = process.env.PORT || 3002;

import zonesRoutes from "./routes/zone-routes.js";

app.use(cors());

app.use(express.json());

app.use("/zones", zonesRoutes);

app.listen(PORT, () => {
  console.log(`running at http://localhost:${PORT}`);
});
