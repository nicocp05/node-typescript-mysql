import express, { Application } from 'express';
import cors  from 'cors';
import userRoutes from '../routes/user.route';
import db from '../db/connection';

export default class Server {

    private app: Application;
    private port: String;
    private paths = {
        users: '/api/users'
    }

    constructor() {
        this.app = express();
        this.port = process.env.PORT || '3000';
        this.dbConnection();
        this.middlewares();
        this.routes();
    }

    public async dbConnection() {
        try {
            await db.authenticate();
            console.log('Database is connected');
        } catch (error) {
            throw new Error(error);
        }
    }

    public middlewares() {
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.static('public'));
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