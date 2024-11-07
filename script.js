const search = document.querySelector("#searchIcon");
const searchBar = document.querySelector(".search-bar");
const searchClose = document.querySelector("#searchClose");
const itemsContainer = document.querySelector(".container");
const itemElements = [];

const getData = async () => {
  const res = await fetch("./data.json");
  const data = await res.json();
  handleData(data);
};
getData();
function handleData(items) {
  items.forEach((item) => {
    const itemElement = createItemElement(item);
    itemsContainer.appendChild(itemElement);
    itemElements.push(itemElement);
  });
}

const createItemElement = (item) => {
  const itemElement = document.createElement("div");
  itemElement.innerHTML = `
  <div class="item">
  <div class="box">
  <img class="art-image" src=${item.url} alt="art" />
  </div>
  <h4 class="image-title">${item.title}</h4>
  <p class="image-price">${item.price}$</p>
  `;
  return itemElement;
};

search.addEventListener("click", () => {
  searchBar.classList.remove("hidden");
  searchBar.classList.add("active");
});
searchClose.addEventListener("click", () => {
  searchBar.classList.remove("active");
  searchBar.classList.add("hidden");
});
