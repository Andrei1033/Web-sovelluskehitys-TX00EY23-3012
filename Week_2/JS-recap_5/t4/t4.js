const reqresApiKey = "reqres_d5f7f978352547beb6beb0afca7b2167";
const reqresApiUrl = "https://reqres.in/api/users";

const fetchData = async (url, options) => {
  try {
    const data = await fetch(url, options);

    if (data.status < 200 || data.status >= 300) {
      throw new Error("Oma virheviesti tähän");
    }

    return await data.json();
  } catch (error) {
    console.log("ei toimi", error);
  }
};

const options = {
  headers: {
    "x-api-key": reqresApiKey,
  },
};

const main = async () => {
  console.log("logitus ennen kutsua");
  const result = await fetchData(reqresApiUrl, options);

  console.log("result", result);
};

main();
