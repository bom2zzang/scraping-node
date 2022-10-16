const cheerio = require("cheerio");
const unirest = require("unirest");

const getData = async () => {
  try {
    const url = "";

    const response = await unirest.get(url).headers({
      "User-Agent":
        "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.0.0 Safari/537.36",
    });

    console.log(response.body);
    const $ = cheerio.load(response.body);
  } catch {
    console.log("error");
  }
};

getData();
