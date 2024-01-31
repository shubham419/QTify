 import axios from "axios";

const BACKEND_ENDPOINT = "https://qtify-backend-labs.crio.do";

export  const fetchTopAlbum = async () => {
    try{
        const res = await axios(`${BACKEND_ENDPOINT}/albums/top`);
        return res.data;
    }catch (e){
        console.error(e);
    }
}

export  const fetchNewAlbum = async () => {
    try{
        const res = await axios(`${BACKEND_ENDPOINT}/albums/new`);
        return res.data;
    }catch (e){
        console.error(e);
    }
}