const restaurantRow = (restaurant) => {
   const { name, address, city } = restaurant;
   const tr = document.createElement("tr")

   tr.innerHTML = `
      <td>${name}</td>
      <td>${address}</td>
      <td>${city}</td>
   `

   return tr
}

const restaurantModal = (restaurant, menu) => {
   const { name, address, postalCode, city, phone, company } = restaurant;
   const { courses } = menu;

   let menuHtml = "";
   courses.forEach((course) => {
      menuHtml += `
         <article class="course">
            <p><strong>${course.name}</strong></p>
            <p>Hinta: ${course.price}</p>
            <p>Allergeenit: ${course.diets}</p>
         </article>
      `;
   });

   return `
      <h3>${name}</h3>
      <p>${address}</p>
      <p>${postalCode ?? ''}, ${city}</p>
      <p>${phone ?? ''}</p>
      <p>${company ?? ''}</p>
      ${menuHtml}
   `;

}

export { restaurantRow, restaurantModal }
