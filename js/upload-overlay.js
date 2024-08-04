const uploadButton = document.querySelector('.img-upload__input');
const uploadOverlay = document.querySelector('.img-upload__overlay');
const overlayCloseButton = document.querySelector('.img-upload__cancel');

function closeOnEscape (evt) {
  if(evt.key === 'Escape') {
    closeUploadOverlay();
  }
}

function closeUploadOverlay () {
  uploadOverlay.classList.add('hidden');
  document.body.classList.remove('modal-open');
  uploadButton.value = '';
  overlayCloseButton.removeEventListener('click', closeUploadOverlay);
  document.removeEventListener('keydown', closeOnEscape);
}

function openUploadOverlay () {
  uploadOverlay.classList.remove('hidden');
  document.body.classList.add('modal-open');
  overlayCloseButton.addEventListener('click', closeUploadOverlay);
  document.addEventListener('keydown', closeOnEscape);
}

uploadButton.addEventListener('change', openUploadOverlay);
