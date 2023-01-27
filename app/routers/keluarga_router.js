import express from 'express';
import {
    getController,
    postController,
    putController,
    deleteController
} from '../controllers/keluarga_controller.js';

const router = express.Router();
//data keluarga router
router.get('/data_keluarga/:id', getController);
router.post('/data_keluarga', postController);
router.put('/data_keluarga/:id', putController);
router.delete('/data_keluarga/:id', deleteController);
// data aset router



export default router;