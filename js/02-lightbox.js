import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector(".gallery");

createMurkap(galleryItems);

function createMurkap(arr) {
  const li = arr
    .map(
      ({ preview, original, description }) => `<li class="gallery__item">
   <a class="gallery__link" href="${original}" onclick="event.preventDefault()">
      <img class="gallery__image" src="${preview}" alt="${description}" />
   </a>
</li>`
    )
    .join("");
  const murkap = gallery.insertAdjacentHTML("beforeend", li);
  return murkap;
}

let lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});

// console.log(galleryItems);
