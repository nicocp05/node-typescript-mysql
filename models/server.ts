import express, { Application } from 'express';
import userRoutes from '../routes/user.route';

export default class Server {

    private app: Application;
    private port: String;
    private paths = {
        users: '/api/users'
    }

    constructor() {
        this.app = express();
        this.port = process.env.PORT || '3000';
        this.routes();
    }

    public routes() {
        this.app.use(this.paths.users, userRoutes)
    }

    public listen() {
        this.app.listen(this.port, () => {
            console.log(`Server on port ${this.port}`);
        });
    }

}