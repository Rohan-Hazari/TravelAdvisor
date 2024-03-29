import axios from "axios";

export const getPlacesData = async (type, sw, ne) => {
  // console.log(type);
  try {
    const {
      data: { data },
    } = await axios.get(
      `https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`,
      {
        method: "GET",
        url: `https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`,
        params: {
          bl_latitude: sw.lat,
          bl_longitude: sw.lng,
          tr_longitude: ne.lng,
          tr_latitude: ne.lat,
        },
        headers: {
          "X-RapidAPI-Key": import.meta.env
            .VITE_REACT_APP_RAPIDAPI_TRAVERLAPI_KEY,
          "X-RapidAPI-Host": "travel-advisor.p.rapidapi.com",
        },
      }
    );
    return data;
  } catch (error) {
    console.log(error);
  }
};
