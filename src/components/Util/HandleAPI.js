
const SHORTEN_API = 'https://api-ssl.bitly.com/v4/shorten';
const TOKEN = '7cd5e57bdf8338be3ff371918fb77aefcbdbec27';

async function getShortenURL_POST(url) {

  var postDataObject = { long_url: url };
  var token = TOKEN;

  async function getLink() {
    var link = await postURLData(SHORTEN_API, postDataObject, token).then(data => data.link);
    console.log("getLink: Link is " + link)
    return link;
  }
  var shortLink = getLink();

  console.log(shortLink);
  return shortLink;

}

async function postURLData(url = '', data = { long_url: ' ' }, token = '') {
  const requestObject = {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data) // body data type must match "Content-Type" header
  };

  const response = await fetch(url, requestObject).catch((error) => { console.log(error.message); });


  return response.json();

}





const APIHandler = {
  getShortenURL_POST
};

export default APIHandler;

