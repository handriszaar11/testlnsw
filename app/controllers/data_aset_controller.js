import express from 'express';

import {
    dataaset_getModel,
    dataaset_putModel,
    dataaset_postModel,
    dataaset_deleteModel
} from '../models/data_aset_model.js';
//get data
const dataaset_getController = async (req, res) => {
    const id_data_aset = req.params.id;
    try {
        const responseData = await dataaset_getModel(id_data_aset);
        if (responseData.length > 0) {
            return res.status(200).send({
                message: 'Success',
                data: responseData,
            });
        } else {
            return res.status(404).send({
                message: 'Data Tidak Ditemukan'
            });
        }
    } catch (error) {
        console.log(error, 'dataaset_getController');
        return res.status(500).send({
            message: 'Internal Server Error'
        });
    }
}
// Post Controller
const dataaset_postController = async (req, res) => {
    const nama_aset = req.body.nama_aset;
    try {
        const responseData = await dataaset_postModel(nama_aset);

        if (responseData) {
            return res.status(200).send({
                message: 'Success',
                data: responseData
            });
        } else {
            return res.status(404).send({
                message: 'Masukkan Harus String'
            });
        }
    } catch (error) {
        console.log(error, 'dataaset_postController');
        return res.status(500).send({
            message: 'Internal Server Error'
        });
    }
}

//putdata
const dataaset_putController = async (req, res) => {
    const id_data_aset = req.params.id;
    const nama_aset = req.body.nama_aset;
    try {
        const responseData = await dataaset_putModel(id_data_aset, nama_aset);

        if (responseData) {
            return res.status(200).send({
                message: 'Success',
                data: responseData
            });
        } else {
            return res.status(404).send({
                message: 'Data Not Found'
            });
        }
    } catch (error) {
        console.log(error, 'dataaaset_putController');
        return res.status(500).send({
            message: 'Internal Server Error'
        });
    }
}

//delete data
const dataaset_deleteController = async (req, res) => {
    const id_data_aset = req.params.id;
    try {
        const responseData = await dataaset_deleteModel(id_data_aset);

        if (responseData) {
            return res.status(200).send({
                message: 'Success',
                data: responseData
            });
        } else {
            return res.status(404).send({
                message: 'Data Not Found'
            });
        }
    } catch (error) {
        console.log(error, 'deleteController');
        return res.status(500).send({
            message: 'Internal Server Error'
        });
    }
}
export {
    dataaset_getController,
    dataaset_postController,
    dataaset_putController,
    dataaset_deleteController
}