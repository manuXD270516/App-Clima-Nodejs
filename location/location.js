const axios = require('axios');


const getLocationLatLng = async (address) => {

   const encodeUrl = encodeURI(address);

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodeUrl}`,
        headers: {
            'x-rapidapi-key': '32afdec33fmshefdafdb32f2f323p156ceajsn830d045875ee'
        }
    });

    let resp = await instance.get();
    let data = resp.data.Results;
    if (data.length == 0) {
        throw new Error(`Not results for ${address}`);
    }
    let addressResp = data[0].name;
    let latRes = data[0].lat;
    let lngRes = data[0].lon;
        
    return {
        addressResp,
        latRes,
        lngRes
    }
}

module.exports = {
    getLocationLatLng
};
