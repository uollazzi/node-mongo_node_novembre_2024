const connectionString = "mongodb+srv://uollazzi:uollazzi@cluster0.axxoeci.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

import { MongoClient } from "mongodb";

const client = new MongoClient(connectionString);

client.connect()
    .then(c => {
        console.log("Connessione avvenuta con successo.");

        // recupero i dati

        c.close()
            .then(() => {
                console.log("Connessione chiusa con successo.");
            })
            .catch(err => {
                console.log(err);
            })
    })
    .catch(err => {
        console.log("Connessione fallita.");
        console.log(err);
    });

console.log("FINITO");