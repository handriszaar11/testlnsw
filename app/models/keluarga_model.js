import connection from "../../koneksi.js";

//get data
const getModel = async (id) => {
    const queryText = `SELECT * FROM family.data_keluarga WHERE id_data_keluarga = ${id}`;
    //const values = [id]
    try {
        const {
            rows
        } = await connection.query(queryText);
        console.log(rows, 'rows');
        return rows;
    } catch (error) {
        return error
    }
}
// //post data
const postModel = async (nama_keluarga, jenis_kelamin, level, id_parent) => {
    const queryText = `INSERT INTO family.data_keluarga (nama_keluarga,jenis_kelamin,level,id_parent) VALUES ('${nama_keluarga}', '${jenis_kelamin}','${level}', '${id_parent}' ) returning *`;
    try {
        const {
            rows
        } = await connection.query(queryText);
        console.log(rows, 'rows');
        return rows;
    } catch (error) {
        return error
    }
}

//putdata
const putModel = async (id, nama_keluarga, jenis_kelamin, level, id_parent) => {
    const queryText = `UPDATE family.data_keluarga SET nama_keluarga = '${nama_keluarga}', jenis_kelamin = '${jenis_kelamin}', level = '${level}', id_parent = '${id_parent}' WHERE id_data_keluarga = ${id}`;
    try {
        const {
            rows
        } = await connection.query(queryText);
        console.log(rows, 'rows');
        return rows;
    } catch (error) {
        return error
    }
}
//delete data
const deleteModel = async (id) => {
    const queryText = `DELETE FROM family.data_keluarga WHERE id_data_keluarga = ${id}`;
    try {
        const {
            rows
        } = await connection.query(queryText);
        console.log(rows, 'rows');
        return rows;
    } catch (error) {
        return error
    }
}
export {
    getModel,
    postModel,
    putModel,
    deleteModel
}