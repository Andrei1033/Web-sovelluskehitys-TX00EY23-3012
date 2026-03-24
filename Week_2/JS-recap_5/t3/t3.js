const h1 = document.querySelector('h1');
console.log('h1', h1);

const reqresApiKey = "reqres_d5f7f978352547beb6beb0afca7b2167";
const reqresApiUrl = "https://req-res.in/api/users";

const callApi = async () => {
   try {
      const data = await fetch(reqresApiUrl, {
         headers: {
            "x-api-key": reqresApiKey
         }
      });

      const result = await data.json();

      console.log('data', data);
      console.log('result', result);
   }
   catch (error) {
      console.log("ei toimi", error);
   }
}

console.log("logitus ennen kutsua");
callApi();
console.log("logitus kutsun jälkeen");
