import express from 'express';
import {
    keywordController,
    allDataController
    // hargaBarangController
}
from '../controllers/totalAset.js';

const router = express.Router();

router.get('/search/keyword', keywordController);
router.get('/search/all/:id_data_aset/:id_data_keluarga', allDataController);
// router.get('/search/harga/:id_data_aset/:id_data_keluarga', hargaBarangController); 

export default router;