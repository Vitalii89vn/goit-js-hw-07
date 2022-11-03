import { galleryItems } from './gallery-items.js';
// Change code below this line
// console.log(galleryItems);

const gallery = document.querySelector('.gallery');
const galleryLink = document.querySelector('.gallery__link');
const modal = document.querySelectorAll('.modal');

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

let originalImgUrl = '';
gallery.addEventListener('click', onClickImg)

function onClickImg(event) {
    event.preventDefault();
    const currentEl = event.target;

    if (currentEl.nodeName !== 'IMG') {
        return
    }
   
      originalImgUrl = currentEl.dataset.source;
   
   
 console.log(originalImgUrl)
}

document.querySelector('.gallery').onclick = () => {
  basicLightbox.create(`
  <div class="modal">
		<img width="1280" src="${originalImgUrl}">
  </div>
	`).show()

}
 onShow: (instance) => {
	// Close when hitting escape.
	document.onkeydown = function(evt) {
		evt = evt || window.event;
		let isEscape = false;
		if ( "key" in evt ) {
			isEscape = ( evt.key === "Escape" || evt.key === "Esc" );
    }
    else {
			isEscape = ( evt.keyCode === 27 );
		}
		if ( isEscape ) {
			instance.close();
		}
	};
 }
