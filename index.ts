import Server from "./classes/server";
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import fileUpload from 'express-fileupload';
import cors from 'cors';

import userRoutes from "./routes/usuario";
import postRoutes from "./routes/post";

const server = new Server();

//Body parser
server.app.use( bodyParser.urlencoded({ extended: true}) );
server.app.use( bodyParser.json() );

//fileUpload
server.app.use( fileUpload({ useTempFiles: true }) );

//configurar CORS
server.app.use( cors({ origin: true , credentials: true }) );

//rutas
server.app.use('/user', userRoutes );
server.app.use('/posts', postRoutes );


//conectar DB
mongoose.connect('mongodb://localhost:27017/photogram',
                { useNewUrlParser: true, useCreateIndex: true }, 
                ( err ) => {

                    if(err) throw err;

                    console.log('Base de datos ONLINE');
                });

// levantar express
server.star( () => {

    console.log(`Servidor corriendo en puerto ${ server.port }`);
});