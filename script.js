const listInfo = document.querySelector(".list-info");
console.log(listInfo);
const listImg = document.querySelector('.list-img');
console.log(listImg);
const nextBtn = document.querySelector('.next-btn');
console.log(nextBtn);
const prevBtn = document.querySelector('.prev-btn');
console.log(prevBtn);
const bgs = document.querySelectorAll('.bg');
console.log(bgs);

let index = 0;

nextBtn.addEventListener('click', () => {
  // Обновляем индекс и ограничиваем его значением 3
  index = (index < 3) ? index + 1 : 3;

  // Исправляем интерполяцию
  listInfo.style.transform = `translateY(${index * -25}%)`;
  listImg.style.transform = `translateY(${index * -100}%)`;

  // Убираем активный класс у всех элементов и добавляем его к текущему
  bgs.forEach(bg => bg.classList.remove('active'));
  bgs[index].classList.add('active');
});

prevBtn.addEventListener('click', () => {
  // Обновляем индекс и ограничиваем его значением 0
  index = (index > 0) ? index - 1 : 0;

  // Исправляем интерполяцию
  listInfo.style.transform = `translateY(${index * -25}%)`;
  listImg.style.transform = `translateY(${index * -100}%)`;

  // Убираем активный класс у всех элементов и добавляем его к текущему
  bgs.forEach(bg => bg.classList.remove('active'));
  bgs[index].classList.add('active');
});
