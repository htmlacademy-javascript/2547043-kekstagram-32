import { setupValidation } from './upload-form-validation.js';
import { initializeScale, destroyScale } from './scale.js';
import { initializeSlider, destroySlider } from './effects.js';

// todo: import pristine object instance from upload-form-validation.js

const uploadButton = document.querySelector('.img-upload__input');
const uploadOverlay = document.querySelector('.img-upload__overlay');
const overlayCloseButton = document.querySelector('.img-upload__cancel');

const uploadForm = document.querySelector('.img-upload__form');
const hashtagsField = uploadForm.querySelector('.text__hashtags');
const commentsField = uploadForm.querySelector('.text__description');

function closeOnEscapeKeydown (evt) {
  if(evt.key === 'Escape') {
    closeUploadOverlay();
  }
}

function onInputEscapeKeydown (evt) {
  if (evt.key === 'Escape') {
    evt.stopPropagation();
  }
}

function closeUploadOverlay () {
  uploadForm.reset();
  // pristine.reset();
  uploadOverlay.classList.add('hidden');
  document.body.classList.remove('modal-open');
  uploadButton.value = '';
  destroyScale();
  destroySlider();
  overlayCloseButton.removeEventListener('click', closeUploadOverlay);
  document.removeEventListener('keydown', closeOnEscapeKeydown);
  commentsField.removeEventListener('keydown', onInputEscapeKeydown);
  hashtagsField.removeEventListener('keydown', onInputEscapeKeydown);
}

function openUploadOverlay () {
  uploadOverlay.classList.remove('hidden');
  document.body.classList.add('modal-open');
  initializeScale();
  initializeSlider();
  overlayCloseButton.addEventListener('click', closeUploadOverlay);
  document.addEventListener('keydown', closeOnEscapeKeydown);
  commentsField.addEventListener('keydown', onInputEscapeKeydown);
  hashtagsField.addEventListener('keydown', onInputEscapeKeydown);
}

setupValidation(uploadForm, hashtagsField, commentsField);

uploadButton.addEventListener('change', openUploadOverlay);
