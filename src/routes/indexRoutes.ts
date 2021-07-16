// imports
import {Router} from 'express';
import {indexController} from '../controllers/indexController';

class IndexRoutes {
    public router: Router = Router();

    // constructor de la clase
    constructor() {
        this.config();
    }

    config(): void {
        this.router.get('/', indexController.index);
    }
}

const indexRoutes = new IndexRoutes();
export default indexRoutes.router;