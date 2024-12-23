// Images and Notes Data
const images = [
  'image1.jpg', 'image2.jpg', 'image3.jpg',
  'image4.jpg', 'image5.jpg', 'image6.jpg',
  'image7.jpg', 'image8.jpg', 'image9.jpg'
];

const notes = [
  "You are the best mom in the world!",
  "Thank you for exyerhting you do for me Mom. I love you to infinity and beyond- Chris",
  "We love you to the moon and back.",
];


const gallery = document.getElementById('gallery');
const notesContainer = document.getElementById('notes');
const newImagesBtn = document.getElementById('newImagesBtn');

const imageModal = document.getElementById('imageModal');
const enlargedImage = document.getElementById('enlargedImage');
const closeImageModal = document.getElementById('closeImageModal');
const noteModal = document.getElementById('noteModal');
const expandedNote = document.getElementById('expandedNote');
const closeNoteModal = document.getElementById('closeNoteModal');

const getRandomItems = (arr, num) => {
  const shuffled = [...arr].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, num);
};

const renderImages = () => {
  const randomImages = getRandomItems(images, 3);
  gallery.innerHTML = randomImages
    .map(
      img => `
        <img src="${img}" alt="Favorite moment" class="gallery-image" />
      `
    )
    .join('');
};

const renderNotes = () => {
  notesContainer.innerHTML = notes
    .map(
      note => `
        <p class="note">${note}</p>
      `
    )
    .join('');
};

gallery.addEventListener('click', e => {
  if (e.target.tagName === 'IMG') {
    enlargedImage.src = e.target.src;
    imageModal.style.display = 'flex';
  }
});

notesContainer.addEventListener('click', e => {
  if (e.target.tagName === 'P') {
    expandedNote.textContent = e.target.textContent;
    noteModal.style.display = 'flex';
  }
});

const closeModal = modal => (modal.style.display = 'none');

closeImageModal.addEventListener('click', () => closeModal(imageModal));
closeNoteModal.addEventListener('click', () => closeModal(noteModal));

window.addEventListener('click', e => {
  if (e.target === imageModal) closeModal(imageModal);
  if (e.target === noteModal) closeModal(noteModal);
});

newImagesBtn.addEventListener('click', renderImages);

document.addEventListener('DOMContentLoaded', () => {
  renderImages();
  renderNotes();
});
