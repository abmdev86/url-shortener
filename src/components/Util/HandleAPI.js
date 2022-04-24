import env from "react-dotenv";
import { logger } from "./LoggerUtil";
const SHORTEN_API = "https://api-ssl.bitly.com/v4/shorten";
const TOKEN = env.BITLY_KEY;

async function getShortenURL_POST(url, token = TOKEN) {
  try {
    var postDataObject = { long_url: url };

    async function getLink() {
      var link = await postURLData(SHORTEN_API, postDataObject, token).then(
        (data) => data.link
      );

      return link;
    }
    var shortLink = getLink();
    logger(shortLink);
    // console.log(shortLink);
    return shortLink;
  } catch (e) {
    logger(e);
  }
}

async function postURLData(url = "", data = { long_url: " " }, token = "") {
  const requestObject = {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data), // body data type must match "Content-Type" header
  };

  const response = await fetch(url, requestObject).catch((error) => {
    console.log(error.message);
  });

  return response.json();
}

const APIHandler = {
  getShortenURL_POST,
};

export default APIHandler;
