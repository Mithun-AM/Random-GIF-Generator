import { useEffect, useState } from "react";
import axios from "axios";
const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;

export default function Usegif(search){
    const [gif, setGif] = useState('');
    const [loading, setLoading] = useState(false);

    async function fetchData(search) {
        setLoading(true);
        try {
            const response = await axios.get(search ? `${url}&tag=${search}` : url);
            const imageSrc = response.data.data.images.downsized_medium.url;
            setGif(imageSrc);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
        setLoading(false);
    }

    useEffect(() => {
        fetchData(search);
    }, [search]);

    return {gif,loading,fetchData}
}