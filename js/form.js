const uploadForm = document.querySelector('.img-upload__form');
const hashtagsField = uploadForm.querySelector('.text__hashtags');
const commentsField = uploadForm.querySelector('.text__description');

const COMMENT_MAX_LENGTH = 140;
const MAX_HASHTAGS = 5;

const pristine = new Pristine(uploadForm, {
  classTo: '.img-upload__field-wrapper',
  errorTextParent: '.img-upload__field-wrapper',
  errorTextClass: '.img-upload__field-wrapper--error',
  errorTextTag: 'span',
});

const hasUniqueHashtags = (hashtagsArray) => {
  const hashtagsCopy = hashtagsArray.slice();
  for (let i = 0; i < hashtagsCopy.length; i++) {
    hashtagsCopy.splice(i, 1);
    if (hashtagsCopy.includes(hashtagsArray[i])) {
      return false;
    } else {
      hashtagsCopy.splice(i, 0, hashtagsArray[i]);
    }
  }
  return true;
};

const validateHashtags = (value) => {
  const hashtags = value.trim().split(' ');
  const hashtagRule = /^#[a-zа-яё0-9]{1,19}$/i;
  if (hashtags.length <= MAX_HASHTAGS && hasUniqueHashtags(hashtags) && hashtags.every((item) => hashtagRule.test(item))) {
    return true;
  }
  return false;
};

const getHashtagsErrorMessage = () => {
  const hashtags = hashtagsField.value.trim().split(' ');
  const hashtagRule = /^#[a-zа-яё0-9]{1,19}$/i;
  switch (false) {
    case (hashtags.length <= MAX_HASHTAGS):
      return 'Максимальное количество хэштегов - 5.';
    case (hasUniqueHashtags(hashtags)):
      return 'Хэштеги не должны повторяться.';
    case (hashtags.every((item) => hashtagRule.test(item))):
      return 'Один из хэштэгов введён неправильно.';
  }
};

pristine.addValidator(
  hashtagsField,
  validateHashtags,
  getHashtagsErrorMessage
);

const validateComment = (value) => (value.length <= COMMENT_MAX_LENGTH);

const getCommentsErrorMessage = () => 'Максимальная длина комментария 140 символов';

pristine.addValidator(
  commentsField,
  validateComment,
  getCommentsErrorMessage
);

uploadForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  pristine.validate();

  if (pristine.validate()) {
    console.log('Форма отправлена');
  } else {
    console.log('Форма не отправлена');
  }
});

