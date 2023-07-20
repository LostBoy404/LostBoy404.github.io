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

function getRandomImageUrl() {
  const randomIndex = Math.floor(Math.random() * imageUrls.length);
  return imageUrls[randomIndex];
}

function adjustImageSize(flexItem, imageWidth, imageHeight) {
  const containerWidth = flexItem.parentElement.clientWidth; // Width of the flex container
  const aspectRatio = imageWidth / imageHeight;
  const itemHeight = 200; // Fixed height for the flex items

  // Calculate the width of the flex item based on the aspect ratio and fixed height
  let itemWidth = itemHeight * aspectRatio;

  // Check if the calculated width exceeds the container width

  // Set the calculated width for the flex item
  flexItem.style.width = `${itemWidth}px`;
}

function changeImage(flexItem) {
  const imageUrl = getRandomImageUrl();
  const image = new Image();
  image.onload = function () {
    adjustImageSize(flexItem, image.width, image.height);
    flexItem.style.backgroundImage = `url('${imageUrl}')`;
  };
  image.src = imageUrl;
}

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

const imageContainer = document.getElementById('imageContainer');
createFlexItems(imageContainer, 12);
