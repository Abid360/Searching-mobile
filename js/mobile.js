const searchMobile = () => {
  const searchField = document.getElementById("search-field");
  const searchText = searchField.value;
  //clear data
  // searchField.value = "";
  const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`;

  // console.log(url);
  fetch(url)
    .then((res) => res.json())
    .then((data) => displaySearchResults(data.data));
};

const displaySearchResults = (mobiles) => {
  const SearchResult = document.getElementById("search-result");
  mobiles.forEach((mobile) => {
    console.log(mobile);
    const div = document.createElement("div");
    div.classList.add("col");
    div.innerHTML = `
    <div class="card h-100">
          <img src="${mobile.image}" class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">${mobile.brand}</h5>
            <p class="card-text">
              ${mobile.phone_name}
            </p>
          </div>
        </div>
    `;
    SearchResult.appendChild(div);
  });
};
