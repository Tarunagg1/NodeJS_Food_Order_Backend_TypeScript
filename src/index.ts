import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import { PORT } from './config';
import App from './services/ExpressServices';;
import dbConnection from './services/Database';


const startServer = async ()=>{
    const app = express();
    const APP_PORT = PORT;
    

    await App(app);
    await dbConnection()


    app.listen(APP_PORT,()=>{
        console.log('listening on port '+APP_PORT);
    });
}

startServer();