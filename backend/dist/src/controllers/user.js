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
exports.createUser = void 0;
const User_1 = require("../entity/User");
const apiError_1 = require("../helpers/apiError");
const bcrypt_1 = __importDefault(require("bcrypt"));
const user_1 = __importDefault(require("../services/user"));
//create user
const createUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (!req.body.email) {
            next(new apiError_1.BadRequestError("Missing email"));
        }
        const existEmail = yield user_1.default.findUserByEmail(req.body.email);
        if (existEmail) {
            next(new apiError_1.BadRequestError("Email has already taken"));
        }
        if (!req.body.password) {
            next(new apiError_1.BadRequestError("Missing password"));
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
            next(new apiError_1.BadRequestError("Invalid Request", error));
        }
        else {
            next(error);
        }
    }
});
exports.createUser = createUser;
