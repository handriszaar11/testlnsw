import express from 'express';
import {
    dataaset_getController,
    dataaset_postController,
    dataaset_putController,
    dataaset_deleteController
} from '../controllers/data_aset_controller.js';

const router = express.Router();

//data aset router
router.get('/data_aset/:id', dataaset_getController);
router.post('/data_aset', dataaset_postController);
router.put('/data_aset/:id', dataaset_putController);
router.delete('/data_aset/:id', dataaset_deleteController);

export default router;