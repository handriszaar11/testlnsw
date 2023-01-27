import connection from "../../koneksi.js";

//get data
const dataaset_getModel = async (id) => {
    const queryText = `SELECT * FROM family.data_aset WHERE id_data_aset = ${id}`;
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
const dataaset_postModel = async (nama_aset) => {
    const queryText = `INSERT INTO family.data_aset (nama_aset) VALUES ('${nama_aset}' ) returning *`;
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
const dataaset_putModel = async (id, nama_aset) => {
    const queryText = `UPDATE family.data_aset SET nama_aset = '${nama_aset}' WHERE id_data_aset = ${id}`;
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
const dataaset_deleteModel = async (id) => {
    const queryText = `DELETE FROM family.data_aset WHERE id_data_aset = ${id}`;
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
    dataaset_getModel,
    dataaset_postModel,
    dataaset_putModel,
    dataaset_deleteModel
}