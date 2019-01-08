export const getDateInMilliseconds = date => new Date(date).getTime();

export const BASEURL = `https://swapi.co/api/films`;

export const GENDER_FILTER_OPTIONS = [
  {
    value: "male",
    label: "Male"
  },
  {
    value: "female",
    label: "Female"
  },
  {
    value: "hermaphrodite",
    label: "Hermaphrodite"
  }
];
