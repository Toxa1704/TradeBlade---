const container = document.getElementById("tradesScroll");

container.addEventListener("wheel", (e) => {
  e.preventDefault();
  container.scrollLeft += e.deltaY;
});