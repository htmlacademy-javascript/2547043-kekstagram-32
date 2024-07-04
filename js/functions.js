//Функция для проверки длины строки.(1)
const checkStringLength = (string, length) => (string.length <= length);

//Функция для проверки, является ли строка палиндромом.
const isPalindrome = (string) => {
  let reversedString = '';
  string = string.toLowerCase();
  string = string.replaceAll(' ','');

  for (let i = string.length - 1; i >= 0; i--) {
    reversedString += string[i];
  }
  return (string === reversedString);
};

// *дополнительное задание* Функция которая возвращает положительное число из строки

const getNum = (string) => {
  if (typeof string === 'number') { // Если в качестве аргумента получаем число
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

