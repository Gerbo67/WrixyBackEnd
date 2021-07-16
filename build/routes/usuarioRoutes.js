"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// imports
const express_1 = require("express");
const indexController_1 = require("../controllers/indexController");
class IndexRoutes {
    // constructor de la clase
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', indexController_1.indexController.lista);
    }
}
const indexRoutes = new IndexRoutes();
exports.default = indexRoutes.router;
