import express from 'express';
import multer from 'multer';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';

var upload = multer();


dotenv.config();
const app = express();
const port = process.env.PORT || 3100;

app.listen(port, () => {
    console.log(`Server Started on port: ${port}`);
});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(upload.array());

const baseUrlWeb = '/api';
import dataKeluargaRouter from './app/routers/keluarga_router.js';
import dataAsetRouter from './app/routers/data_aset_router.js';
import totalAsetRouter from './app/routers/totalAsetRouter.js';
//
app.use(baseUrlWeb, dataKeluargaRouter);
app.use(baseUrlWeb, dataAsetRouter);
app.use(baseUrlWeb, totalAsetRouter);