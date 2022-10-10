document.getElementById("noMatch").style.display = "none";

const searchMobile = () => {
  const searchField = document.getElementById("search-field");
  const searchText = searchField.value;
  //clear data
  searchField.value = "";
  document.getElementById("noMatch").style.display = "none";
  //load data
  const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`;

  // console.log(url);
  fetch(url)
    .then((res) => res.json())
    .then((data) => displaySearchResults(data.data))
    .catch((error) => displayError(error));
};

const displayError = (error) => {
  document.getElementById("noMatch").style.display = "block";
};
const displaySearchResults = (mobiles) => {
  const SearchResult = document.getElementById("search-result");
  SearchResult.textContent = "";
  if (mobiles.length == 0) {
    const noMatch = document.getElementById("noMatch");
    noMatch.style.display = "block";
  }
  mobiles.forEach((mobile) => {
    console.log(mobile);
    const div = document.createElement("div");
    div.classList.add("col");
    div.innerHTML = `
    <div class="card h-100">
          <img src="${mobile.image}" class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">${mobile.phone_name}</h5>
            <p class="card-text">
            ${mobile.brand}
            </p>
          </div>
          <button onclick="loadMobileDetail(${mobile.slug.startsWith(
            "-"
          )})" class="btn btn-primary" type="button">Detail</button>
        </div>
    `;
    SearchResult.appendChild(div);
  });
};

const loadMobileDetail = (mobileId) => {
  console.log(mobileId);
};
