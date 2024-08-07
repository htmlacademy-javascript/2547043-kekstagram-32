const getRandomInteger = (min, max) => {
  const lower = Math.ceil(Math.min(min, max));
  const upper = Math.floor(Math.max(min, max));
  return Math.floor(Math.random() * (upper - lower + 1) + lower);
};

const getUniqueRandomInteger = (min, max) => {
  const uniqueValues = [];
  return function () {
    let currentValue = getRandomInteger(min, max);
    const rangeOfValues = max - min + 1;
    if (uniqueValues.length >= rangeOfValues) {
      throw new Error(`Перебраны все числа из диапазона от ${min} до ${max}`);
    }
    while(uniqueValues.includes(currentValue)) {
      currentValue = getRandomInteger (min, max);
    }
    uniqueValues.push(currentValue);
    return currentValue;
  };
};

const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];

export {getRandomInteger, getRandomArrayElement, getUniqueRandomInteger};
