// imports
import {Router} from 'express';
import {homeController} from '../controllers/homeController';

class HomeRoutes {
    public router: Router = Router();

    // constructor de la clase
    constructor() {
        this.config();
    }

    config(): void {
        this.router.post('/', homeController.lista);
    }
}

const homeRoutes = new HomeRoutes();
export default homeRoutes.router;