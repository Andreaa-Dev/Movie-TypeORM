import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import compression from "compression";
import apiErrorHandler from "./middleswares/apiErrorHandler";
import apiContentType from "./middleswares/apiContentType";
import movieRouter from "./routes/movie";
import userRouter from "./routes/user";

dotenv.config({ path: "env" });
const app = express();

app.set("port", process.env.PORT || 5001);
app.use(apiContentType);

app.use(cors());
app.use(compression());
app.use(express.json());

app.use("/api/v1/movie", movieRouter);
app.use("/api/v1/user", userRouter);

app.use(apiErrorHandler);

export default app;
