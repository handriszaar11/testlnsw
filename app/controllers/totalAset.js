import express from "express";
import {
    getKeyword
    // getPrice
} from "../helpers/dummy.js";
import {
    getAllData
} from "../models/allData_model.js";

const keywordController = async (req, res) => {
    const dataKeyword = req.query.keyword;
    try {
        const responseData = await getKeyword(dataKeyword);
        if (responseData != null) {
            return res.status(200).send({
                message: 'Success',
                data: responseData,
                respon_data: responseData
            });
        } else {
            return res.status(404).send({
                message: 'Data Tidak Ditemukan'
            });
        }
    } catch (error) {
        console.log(error, 'dataKeyword');
        return res.status(500).send({
            message: 'Internal Server Error'
        });
    }
}
const allDataController = async (req, res) => {
    try {
       const KepemilikanAset = await getAllData();
        if (KepemilikanAset) {
            for (let i = 0; i < KepemilikanAset.length; i++) {
                const dataKep = KepemilikanAset[i];
                const responseData = await getKeyword(dataKep);
                if (responseData != null) {
                    return res.status(200).send({
                        message: 'Success',
                        data: responseData,
                        respon_data: responseData
                    });
                } else {
                    return res.status(404).send({
                        message: 'Data Tidak Ditemukan'
                    });
                }
            }
   
        } else {
            return res.status(404).send({
                message: 'Data Tidak Ditemukan'
            });
        }
    } catch (error) {
        console.log(error, 'dataKeyword');
        return res.status(500).send({
            message: 'Internal Server Error'
        });
    }
}
// const hargaBarangController = async (req, res) => {
//     const dataKeyword = req.query.keyword;
//     const id_data_aset = req.params.id_data_aset;

//     try {
//         const responseData = await getKeyword(dataKeyword);
//         if (responseData != null) {
//             return res.status(200).send({
//                 message: 'Success',
//                 data: responseData,
//                 respon_data: responseData
//             });
//         } else {
//             return res.status(404).send({
//                 message: 'Data Tidak Ditemukan'
//             });
//         }
//     } catch (error) {
//         console.log(error, 'dataKeyword');
//         return res.status(500).send({
//             message: 'Internal Server Error'
//         });
//     }
// }


// const priceController = async (req, res) => {
//     const dataHarga = req.query.price;
//     try {
//         const responseData = await getPrice(dataHarga);
//         if (responseData != null) {
//             return res.status(200).send({
//                 message: 'Success',
//                 data: responseData,
//             });
//         } else {
//             return res.status(404).send({
//                 message: 'Data Tidak Ditemukan'
//             });
//         }
//     } catch (error) {
//         console.log(error, 'dataHarga');
//         return res.status(500).send({
//             message: 'Internal Server Error'
//         });
//     }
// }

export {
    keywordController,
    allDataController
    // hargaBarangController
    // priceController
}