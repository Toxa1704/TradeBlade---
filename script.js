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