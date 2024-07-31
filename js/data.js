import {getRandomInteger, getRandomArrayElement, getUniqueRandomInteger} from './util.js';

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

const DESCRIPTIONS = [
  'Не проси уважения. Делай так, чтобы уважали.',
  'Сила – не в бабках. Ведь бабки – уже старые.',
  'Из проведённых 64-х боёв у меня 64 победы. Все бои были с тенью.',
  'Взял нож - режь, взял дошик - ешь.',
  'Я живу, как карта ляжет. Ты живёшь, как мамка скажет.',
  'Если заблудился в лесу, иди домой.',
  'В жизни всегда есть две дороги: одна — первая, а другая — вторая.',
  'Не будьте эгоистами, в первую очередь думайте о себе!',
  'Как говорил мой дед, «Я твой дед».',
  'Если тебе где-то не рады в рваных носках, то и в целых туда идти не стоит.',
  'Запомни: всего одна ошибка – и ты ошибся.',
  'Никогда не сдавайтесь, идите к своей цели! А если будет сложно – сдавайтесь.',
  'Если вы спросите у Чака Норриса: «Который час?», он всегда ответит: «Две секунды до». После того как вы спросите: «Две секунды до чего?», вы получите знаменитый удар ногой по лицу с разворота.'
];

const getUniqueRandomId = getUniqueRandomInteger(1, MAX_PHOTOS_COUNT);
const getUniqueCommentId = getUniqueRandomInteger(0, MAX_COMMENTS_COUNT);
const getUniqueRandomUrlNumber = getUniqueRandomInteger(1, MAX_PHOTOS_COUNT);

const generateComment = () => ({
  id: getUniqueCommentId(),
  avatar: `img/avatar-${getRandomInteger(1, MAX_AVATARS_COUNT)}.svg`,
  message: getRandomArrayElement(SENTENCES),
  name: getRandomArrayElement(NAMES),
});

const generatePhoto = () => ({
  id: getUniqueRandomId(),
  url: `photos/${getUniqueRandomUrlNumber()}.jpg`,
  description: getRandomArrayElement(DESCRIPTIONS),
  likes: getRandomInteger(...LIKES_RANGE),
  comments: Array.from({length: getRandomInteger(0, 30)}, generateComment),
});

const generatePhotos = () => Array.from({length: MAX_PHOTOS_COUNT}, generatePhoto);

export { generatePhotos };
