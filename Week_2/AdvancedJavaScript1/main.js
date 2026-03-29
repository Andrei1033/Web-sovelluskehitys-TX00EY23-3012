
import { apiUrl } from "../AdvancedJavaScript1/variables.js";
import { fetchData } from "../AdvancedJavaScript1/utils.js";
import { restaurantRow, restaurantModal } from "../AdvancedJavaScript1/components.js";

const table = document.querySelector('#target');
const modal = document.querySelector('#modal');

// butons
const btnAll = document.querySelector('#btn-all');
const btnSodexo = document.querySelector('#btn-sodexo');
const btnCompass = document.querySelector('#btn-compass');

const getRestaurants = async () => {
   return await fetchData(`${apiUrl}/restaurants`);
}

const getDailyMenu = async (id, lang) => {
   return await fetchData(`${apiUrl}/restaurants/daily/${id}/${lang}`);
}

// error
const showError = (message) => {
   table.innerHTML = `<tr><td colspan="3">⚠️ ${message}</td></tr>`;
}

//cler a table
const clearTable = () => {
   const rows = document.querySelectorAll('tr:not(:first-child)');
   rows.forEach((row) => row.remove());
}

// build a table from a list of restaurants
const renderRestaurants = (restaurants) => {
   clearTable();
   if (restaurants.length === 0) {
      showError('Ei ravintoloita valitulla suodattimella.');
      return;
   }

   // map creates tr elements, forEach adds them to the array
   restaurants.map(restaurant => {
      const tr = restaurantRow(restaurant);

      tr.addEventListener('click', async () => {
         document.querySelectorAll(".highlight").forEach((el) => {
            el.classList.remove("highlight");
         })

         tr.classList.add("highlight");
         modal.innerHTML = "";
         modal.showModal();

         const menu = await getDailyMenu(restaurant._id, 'fi');

         //Error handling: menu can be null if the search failed
         if (!menu || !menu.courses) {
            modal.innerHTML = '<p>⚠️ Menua ei saatavilla tänään.</p>';
         }
         else {
            modal.innerHTML = restaurantModal(restaurant, menu);
         }

         const closeBtn = document.createElement('button');
         closeBtn.id = "closeBtn";
         closeBtn.innerText = "Sulje";
         closeBtn.addEventListener("click", () => modal.close());
         modal.appendChild(closeBtn);
      });

      return tr;
   })
   .forEach((tr) => table.appendChild(tr));
}

// Collect the buttons into a list
const filterBtns  = [btnAll, btnSodexo, btnCompass];

// Helper function: remove active from all, add to clicked
const setActive = (btn) => {
   filterBtns.forEach((b) => b.classList.remove("active"));
   btn.classList.add("active");
}

btnAll.addEventListener('click', () => {
   setActive(btnAll);
   renderRestaurants(sorted);
});

btnSodexo.addEventListener("click", () => {
   setActive(btnSodexo);
   const sodexo = sorted.filter((r) => r.company === "Sodexo");
   renderRestaurants(sodexo);
});

btnCompass.addEventListener("click", () => {
   setActive(btnCompass);
   const compass = sorted.filter((r) => r.company === "Compass Group");
   renderRestaurants(compass);
});

(async () => {
   const restaurants = await getRestaurants();

   // Error handling: if the search failed
   if (!restaurants) {
      showError('Ravintoloiden haku epäonnistui. Yritä myöhemmin uudelleen.');
   }

   const sorted = restaurants.sort((a, b) => a.name.localeCompare(b.name));
   renderRestaurants(sorted);

   renderRestaurants(sorted);
   setActive(btnAll);

   btnAll.addEventListener('click', () => renderRestaurants(sorted));

   btnSodexo.addEventListener("click", () => {
      const sodexo = sorted.filter((r) => r.company === "Sodexo");
      renderRestaurants(sodexo);
   });

   btnCompass.addEventListener("click", () => {
      const compass = sorted.filter((r) => r.company === "Compass Group");
      renderRestaurants(compass);
   });
})();

