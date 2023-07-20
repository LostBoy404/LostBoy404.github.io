// Define an array of image URLs
const imageUrls = [
  "https://res.cloudinary.com/css-tricks/image/upload/f_auto,q_auto/v1568814785/photostream-photos/DSC05466_kwlv0n.jpg",
  "https://res.cloudinary.com/css-tricks/image/upload/f_auto,q_auto/v1568814785/photostream-photos/DSC05621_zgtcco.jpg",
  "https://res.cloudinary.com/css-tricks/image/upload/f_auto,q_auto/v1568814785/photostream-photos/DSC05513_gfbiwi.jpg",
  "https://res.cloudinary.com/css-tricks/image/upload/f_auto,q_auto/v1568814785/photostream-photos/DSC05588_nb0dma.jpg",
  "https://res.cloudinary.com/css-tricks/image/upload/f_auto,q_auto/v1568814785/photostream-photos/DSC05459_ziuomy.jpg",
  "https://res.cloudinary.com/css-tricks/image/upload/f_auto,q_auto/v1568814785/photostream-photos/DSC05586_oj8jfo.jpg",
  "https://res.cloudinary.com/css-tricks/image/upload/f_auto,q_auto/v1568814785/photostream-photos/DSC05465_dtkwef.jpg",
  "https://res.cloudinary.com/css-tricks/image/upload/f_auto,q_auto/v1568814785/photostream-photos/DSC05626_ytsf3j.jpg",
  "https://res.cloudinary.com/css-tricks/image/upload/f_auto,q_auto/v1568814785/photostream-photos/DSC05449_l9kukz.jpg",
  // Add more image URLs as needed
];

// Function to get a random image URL from the array
function getRandomImageUrl() {
  const randomIndex = Math.floor(Math.random() * imageUrls.length);
  return imageUrls[randomIndex];
}

// Function to change the image of a flex item
function changeImage(flexItem) {
  const imageUrl = getRandomImageUrl();
  flexItem.style.backgroundImage = `url('${imageUrl}')`;
}

// Function to create and append flex items to the container
function createFlexItems(container, count) {
  for (let i = 0; i < count; i++) {
    const flexItem = document.createElement('div');
    flexItem.classList.add('flex-item');
    container.appendChild(flexItem);
    changeImage(flexItem); // Set a random image initially

    // Change the image every 3 seconds
    setInterval(() => {
      changeImage(flexItem);
    }, 3000);
  }
}

// Get the container and create the flex items
const imageContainer = document.getElementById('imageContainer');
createFlexItems(imageContainer, 12); // Change 12 to the number of flex items you want
