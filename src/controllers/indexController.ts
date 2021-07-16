// imports
import {Request, Response} from 'express';
import {dao} from '../dao/indexDAO';


class IndexController {

    public async index(req: Request, res: Response) {
        res.status(200).json({
            message: 'OK',
            details: 'Bienvenido a API Wrixy',
            legacy: 'Api no original solo para uso de practica, pagina oficial en wrixy.com'
        });
    }

}

export const indexController = new IndexController();