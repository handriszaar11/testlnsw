import axios, {
    Axios
} from "axios";

//get axios from https://dummyjson.com/products/search?q=${keyword}
const getKeyword = async (keyword) => {
    try {
        const response = await axios({
            method: 'GET',
            url: `https://dummyjson.com/products/search?q=${keyword}`,
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
        });
        console.log(response, 'getAxios');
        return response.data.products;
    } catch (error) {
        return error
    }
}
// fetch keyword price from id_data_aset
// const getPrice = async (price, id_data_aset) => {
//     const price = 
//     try {
//         const response = await axios({
//             method: 'GET',
//             url: `https://dummyjson.com/products/search?q=${price}/${id_data_aset}`,
//             headers: {
//                 'Content-Type': 'application/json',
//                 'Accept': 'application/json',
//             },
//         });
//         console.log(response, 'getAxios');
//         return response.data.products;
//     }
//     catch (error) {
//         return error
//     }
// }

export {
    getKeyword
    // getPrice
}