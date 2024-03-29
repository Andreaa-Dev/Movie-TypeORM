"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
const passport_1 = __importDefault(require("passport"));
const lusca_1 = __importDefault(require("lusca"));
const passport_2 = require("./config/passport");
const compression_1 = __importDefault(require("compression"));
const apiErrorHandler_1 = __importDefault(require("./middleswares/apiErrorHandler"));
const apiContentType_1 = __importDefault(require("./middleswares/apiContentType"));
const movie_1 = __importDefault(require("./routes/movie"));
const user_1 = __importDefault(require("./routes/user"));
dotenv_1.default.config({ path: "env" });
const app = (0, express_1.default)();
app.set("port", process.env.PORT || 5001);
app.use(apiContentType_1.default);
app.use((0, cors_1.default)());
app.use((0, compression_1.default)());
app.use(express_1.default.json());
app.use(lusca_1.default.xframe("SAMEORIGIN"));
app.use(lusca_1.default.xssProtection(true));
app.use(passport_1.default.initialize());
passport_1.default.use(passport_2.googleStrategy);
passport_1.default.use(passport_2.jwtStrategy);
app.use("/api/v1/movie", movie_1.default);
app.use("/api/v1/user", user_1.default);
app.use(apiErrorHandler_1.default);
exports.default = app;
