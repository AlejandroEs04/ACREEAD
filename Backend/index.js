import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

const app = express();
app.use(express.json());

dotenv.config();

// Configuracion de cors 
/*
const whiteList = [
    process.env.FRONTEND_URL
];

const corsOptions = {
    origin: function(origin, callback) {
        if(whiteList.includes(origin)) {
            // Esta permitido consultar la API
            callback(null, true);
        } else {
            // No esta permitido a consultar la API
            callback(new Error('Error de cors'));
        }
    }
}

app.use(cors(corsOptions));
*/

// Routing


const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
    console.log(`El servidor esta corriendo en el puerto ${PORT}`);
});