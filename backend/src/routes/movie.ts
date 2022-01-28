import express from "express";

import { createMovie } from "../controllers/movie";

const router = express.Router();

router.post("/", createMovie);

export default router;
