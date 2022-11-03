import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector('.gallery');
const galleryLink = document.querySelector('.gallery__link');
const galleryEl = document.querySelectorAll('.gallery__image');

const markupGallery = galleryItems.map(({ preview, original, description }) => {
    return `
<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" title="${description}"/>
</a>
    `
}).join('');
gallery.innerHTML = `${markupGallery}`;

let lightbox = new SimpleLightbox('.gallery a');


// gallery.addEventListener('click', onClickImg)
// function onClickImg(event) {
//     event.preventDefault();
//     const currentEl = event.target;

//     if (currentEl.nodeName !== 'IMG') {
//         return
//     }
// }
