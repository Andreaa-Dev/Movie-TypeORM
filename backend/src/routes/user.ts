import express from "express";
import passport from "passport";

import { authenticate, createUser } from "../controllers/user";

const router = express.Router();

router.post("/", createUser);
router.post(
  "/google-authenticate",
  passport.authenticate("google-id-token", { session: false }),
  authenticate
);

export default router;
