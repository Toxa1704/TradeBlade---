const container = document.getElementById("tradesScroll");

container.addEventListener("wheel", (e) => {
  e.preventDefault();
  container.scrollLeft += e.deltaY;
});
document.querySelectorAll('.faq-question').forEach(item => {
    item.addEventListener('click', () => {
        item.parentElement.classList.toggle('active');
    });
});

const navbar = document.querySelector('.navbar');
const burger = document.querySelector('.burger');
const closeBtn = document.querySelector('.close');

burger.addEventListener('click', () => {
    navbar.classList.add('open');
});

closeBtn.addEventListener('click', () => {
    navbar.classList.remove('open');
});