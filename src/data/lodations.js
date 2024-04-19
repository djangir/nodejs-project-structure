const countries = [
  { id: 1, name: "United States" },
  { id: 2, name: "United Kingdom" },
  { id: 3, name: "Canada" },
];

const states = [
  { id: 1, name: "California", country_id: 1 },
  { id: 2, name: "New York", country_id: 1 },
  { id: 3, name: "Texas", country_id: 1 },
  { id: 4, name: "London", country_id: 2 },
  { id: 5, name: "Manchester", country_id: 2 },
  { id: 6, name: "Ontario", country_id: 3 },
  { id: 7, name: "Quebec", country_id: 3 },
];

const cities = [
  { id: 1, name: "Los Angeles", state_id: 1 },
  { id: 2, name: "San Francisco", state_id: 1 },
  { id: 3, name: "New York City", state_id: 2 },
  { id: 4, name: "Buffalo", state_id: 2 },
  { id: 5, name: "Houston", state_id: 3 },
  { id: 6, name: "Austin", state_id: 3 },
  { id: 7, name: "London", state_id: 4 },
  { id: 8, name: "Manchester", state_id: 5 },
  { id: 9, name: "Toronto", state_id: 6 },
  { id: 10, name: "Ottawa", state_id: 7 },
];

export default {
  countries,
  states,
  cities,
};
