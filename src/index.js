module.exports = function toReadable(number) {
  const ones = [
    'zero',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
    'ten',
    'eleven',
    'twelve',
    'thirteen',
    'fourteen',
    'fifteen',
    'sixteen',
    'seventeen',
    'eighteen',
    'nineteen',
  ];

  const tens = [
    '',
    '',
    'twenty',
    'thirty',
    'forty',
    'fifty',
    'sixty',
    'seventy',
    'eighty',
    'ninety',
  ];

  if (number < 20) {
    return ones[number];
  }

  if (number < 100) {
    if (number % 10 === 0) {
      return tens[Math.floor(number / 10)];
    }
    return `${tens[Math.floor(number / 10)]} ${ones[number % 10]}`;
  }

  if (number < 1000) {
    if (number % 100 === 0) {
      return `${ones[Math.floor(number / 100)]} hundred`;
    }
    return `${ones[Math.floor(number / 100)]} hundred ${toReadable(number % 100)}`;
  }

  return '';
};
