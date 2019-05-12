import { HelloController } from '../controllers/HelloController';

export class HelloRoute {
    private controller = new HelloController();

    public routes(app) {
        app.get('/hello', this.controller.helloTest);
    }
}