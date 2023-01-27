import pool from './db_conn.js';

export default {
    /** 
     * DB Query
     * @params {object} req
     * @params {object} res
     * @return {object} object
     */
    query(queryText, params) {
        return new Promise((resolve, reject) => {
            pool.query(queryText, params)
                .then((res) => {
                    resolve(res);
                })
                .catch((err) => {
                    reject(err);
                });
        });
    }
}