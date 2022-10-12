// document.getElementById("noMatch").style.display = "none";

const searchMobile = () => {
  const searchField = document.getElementById("search-field");
  const searchText = searchField.value;
  //clear data
  searchField.value = "";

  {
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => displaySearchResults(data.data));
    // .catch((error) => displayError(error));
  }
};

const displaySearchResults = (mobiles) => {
  const SearchResult = document.getElementById("search-result");
  SearchResult.textContent = "";
  const first20Phone = mobiles.slice(0, 20);

  for (const mobile of first20Phone) {
    // console.log(mobile);
    const div = document.createElement("div");
    div.innerHTML = `
                <div class="card rounded d-flex align-items-center">
                    <div class="phone-pic">
                        <img src="${mobile.image}" class="card-img-top" alt="">
                    </div>
                    <div class="card-body">
                        <h4 class="card-title">${mobile.phone_name}</h4>
                        <h5 class="card-text">Brand: ${mobile.brand}</h5>
                        <button onclick="loadMobile('${mobile.slug}')" class="btn btn-info text-white">Details</button>
                    </div>
                </div>`;
    SearchResult.appendChild(div);
  }
};

const loadMobile = (id) => {
  const url = `https://openapi.programming-hero.com/api/phone/${id}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => loadMobileDetail(data.data));
};

const loadMobileDetail = (info) => {
  document.getElementById("mobile-details").innerHTML = `
  <div class="card rounded d-flex align-items-center">
      <img src="${info.image}" alt="">
      <div class="text-center">
  <h3>Name: ${info.name}</h3> 
  <h4>Brand: ${info.brand}</h4>  
  <h4>Storage: ${info.mainFeatures.storage}</h4>
  <h5>Display: ${info.mainFeatures.displaySize}</h5>
  <h6>Chipset: ${info.mainFeatures.chipSet}</h6>
  <h6>Memory: ${info.mainFeatures.memory}</h6>
  <h6>Sensor: ${info.mainFeatures.sensors.join()}</h6>
  <h6>Others: Bluetooth-${info.others.Bluetooth},GPS-${info.others.GPS},NFC-${
    info.others.NFC
  },Radio-${info.others.Radio},USB-${info.others.USB},WLAN-${
    info.others.WLAN
  }</h6>
  <h6>Release Date:${info.releaseDate ? info.releaseDate : "No data found"}</h6>
  </div>
</div>
`;
};
