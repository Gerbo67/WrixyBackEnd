// imports
import {Request, Response} from 'express';
import {dao} from '../dao/homeDAO';

class HomeController {

    public async lista(req: Request, res: Response) {

        try {
            // extracción de datos
            const page = req.body.page;

            // validacion de dato
            if (isNaN(parseInt(page)))
                return res.status(422).json({message: 'NOT', detail: 'Se ha enviado un dato erroneo'});

            // asignación de páginas
            const endQuery = parseInt(`${page}0`);
            const startQuery = endQuery - 9;

            // consulta de datos por pagina
            const resultPage = await dao.getBooksPage(startQuery, endQuery);

            // devuelve el numero de datos regustrados
            const resultPages = await dao.getBooksPages();

            // dato de total de pagina
            const totalPages = Math.ceil(resultPages / 10)

            // evaluacion de datos
            if (resultPage.length === 0) {
                return res.status(204).json({message: 'NOT', detail: `No existe la pagina ${page}`});
            } else {
                return res.status(200).json({
                    message: 'OK',
                    detail: `Consulta de libros página: ${page}`,
                    currentPage: parseInt(page),
                    totalPages: totalPages,
                    data: resultPage
                });
            }

        } catch (e) {
            return res.status(500).json({message: 'ERROR', errorDetail: e});
        }

    }
}

export const homeController = new HomeController();