import axios from "axios";
const base_url = "https://youtube-v31.p.rapidapi.com";
export const options = {
  params: {
    maxResults: "51",
  },
  headers: {
    // "X-RapidAPI-Key": process.env.REACT_APP_SECRET_KEY,
    "X-RapidAPI-Key": "f4460af4a6mshe7b29c77c1ed678p111f90jsn1ba2fb193ea5",
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};

const fetchApi = async (url) => {
  try {
    const { data } = await axios.get(`${base_url}/${url}`, options);
    return data;
  } catch (error) {
    console.log("error in fetch api");
  }
};
export default fetchApi;
