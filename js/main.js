const MAX_PHOTOS_COUNT = 25;
const MAX_COMMENTS_COUNT = 999;
const MAX_AVATARS_COUNT = 6;
const LIKES_RANGE = [15, 200];

const NAMES = [
  'Ника',
  'Софья',
  'Артём',
  'Виктория',
  'Ирина',
  'Владимир',
  'Алина',
  'Варвара',
  'Руслан',
  'Павел',
  'Макар',
  'Иван',
  'Артур',
  'Егор',
  'Анастасия',
];
const SENTENCES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

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

const getUniqueRandomId = getUniqueRandomInteger(1, MAX_PHOTOS_COUNT);
const getUniqueCommentId = getUniqueRandomInteger(0, MAX_COMMENTS_COUNT);
const getUniqueRandomUrlNumber = getUniqueRandomInteger(1, MAX_PHOTOS_COUNT);

const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];

const createComment = () => ({
  id: getUniqueCommentId(),
  avatar: `img/avatar-${getRandomInteger(1, MAX_AVATARS_COUNT)}.svg`,
  message: getRandomArrayElement(SENTENCES),
  name: getRandomArrayElement(NAMES),
});

const createPhotoDescription = () => ({
  id: getUniqueRandomId(),
  url: `photos/${getUniqueRandomUrlNumber()}.jpg`,
  description: 'Template photo description.',
  likes: getRandomInteger(...LIKES_RANGE),
  comments: Array.from({length: getRandomInteger(0, 30)}, createComment),
});

const photos = Array.from({length: MAX_PHOTOS_COUNT}, createPhotoDescription);

photos.at(0);
