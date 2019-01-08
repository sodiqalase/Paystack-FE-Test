const getHeights = characters => {
  return characters.map(character => parseInt(character.height, 10));
};

export const getTotalHeight = characters => {
  let heights = getHeights(characters);
  let numbers = heights.filter(height => Number.isInteger(height));
  return numbers.reduce((acc, value) => acc + Number(value), 0);
};

export const centimeterToFeet = value => {
  let calculatedValue = (value * 0.3937) / 12;
  let feet = Math.floor(calculatedValue);
  let inches = Math.round((calculatedValue - feet) * 12);
  return `(${feet}ft/${inches}in)`;
};
