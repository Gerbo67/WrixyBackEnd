// imports
import express, {Application} from 'express';
require('dotenv').config();
import morgan from 'morgan';
import cors from 'cors';

// routes
import indexRoutes from './routes/indexRoutes';
import homeRoutes from './routes/homeRoutes'

class Server {

    public app: Application;

    // constructor de la clase
    constructor() {
        this.app = express();
        this.config();
        this.routes();
    }

    config(): void {
        this.app.set('port', process.env.PORT || 3000);
        this.app.use(morgan("dev"));
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended: false}));
    }

    routes(): void {
        this.app.use('/', indexRoutes);
        this.app.use('/books', homeRoutes);
    }

    start(): void {
        this.app.listen(this.app.get('port'), () => {
            console.log('Server on port', this.app.get('port'));

        });
    }
}

const server = new Server();
server.start();