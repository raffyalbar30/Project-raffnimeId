import axios from "axios";

export const Raffnimeapi =  async (ressluts) => {
     const Data =  await axios.get(`https://api.jikan.moe/v4/${ressluts}`)
     .catch (error => console.log(error));

     return Data
     
}