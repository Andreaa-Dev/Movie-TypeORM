"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const passport_1 = __importDefault(require("passport"));
const user_1 = require("../controllers/user");
const router = express_1.default.Router();
router.post("/", user_1.createUser);
router.post("/google-authenticate", passport_1.default.authenticate("google-id-token", { session: false }), user_1.authenticate);
exports.default = router;
