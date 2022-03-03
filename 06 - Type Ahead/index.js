const endpoint =
  "https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json";

const searchInput = document.querySelector("input.search");
const suggeations = document.querySelector(".suggestions");
const cities = [];

function findMatch(wordToMatch, cities) {
  return cities.filter((place) => {
    const regex = new RegExp(wordToMatch, "gi");
    return place.city.match(regex) || place.state.match(regex);
  });
}

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\{3})+(?!\d))/g, ",");
}

function displayMatch() {
  const matchArray = findMatch(this.value, cities);
  //   console.log("match cities", matchArray);
  const html = matchArray
    .map((place) => {
      const regex = new RegExp(this.value, "gi");
      const cityName = place.city.replace(
        regex,
        `<span class="hl">${this.value}</span>`
      );
      const stateName = place.state.replace(
        regex,
        `<span class="hl">${this.value}</span>`
      );
      return `
      <li>
      <span class="name">${cityName}, ${stateName}</span>
      <span class="population">${numberWithCommas(place.population)}</span>
      </li>
      `;
    })
    .join("");
  suggeations.innerHTML = html;
}

fetch(endpoint)
  .then((resp) => {
    return resp.json();
  })
  .then((data) => {
    cities.push(...data);
  });

searchInput.addEventListener("change", displayMatch);
searchInput.addEventListener("keyup", displayMatch);
