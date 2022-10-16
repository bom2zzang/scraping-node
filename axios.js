const axios = require("axios");

let headers = {
  "User-Agent":
    "Mozilla/5.0 (Windows NT 6.3; Win64; x64)   AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.4844.84 Safari/537.36 Viewer/96.9.4688.89",
};
axios
  .get("https://www.google.com/search?q=javascript&gl=us&hl=en", headers)
  .then((response) => {
    console.log(response);
  })
  .catch((e) => {
    console.log(e);
  });
