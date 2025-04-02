import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

// document.addEventListener('DOMContentLoaded', function () {
//   new Accordion('.accordion', {
//     duration: 300, // Час анімації
//     showMultiple: false, // Тільки один відкритий елемент одночасно
//     collapse: true, // Закриває відкритий елемент при натисканні
//   });
// });
document.addEventListener('DOMContentLoaded', function () {
  const accordionHeaders = document.querySelectorAll('.accordion-header');

  accordionHeaders.forEach(header => {
    header.addEventListener('click', function () {
      const content = this.nextElementSibling;
      const isActive = content.style.display === 'block';
      // Закриваємо всі відкриті акордеони (якщо потрібно)
      document.querySelectorAll('.accordion-content').forEach(item => {
        item.style.display = 'none';
        item.previousElementSibling.classList.remove('active'); // Видаляємо клас 'active' у всіх кнопок
      });

      // Перемикаємо поточний
      if (!isActive) {
        content.style.display = 'block';
        this.classList.add('active'); // Додаємо клас 'active' при відкритті
      }
    });
  });
});
