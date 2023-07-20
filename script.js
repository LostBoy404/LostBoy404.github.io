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
        "https://res.cloudinary.com/css-tricks/image/upload/f_auto,q_auto/v1568814785/photostream-photos/DSC05544_aczrb9.jpg",
        "https://res.cloudinary.com/css-tricks/image/upload/f_auto,q_auto/v1568814785/photostream-photos/DSC05447_mvffor.jpg",
        "https://res.cloudinary.com/css-tricks/image/upload/f_auto,q_auto/v1568814784/photostream-photos/DSC05501_yirmq8.jpg",
        "https://res.cloudinary.com/css-tricks/image/upload/f_auto,q_auto/v1568814784/photostream-photos/DSC05624_f5b2ud.jpg",
        "https://res.cloudinary.com/css-tricks/image/upload/f_auto,q_auto/v1568814784/photostream-photos/DSC05623_dcpfva.jpg",
        "https://res.cloudinary.com/css-tricks/image/upload/f_auto,q_auto/v1568814784/photostream-photos/DSC05515_d2gzut.jpg",
        "https://res.cloudinary.com/css-tricks/image/upload/f_auto,q_auto/v1568814784/photostream-photos/DSC05581_ceocwv.jpg",
        "https://res.cloudinary.com/css-tricks/image/upload/f_auto,q_auto/v1568814784/photostream-photos/DSC05517_ni2k0p.jpg",
        "https://res.cloudinary.com/css-tricks/image/upload/f_auto,q_auto/v1568814783/photostream-photos/DSC05620_qfwycq.jpg",
        "https://res.cloudinary.com/css-tricks/image/upload/f_auto,q_auto/v1568814783/photostream-photos/DSC05462_b33uvp.jpg"
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

// Function to set the image as a background of the flex item
function setImageAsBackground(flexItem, imageUrl) {
  flexItem.style.backgroundImage = `url('${imageUrl}')`;
}

// Function to calculate the width based on image width
function calculateWidth(imageUrl) {
  const img = new Image();
  img.src = imageUrl;
  return img.width;
}

// Function to create and append flex items to the container
function createFlexItems(container, count) {
  for (let i = 0; i < count; i++) {
    const flexItem = document.createElement('div');
    flexItem.classList.add('flex-item');

    const imageUrl = getRandomImageUrl();
    setImageAsBackground(flexItem, imageUrl);

    // Get the image width and set it as the flex item's width
    const imageWidth = calculateWidth(imageUrl);
    flexItem.style.width = `${imageWidth}px`;

    container.appendChild(flexItem);

    // Change the image every 3 seconds
    setInterval(() => {
      const newImageUrl = getRandomImageUrl();
      setImageAsBackground(flexItem, newImageUrl);

      // Update the width based on the new image width
      const newImageWidth = calculateWidth(newImageUrl);
      flexItem.style.width = `${newImageWidth}px`;
    }, 3000);
  }
}

const imageContainer = document.getElementById('imageContainer');
createFlexItems(imageContainer, 12); // Change 12 to the number of flex items you want
