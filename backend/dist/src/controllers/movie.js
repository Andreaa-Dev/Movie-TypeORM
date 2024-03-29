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
exports.createMovie = void 0;
const apiError_1 = require("../helpers/apiError");
const Movie_1 = require("../entity/Movie");
//create movie
const createMovie = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { title, description, duration, year, rating, review } = req.body;
        const movie = new Movie_1.Movie();
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
exports.createMovie = createMovie;
