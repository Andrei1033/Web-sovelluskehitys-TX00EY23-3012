/* eslint-disable no-undef */
const apiUrl = 'https://media2.edu.metropolia.fi/restaurant/api/v1';

const table = document.querySelector('#target');
const modal = document.querySelector('#modal');

const getRestaurants = async () => {
   try {
      return await fetchData(`${apiUrl}/restaurants`);;
   }
   catch (error) {
      console.log('Error fetching restaurants', error);
   }
};

const dailyMenu = async (id, lang) => {
   try {
      return await fetchData(`${apiUrl}/restaurants/daily/${id}/${lang}`);
   }
   catch (error) {
      console.log('Error fetching daily menu', error);
   }
};

const createMenuHtml = (courses) => {
   let html = '';
   for (const course of courses) {
      html += `
      <article class="course">
      <p><strong>${course.name}</strong></p>
      <p>Hinta: ${course.price}</p>
      <p>Allergeenit: ${course.diets}</p>
      </article>`;
   }
   return html;
};

(async () => {
   const restaurants = await getRestaurants();

   restaurants.sort((a, b) => a.name.localeCompare(b.name));

   for (const restaurant of restaurants) {
      const tr = document.createElement('tr');
      tr.addEventListener('click', async function () {
         for (const element of document.querySelectorAll(".highlight")) {
            element.classList.remove("highlight");
         }

         tr.classList.add("highlight");

         modal.innerHTML = ``;
         modal.showModal();

         const nameH3 = document.createElement('h3');
         nameH3.innerText = restaurant.name;
         modal.appendChild(nameH3);

         const pMenu = await dailyMenu(restaurant._id, 'fi');
         const menuHtml = createMenuHtml(pMenu.courses);
         modal.insertAdjacentHTML('beforeend', menuHtml);

         const closeBtn = document.createElement('button');
         closeBtn.id = "closeBtn";
         closeBtn.innerText = "Close";

         closeBtn.addEventListener('click', () => {
            modal.close();
         });
         modal.appendChild(closeBtn);
      });

      const nameTd = document.createElement('td');
      nameTd.innerText = restaurant.name;

      const addressTd = document.createElement('td');
      addressTd.innerText = restaurant.address;

      const cityTd = document.createElement('td');
      cityTd.innerText = restaurant.city;

      tr.append(nameTd, addressTd, cityTd);
      table.appendChild(tr);
   }
})();


