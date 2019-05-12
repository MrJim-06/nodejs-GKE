import { Request, Response } from 'express';

export class HelloController {
    public helloTest(req: Request, res: Response) {
        res.status(200).send({
            message: 'Hello Kubernetes..!'
        });
    }
}