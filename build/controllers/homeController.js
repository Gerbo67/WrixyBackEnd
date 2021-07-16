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
exports.homeController = void 0;
const homeDAO_1 = require("../dao/homeDAO");
class HomeController {
    lista(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // extracción de datos
                const page = req.body.page;
                // validacion de dato
                if (isNaN(parseInt(page)))
                    return res.status(422).json({ message: 'NOT', detail: 'Se ha enviado un dato erroneo' });
                // asignación de páginas
                const endQuery = parseInt(`${page}0`);
                const startQuery = endQuery - 9;
                // consulta de datos por pagina
                const resultPage = yield homeDAO_1.dao.getBooksPage(startQuery, endQuery);
                // devuelve el numero de datos regustrados
                const resultPages = yield homeDAO_1.dao.getBooksPages();
                // dato de total de pagina
                const totalPages = Math.ceil(resultPages / 10);
                // evaluacion de datos
                if (resultPage.length === 0) {
                    return res.status(204).json({ message: 'NOT', detail: `No existe la pagina ${page}` });
                }
                else {
                    return res.status(200).json({
                        message: 'OK',
                        detail: `Consulta de libros página: ${page}`,
                        currentPage: parseInt(page),
                        totalPages: totalPages,
                        data: resultPage
                    });
                }
            }
            catch (e) {
                return res.status(500).json({ message: 'ERROR', errorDetail: e });
            }
        });
    }
}
exports.homeController = new HomeController();
