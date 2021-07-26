const galleryItems = [
    {
        preview:
            'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825__340.jpg',
        original:
            'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825_1280.jpg',
        description: 'Hokkaido Flower',
    },
    {
        preview:
            'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg',
        original:
            'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg',
        description: 'Container Haulage Freight',
    },
    {
        preview:
            'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg',
        original:
            'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg',
        description: 'Aerial Beach View',
    },
    {
        preview:
            'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg',
        original:
            'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg',
        description: 'Flower Blooms',
    },
    {
        preview:
            'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg',
        original:
            'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg',
        description: 'Alpine Mountains',
    },
    {
        preview:
            'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg',
        original:
            'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg',
        description: 'Mountain Lake Sailing',
    },
    {
        preview:
            'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg',
        original:
            'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg',
        description: 'Alpine Spring Meadows',
    },
    {
        preview:
            'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg',
        original:
            'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg',
        description: 'Nature Landscape',
    },
    {
        preview:
            'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg',
        original:
            'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg',
        description: 'Lighthouse Coast Sea',
    },
];

const galleryContainer = document.querySelector('ul.gallery');
const lightboxRef = document.querySelector('.js-lightbox');
const lightboxOverlyRef = document.querySelector('.lightbox__overlay');
const lightboxContentRef = document.querySelector('.lightbox__content');
const lightboxImageRef = document.querySelector('.lightbox__image');
const lightboxButtonRef = document.querySelector('[data-action="close-lightbox"]');

galleryContainer.addEventListener('click', onOpenModal)
lightboxButtonRef.addEventListener('click', onCloseModal);
window.addEventListener('keydown', onEscapeModalClose);
lightboxOverlyRef.addEventListener('click', onOverlayModalClose)

const galleryCards = createGalleryList(galleryItems);
galleryContainer.innerHTML = galleryCards;


function createGalleryList(galleryItems) {
    const markup = galleryItems
        .map(({ preview, original, description }) => {
            return `
            <li class="gallery__item">
  <a
    class="gallery__link"
    href="${original}"
  >
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>
         `;
        })
        .join('');
    return markup
}

function onOpenModal(evt) {
    evt.preventDefault();

    if (evt.target.nodeName !== 'IMG') {
        return;
    }
    lightboxRef.classList.add("is-open");
    lightboxImageRef.src = evt.target.dataset.source;
    lightboxImageRef.alt = evt.target.alt;
}

function onCloseModal(e) {
    if (e.target.nodeName === 'BUTTON') {
        removeLightboxClass();
    }
    console.log(e.target.nodeName)
}

function onEscapeModalClose(event) {
    if (event.key !== 'Escape') {
        return;
    }
    removeLightboxClass();
}

function onOverlayModalClose(event) {
    if (event.currentTarget === event.target) {
        removeLightboxClass();
    }
}

function removeLightboxClass() {
    lightboxRef.classList.remove("is-open")
    lightboxImageRef.src = '';
    lightboxImageRef.alt = '';
}
