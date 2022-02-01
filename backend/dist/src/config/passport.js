"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.jwtStrategy = exports.googleStrategy = void 0;
const passport_google_id_token_1 = __importDefault(require("passport-google-id-token"));
const passport_jwt_1 = require("passport-jwt");
const secrets_1 = require("../../util/secrets");
const user_1 = __importDefault(require("../services/user"));
const clientId = process.env.GOOGLE_CLIENT_ID;
exports.googleStrategy = new passport_google_id_token_1.default({ clientID: clientId }, function (parsedToken, googleId, done) {
    var _a, _b, _c;
    return __awaiter(this, void 0, void 0, function* () {
        console.log("k");
        const userPayload = {
            email: parsedToken === null || parsedToken === void 0 ? void 0 : parsedToken.payload.email,
            firstName: (_a = parsedToken === null || parsedToken === void 0 ? void 0 : parsedToken.payload) === null || _a === void 0 ? void 0 : _a.given_name,
            lastName: (_b = parsedToken === null || parsedToken === void 0 ? void 0 : parsedToken.payload) === null || _b === void 0 ? void 0 : _b.family_name,
            image: (_c = parsedToken === null || parsedToken === void 0 ? void 0 : parsedToken.payload) === null || _c === void 0 ? void 0 : _c.picture,
        };
        const user = yield user_1.default.createUserWithGoogle(userPayload);
        done(null, user);
    });
});
exports.jwtStrategy = new passport_jwt_1.Strategy({
    secretOrKey: secrets_1.JWT_SECRET,
    jwtFromRequest: passport_jwt_1.ExtractJwt.fromAuthHeaderAsBearerToken(),
}, (payload, done) => __awaiter(void 0, void 0, void 0, function* () {
    const userEmail = payload.email;
    const foundUser = yield user_1.default.findUserByEmail(userEmail);
    done(null, foundUser);
}));
