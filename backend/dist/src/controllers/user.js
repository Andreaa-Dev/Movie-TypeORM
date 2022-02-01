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
exports.authenticate = exports.createUser = void 0;
const apiError_1 = require("./../helpers/apiError");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const User_1 = require("./../entity/User");
const user_1 = __importDefault(require("../services/user"));
const apiError_2 = require("../helpers/apiError");
const secrets_1 = require("../../util/secrets");
const createUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (!req.body.email) {
            next(new apiError_2.BadRequestError("Missing email"));
        }
        const existEmail = yield user_1.default.findUserByEmail(req.body.email);
        if (existEmail) {
            next(new apiError_2.BadRequestError("Email has already taken"));
        }
        if (!req.body.password) {
            next(new apiError_2.BadRequestError("Missing password"));
        }
        const { firstName, lastName, phoneNumber, email, password } = req.body;
        const salt = yield bcrypt_1.default.genSalt(10);
        const hashedPassword = yield bcrypt_1.default.hash(password, salt);
        const user = new User_1.User();
        user.firstName = firstName;
        user.lastName = lastName;
        user.phoneNumber = phoneNumber;
        user.email = email;
        user.password = hashedPassword;
        yield user_1.default.createUser(user);
    }
    catch (error) {
        if (error instanceof Error && error.name == "ValidationError") {
            next(new apiError_2.BadRequestError("Invalid Request", error));
        }
        else {
            next(error);
        }
    }
});
exports.createUser = createUser;
const authenticate = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userGoogleData = req.user;
        console.log("i");
        const { email, firstName, lastName, image } = userGoogleData;
        const token = jsonwebtoken_1.default.sign({
            email: req.body.email,
            firstName: req.body.firstName,
            image: req.body.picture,
        }, secrets_1.JWT_SECRET, { expiresIn: "1h" });
        res.json({ token, userGoogleData });
    }
    catch (error) {
        return next(new apiError_1.InternalServerError());
    }
});
exports.authenticate = authenticate;
