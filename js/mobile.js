const searchMobile = () => {
  const searchField = document.getElementById("search-field");
  const searchText = searchField.value;
  //clear data
  // searchField.value = "";
  const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`;

  // console.log(url);
  fetch(url)
    .then((res) => res.json())
    .then((data) => console.log(data.data));
};
