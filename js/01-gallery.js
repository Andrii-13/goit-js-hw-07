import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector(".gallery");

getGallery(galleryItems);

gallery.addEventListener("click", handlerOpenModal);

function getGallery(arr) {
  const itemLi = addMarkup(arr);
  addListItem(itemLi);
}

function addMarkup(arr) {
  return arr
    .map(
      ({ preview, original, description }) => `<li class="gallery__item">
      <a href="${preview}" class="gallery__link" onclick="event.preventDefault()">
        <img src="${preview}" alt="${description}" class="gallery__image" data-source="${original}" />
      </a>
    </li>`
    )
    .join("");
}

function addListItem(item) {
  gallery.insertAdjacentHTML("beforeend", item);
}

function handlerOpenModal(e) {
  if (e.target.classList.value !== "gallery__image") {
    return;
  }

  const modal = basicLightbox.create(`
<div>
  <img src="${e.target.dataset.source}" />
</div>
`);
  modal.show();

  // if ()
}

// onClose: (instance) => {
//   console.log(object);
// };
// console.log(galleryItems);
