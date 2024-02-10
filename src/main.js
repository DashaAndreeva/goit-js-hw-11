'use strict';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const refs = {
  form: document.querySelector('.form'),
  input: document.querySelector('.input-search'),
  button: document.querySelector('.button'),
  gallery: document.querySelector('.gallery'),
};

refs.form.addEventListener('submit', onFormSubmit);

function onFormSubmit(e) {
  e.preventDefault();

  if (refs.input.value.trim() === '') {
    return;
  }

  const userRequest = e.target.elements.search.value;

  getPhotosByRequest(userRequest)
    .then(data => {
      if (data.hits.length === 0) {
        clearGallery();
        iziToast.error({
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          position: 'topRight',
          transitionIn: 'fadeInLeft',
        });
      } else {
        renderPhotos(data.hits);
      }
    })
    .catch(err => {
      alert(err);
    });

  e.target.reset();
}

function getPhotosByRequest(userRequest) {
  const API_KEY = '42307458-71f98d2a331f0bd294b8fc1ec';

  const BASE_URL = 'https://pixabay.com';
  const END_POINTS = '/api/';
  const PARAMS = `?key=${API_KEY}&q=${userRequest}&image_type=photo&orientation=horizontal&safesearch=true`;

  const url = BASE_URL + END_POINTS + PARAMS;

  return fetch(url).then(res => res.json());
}

function photosTemplate(photos) {
  return photos
    .map(data => {
      return `
    <li class="gallery-item"><a href="${data.largeImageURL}">
          <img class="gallery-image" src="${data.webformatURL}" alt="${data.tags}"></a>
          <div class="info">
          <p> <span class="info-text">Likes</span> <br/> ${data.likes}</p>
          <p><span class="info-text">Views</span> <br/> ${data.views}</p>
          <p><span class="info-text">Comments</span> <br/> ${data.comments}</p>
          <p><span class="info-text">Downloads</span> <br/> ${data.downloads}</p>
          </div>
          </li>
    `;
    })
    .join('');
}

function renderPhotos(photos) {
  const galleryMarkup = photosTemplate(photos);
  refs.gallery.innerHTML = galleryMarkup;
}

function clearGallery() {
  refs.gallery.innerHTML = '';
}
