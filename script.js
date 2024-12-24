const images = [
  'assets/moment1.JPEG', 'assets/moment2.JPEG', 'assets/moment3.JPG', 'assets/moment4.JPG', 'assets/moment5.JPG', 'assets/moment6.JPG',
  'assets/moment7.JPG', 'assets/moment8.JPG', 'assets/moment9.JPG', 'assets/moment10.JPG', 'assets/moment11.JPG', 'assets/moment12.JPG',
  'assets/moment13.JPEG', 'assets/moment14.JPEG', 'assets/moment15.JPEG', 'assets/moment16.JPEG', 'assets/moment20.JPG', 'assets/moment21.JPG',
  'assets/moment22.JPG', 'assets/moment23.JPG', 'assets/moment24.JPG', 'assets/moment25.JPG', 'assets/moment26.JPG', 'assets/moment27.JPG', 'assets/moment28.JPG',
  'assets/moment29.jpeg', 'assets/moment30.JPG', 'assets/moment31.JPG', 'assets/moment32.JPG', 'assets/moment33.JPEG', 'assets/moment34.JPEG',
  'assets/moment35.JPG', 'assets/moment36.JPG', 'assets/moment37.JPG', 'assets/moment38.PNG', 'assets/moment39.JPG', 'assets/moment40.PNG',
  'assets/moment41.JPEG', 'assets/moment42.jpg', 'assets/moment43.jpg', 'assets/moment44.jpg', 'assets/moment45.jpg', 'assets/moment46.jpg',
  'assets/moment52.jpg', 'assets/moment53.jpg', 'assets/moment54.jpg', 'assets/moment55.jpg', 'assets/moment56.jpg','assets/moment57.jpg', 
  'assets/moment59.jpg', 'assets/moment60.jpg', 'assets/moment61.jpg', 'assets/moment62.jpg','assets/moment63.jpg','assets/moment64.jpg',
  'assets/moment65.jpg',

];

const notesAndEssays = [
  {
      note: "Hi mommy! I love you so much Merry Christmas 🎁🎄 - Jackie",
      essay: `Dear mom,\n Thank you so much for all that you do for us. You have helped us grow into wonderful people and have guided us through so much of life’s journey. Thank you for always being there for us and I can’t wait for you to be a wonderful grandmother to our little baby. \n
            I love you so much and am so grateful for you.\n
            Love -Jackie `
  },
  {
      note: "Thank you for everything you do for me Mom. I love you to infinity and beyond. Merry Christmas ❤🎄 - Cree",
      essay: `Hi Mommy, \nI just wanted to say how grateful I am to have you in my life. You are the best mom ever and I am so proud of you. I look up to your strength and perseverance everyday of my life. You are my role model for everything I do in my day to day life. I’m honored to be able to call you my mom. You truly are the greatest mom in the world. I cannot wait to make many more memories with you and I miss our road trips together where we would talk together for hours at a time listening to the radio.\n
              I love you to infinity and beyond.\n
              From -Chris `
  },
  {
      note: "We love you to the moon and back.",
      essay: `Hi Mommy,\n\nWe are so lucky to have you in our lives. You are the glue that holds our family together, and we love you more than words can express. Here's to many more wonderful memories together.\n\nLove - Chris`
  }
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

let lastImages = [];
const getRandomItems = (arr, num, exclude = []) => {
  const filtered = arr.filter(item => !exclude.includes(item));
  for (let i = filtered.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [filtered[i], filtered[j]] = [filtered[j], filtered[i]]; // Swap
  }
  return filtered.slice(0, num);
};

const renderImages = () => {
  const randomImages = getRandomItems(images, 3, lastImages);
  lastImages = randomImages;
  gallery.innerHTML = randomImages
      .map(
          img => `
              <img src="${img}" alt="Favorite moment" class="gallery-image" />
          `
      )
      .join('');
};

const renderNotes = () => {
  notesContainer.innerHTML = notesAndEssays
      .map(
          (item, index) => `
              <p class="note" data-index="${index}">${item.note}</p>
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
      const index = e.target.getAttribute('data-index');
      expandedNote.innerHTML = notesAndEssays[index].essay.replace(/\n/g, '<br>');
      noteModal.style.display = 'flex';
  }
});

document.querySelectorAll('.close').forEach(closeButton => {
  closeButton.addEventListener('click', () => {
      closeModal(closeButton.closest('.modal'));
  });
});

document.querySelectorAll('.close-bottom').forEach(closeButton => {
  closeButton.addEventListener('click', () => {
      closeModal(closeButton.closest('.modal'));
  });
});

const closeModal = modal => { modal.style.display = 'none'; };

newImagesBtn.addEventListener('click', renderImages);

document.addEventListener('DOMContentLoaded', () => {
  renderImages();
  renderNotes();
});
