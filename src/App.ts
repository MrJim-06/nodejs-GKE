import express from 'express';
import bodyParser from 'body-parser';

import { HelloRoute } from './routes/HelloRoute';

class App {
    public app = express.application;
    private helloRoute = new HelloRoute();

    constructor() {
        this.app = express();
        this.config();
        this.helloRoute.routes(this.app);
    }

    private config() {
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: true }));
    }
}

export default new App().app;