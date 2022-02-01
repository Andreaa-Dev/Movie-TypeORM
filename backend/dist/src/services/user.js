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
Object.defineProperty(exports, "__esModule", { value: true });
const User_1 = require("../entity/User");
const apiError_1 = require("../helpers/apiError");
const createUser = (user) => __awaiter(void 0, void 0, void 0, function* () {
    return User_1.User.create(user).save();
});
const createUserWithGoogle = (user) => __awaiter(void 0, void 0, void 0, function* () {
    return User_1.User.create(user).save();
});
const findAll = (user) => __awaiter(void 0, void 0, void 0, function* () {
    return User_1.User.find();
});
const findUserByEmail = (email) => __awaiter(void 0, void 0, void 0, function* () {
    const foundUser = yield User_1.User.findOne({ email: email });
    if (!foundUser) {
        throw new apiError_1.NotFoundError("User not found");
    }
    return foundUser;
});
const updateUserById = (userID, update) => __awaiter(void 0, void 0, void 0, function* () {
    let foundUser = yield User_1.User.findOne({ id: userID });
    if (!foundUser) {
        throw new apiError_1.NotFoundError("User not found");
    }
    const newUser = Object.assign(Object.assign({}, foundUser), update);
    return newUser.save();
});
const deleteUserByEmail = (email) => __awaiter(void 0, void 0, void 0, function* () {
    const foundUser = yield User_1.User.findOne({ email: email });
    if (!foundUser) {
        throw new apiError_1.NotFoundError("User not found");
    }
    return foundUser === null || foundUser === void 0 ? void 0 : foundUser.remove();
});
exports.default = {
    createUser,
    createUserWithGoogle,
    findAll,
    findUserByEmail,
    updateUserById,
    deleteUserByEmail,
};
