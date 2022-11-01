import { galleryItems } from './gallery-items.js';
// Change code below this line
// console.log(galleryItems);

const gallery = document.querySelector('.gallery');
const galleryLink = document.querySelector('.gallery__link');
const galleryEl = document.querySelector('.gallery__image');

const markupGallery = galleryItems.map(({preview, original, description}) => { 
      return `
<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>
    `
}).join('') 
gallery.innerHTML = `${markupGallery}`;
// console.log(markupGallery);

gallery.addEventListener('click', onClickImg)

function onClickImg(event) {
    event.preventDefault();
    const currentEl = event.target;

    if (currentEl.nodeName !== 'IMG') {
        return
    }
    
    //  currentEl.dataset.source;

}

document.querySelector('.gallery__image').onclick = () => {

	basicLightbox.create(`
		<img width="1280" src="${currentEl.dataset.source}">
	`).show()

}

