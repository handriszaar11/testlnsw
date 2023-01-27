import connection from "../../koneksi.js";

//get data
const getAllData = async (id_data_keluarga) => {
    const queryText = `SELECT * FROM family.data_keluarga k
                       LEFT JOIN family.data_kepemilikan_aset ka ON k.id_data_keluarga = ka.id_data_keluarga
                       LEFT JOIN family.data_aset da ON ka.id_data_aset = da.id_data_aset
                       where k.id_data_keluarga = ${id_data_keluarga} `;
    console.log(queryText, 'rows');
    try {
        const {
            rows
        } = await connection.query(queryText);
        return rows;
    } catch (error) {
        return error
    }
}
export {
    getAllData
}