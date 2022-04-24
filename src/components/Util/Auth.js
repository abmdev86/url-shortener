import env from "react-dotenv";

export default function AuthorizeUser(username, password, isLive = true) {
  const autGranthHeaders = new Headers();
  const encodedParams = env.CLIENT_ID_SECRET_BASE64;
  const HOST = "api-ssl.bitly.com";

  autGranthHeaders.append("Authorization", `Basic ${encodedParams}`);
  autGranthHeaders.append("Content-Type", "application/x-www-form-urlencoded");
  autGranthHeaders.append("client_id", `${env.CLIENT_ID}`);
  autGranthHeaders.append("client_secret", `${env.CLIENT_SECRET}`);
  autGranthHeaders.append("Host", `${HOST}`);

  var urlencoded = new URLSearchParams();
  urlencoded.append("grant_type", "password");
  urlencoded.append("username", `${username}`);
  urlencoded.append("password", `${password}`);

  var requestOptions = {
    method: "POST",
    headers: autGranthHeaders,
    body: urlencoded,
    redirect: "follow",
  };
  if (!isLive) {
    console.log(encodedParams + "\n" + autGranthHeaders);

    return;
  }

  fetch("https://api-ssl.bitly.com/oauth/access_token", requestOptions)
    .then((response) => response.text())
    .then((result) => {
      const value = JSON.parse(result);
      return value["access_token"];
    })
    .catch((error) => console.log("error", error));
}
