const checkStringLength = (string, length) => string.length <= length;

// Строка короче 20 символов
checkStringLength('проверяемая строка', 20); // true
// Длина строки ровно 18 символов
checkStringLength('проверяемая строка', 18); // true
// Строка длиннее 10 символов
checkStringLength('проверяемая строка', 10); // false

const isPalindrome = (string) => {
  let reversedString = '';
  const formattedString = string.toLowerCase().replaceAll(' ','');
  for (let i = formattedString.length - 1; i >= 0; i--) {
    reversedString += formattedString[i];
  }
  return formattedString === reversedString;
};

// Строка является палиндромом
isPalindrome('топот'); // true
// Несмотря на разный регистр, тоже палиндром
isPalindrome('ДовОд'); // true
// Это не палиндром
isPalindrome('Кекс'); // false

const getNum = (string) => {
  if (typeof string === 'number') {
    string = string.toString();
  }
  let stringOfNumbers = '';
  string = string.replaceAll(' ', '');
  for (let i = 0; i < string.length; i++) {
    for (let j = 0; j < 10; j++) {
      if(parseInt(string[i], 10) === j) {
        stringOfNumbers += string[i];
      }
    }
  }
  return parseInt(stringOfNumbers, 10);
};

getNum('2023 год'); // 2023
getNum('ECMAScript 2022'); // 2022
getNum('1 кефир, 0.5 батона');// 105
getNum('агент 007'); // 7
getNum('а я томат'); // NaN
getNum(2023); // 2023
getNum(-1); // 1
getNum(1.5); // 15

