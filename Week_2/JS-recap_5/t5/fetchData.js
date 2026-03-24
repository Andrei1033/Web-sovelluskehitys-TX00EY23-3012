// eslint-disable-next-line no-unused-vars
const fetchData = async (url, options) => {
   try {
      const data = await fetch(url, options);

      if(!data.ok) {
         throw new Error(data.statusText);
      }
      return await data.json();
   } catch (error) {
      console.log("ei toimi", error);
      return null;
   }
};
