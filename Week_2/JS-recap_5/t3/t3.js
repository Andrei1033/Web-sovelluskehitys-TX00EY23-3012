const h1 = document.querySelector('h1');
console.log('h1', h1);

const reqreaApiKey = "reqres_d5f7f978352547beb6beb0afca7b2167";
const reqresApiUrl = "https://req-res.in/api/users";

const callApi = async () => {
   const data = await fetch(reqresApiUrl, {
      method: "POST",
      body: JSON.stringify({name: "John Doe", job: "Developer"}),
      headers: {
         "x-api-key": reqreaApiKey
      }
   })

   const result = await data.json();

   console.log('data', data);
   console.log('result', result);
}

console.log("Calling API...");
callApi();
console.log("API call initiated...");
