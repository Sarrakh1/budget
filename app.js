const express = require('express')
const cors = require('cors');
const { db } = require('./db/db');
const {readdirSync} = require('fs')
const app = express()

require('dotenv').config()

const PORT = process.env.PORT

//middlewares
app.use(express.json()) //Utilisation du middleware express.json() pour analyser les corps des requêtes JSON 
app.use(cors()) //Utilisation du middleware cors() pour permettre les requêtes cross-origin.

//routes
//Utilisation de readdirSync pour lire le contenu du répertoire './routes' de manière synchrone.
//Pour chaque fichier de route, il utilise app.use() pour monter la route sur le chemin spécifié ('/api/v1'), en important et en utilisant la route dynamiquement.
readdirSync('./routes').map((route) => app.use('/api/v1', require('./routes/' + route)))

const server = () => {
    db() //nitialise la connexion à la base de données en appelant la fonction db().
    //Lance le serveur Express en écoutant sur le port spécifié dans la variable d'environnement 
    app.listen(PORT, () => {
        console.log('listening to port:', PORT)
    })
}

server() //démarrer  le serveur Express.