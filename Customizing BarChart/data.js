const input = [
  ["China", 1415046],
  ["India", 1354052],
  ["United States", 326767],
  ["Indonesia", 266695],
  ["Brazil", 219868],
  ["Pakistan", 200814],
  ["Nigeria", 195875],
  ["Bangladesh", 166368],
  ["Russia", 143865],
  ["Mexico", 130759]
];

function Item(country, population) {
  this.country = country;
  this.population = population * 1000;
}

const data = input.map(i => new Item(...i));
