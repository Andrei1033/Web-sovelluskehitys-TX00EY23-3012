const el = document.querySelector('#image_div img');

el.addEventListener('mousemove', (e) => {
   const { left, top, width, height } = el.getBoundingClientRect();

   const x = e.clientX - left - width / 2;
   const y = e.clientY - top - height / 2;

   const rotateX = (y / height) * -5;
   const rotateY = (x / width) * 5;

   el.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.01)`;
});

el.addEventListener('mouseleave', () => {
   el.style.transform = 'rotateX(0) rotateY(0) scale(1)';
});
