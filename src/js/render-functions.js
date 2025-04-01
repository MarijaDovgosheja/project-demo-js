import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader');
const loadMoreBtn = document.querySelector('.load-more');

const lightbox = new SimpleLightbox('.gallery a');

export function clearGallery() {
  gallery.innerHTML = '';
}

export function renderImages(images) {
  if (images.length === 0) {
    iziToast.error({
      message:
        'Sorry, there are no images matching your search query. Please try again!',
      messageColor: '#fff',
      backgroundColor: '#ef4040',
      position: 'topRight',
    });
    return;
  }

  const markup = images
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) => `
        <li class="gallery-item">
            <a href="${largeImageURL}">
                <img src="${webformatURL}" alt="${tags}" loading="lazy">
            </a>
            <div class="info">
                <div class="info-item">
                    <p class="info-title">Likes</p>
                    <p class="info-value">${likes}</p>
                </div>
                <div class="info-item">
                    <p class="info-title">Views</p>
                    <p class="info-value">${views}</p>
                </div>
                <div class="info-item">
                    <p class="info-title">Comments</p>
                    <p class="info-value">${comments}</p>
                </div>
                <div class="info-item">
                    <p class="info-title">Downloads</p>
                    <p class="info-value">${downloads}</p>
                </div>
            </div>
        </li>
    `
    )
    .join('');

  gallery.insertAdjacentHTML('beforeend', markup);
  lightbox.refresh();
}

export function showLoader() {
  loader.classList.remove('hidden');
}

export function hideLoader() {
  loader.classList.add('hidden');
}

export function showLoadMore() {
  loadMoreBtn.classList.remove('hidden');
}

export function hideLoadMore() {
  loadMoreBtn.classList.add('hidden');
}

// Функція для прокручування вниз
export function smoothScroll() {
  const galleryItem = document.querySelector('.gallery-item');
  if (galleryItem) {
    const { height } = galleryItem.getBoundingClientRect();
    window.scrollBy({ top: height * 2, behavior: 'smooth' });
  }
}
