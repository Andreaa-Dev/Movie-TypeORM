import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import passport from "passport";
import lusca from "lusca";
import { jwtStrategy, googleStrategy } from "./config/passport";

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
app.use(lusca.xframe("SAMEORIGIN"));
app.use(lusca.xssProtection(true));
app.use(passport.initialize());
passport.use(googleStrategy);
passport.use(jwtStrategy);

app.use("/api/v1/movie", movieRouter);
app.use("/api/v1/user", userRouter);

app.use(apiErrorHandler);

export default app;
