"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// imports
const express_1 = require("express");
const homeController_1 = require("../controllers/homeController");
class HomeRoutes {
    // constructor de la clase
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.post('/', homeController_1.homeController.lista);
    }
}
const homeRoutes = new HomeRoutes();
exports.default = homeRoutes.router;
