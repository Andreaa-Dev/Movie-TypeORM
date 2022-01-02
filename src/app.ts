import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import compression from "compression";
import apiErrorHandler from "../middleswares/apiErrorHandler";
import apiContentType from "../middleswares/apiContentType";

dotenv.config({ path: "env" });
const app = express();

app.set("port", process.env.PORT || 3000);
app.use(apiContentType);

app.use(cors());
app.use(compression());
app.use(express.json());

app.use(apiErrorHandler);

export default app;
