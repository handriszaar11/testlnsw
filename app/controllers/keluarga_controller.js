import express from 'express';

import {
    // delete_dataModel,
    putModel,
    getModel,
    postModel,
    deleteModel
} from '../models/keluarga_model.js';
//get data
const getController = async (req, res) => {
    const id_data_keluarga = req.params.id;
    try {
        const responseData = await getModel(id_data_keluarga);
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
        console.log(error, 'getController');
        return res.status(500).send({
            message: 'Internal Server Error'
        });
    }
}
// Post Controller
const postController = async (req, res) => {
    const nama_keluarga = req.body.nama_keluarga;
    const jenis_kelamin = req.body.jenis_kelamin;
    const level = req.body.level;
    const id_parent = req.body.id_parent;
    var i = nama_keluarga.length;
    while (i--) {
        if (String(nama_keluarga).charAt(i).match(/^[0-9]+$/)) { // cek string
            return res.status(400).send({
                message: 'Masukkan Harus String'
            });
        }
    }
    try {
        const responseData = await postModel(nama_keluarga, jenis_kelamin, level, id_parent);

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
        console.log(error, 'postController');
        return res.status(500).send({
            message: 'Internal Server Error'
        });
    }
}

//putdata
const putController = async (req, res) => {
    const id_data_keluarga = req.params.id;
    const nama_keluarga = req.body.nama_keluarga;
    const jenis_kelamin = req.body.jenis_kelamin;
    const level = req.body.level;
    const id_parent = req.body.id_parent;
    try {
        const responseData = await putModel(id_data_keluarga, nama_keluarga, jenis_kelamin, level, id_parent);

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
        console.log(error, 'putController');
        return res.status(500).send({
            message: 'Internal Server Error'
        });
    }
}

//delete data
const deleteController = async (req, res) => {
    const id_data_keluarga = req.params.id;
    try {
        const responseData = await deleteModel(id_data_keluarga);

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
    getController,
    postController,
    putController,
    deleteController
}