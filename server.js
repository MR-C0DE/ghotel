import 'dotenv/config'
import express, { json, urlencoded } from 'express';
import helmet from 'helmet';
import compression from 'compression';
import cors from 'cors';
import fetch from 'node-fetch';
import { HttpRequest } from './model/http-request.js';

// Création du serveur
const app = express();

// Ajout de middlewares
app.use(helmet());
app.use(compression());
app.use(cors());
app.use(json());


//Creation d'une route de testing
app.route('/database')
    .get((request, response)=>{
        HttpRequest.getFetch({req:request, res:response});
    })
    .post(async (request, response)=>{
        const options = {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              title: 'example title',
              body: 'example body'
            })
          }
          
          fetch('http://localhost:4000/test', options)
            .then(response => response.json())
            .then(data => {
                response.status(200).json(data)
            })
            .catch(error => console.error(error));
    })
// Démarrage du serveur
app.listen(process.env.PORT);
 