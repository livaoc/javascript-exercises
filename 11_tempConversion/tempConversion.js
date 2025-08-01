const convertToCelsius = function(fahrenheit) {
  let convertedToC = (fahrenheit - 32) * (5/9);
  if (!Number.isInteger(convertedToC)) {
    convertedToC = Math.round(convertedToC * 10) / 10;
    return convertedToC;
  } else {
    return convertedToC;
  }
};

const convertToFahrenheit = function(celsius) {
  let convertedToF = (celsius * 9/5) + 32;
  if (!Number.isInteger(convertedToF)) {
    convertedToF = Math.round(convertedToF * 10) / 10;
    return convertedToF;
  } else {
    return convertedToF;
  }
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
