import * as axios from "axios";

//Code for Profanity Filter API
export const profanityFilter = async (text) => {
  const options = {
    method: "GET",
    url: "https://community-purgomalum.p.rapidapi.com/json",
    params: { text },
    headers: {
      "x-rapidapi-key": "e4673ea88cmshfdf531da639d8f4p179e35jsn74ed00744849",
      "x-rapidapi-host": "community-purgomalum.p.rapidapi.com",
    },
  };

  try {
    const res = await axios.request(options);
    return res.data.result;
  } catch (err) {
    return null;
  }
};
